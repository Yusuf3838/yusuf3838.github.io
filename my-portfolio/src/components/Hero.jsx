import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load Three.js and OrbitControls - only loads when Hero mounts
const loadThreeJS = async () => {
  const THREE = await import('three');
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
  return { THREE, OrbitControls };
};

const Hero = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [threeLoaded, setThreeLoaded] = useState(false);
  
  const animationFrameRef = useRef();
  const controlsRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const meshRef = useRef();

  // CRITICAL: Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          
          if (controlsRef.current) {
            controlsRef.current.enabled = entry.isIntersecting;
          }
          
          console.log('Hero section visible:', entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    let cleanup;

    // Async function to load Three.js and setup scene
    const initThreeJS = async () => {
      try {
        console.log('Loading Three.js...');
        const { THREE, OrbitControls } = await loadThreeJS();
        setThreeLoaded(true);
        console.log('Three.js loaded successfully');

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(0, 0, 0.1);
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          antialias: window.devicePixelRatio <= 1,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
          preserveDrawingBuffer: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        rendererRef.current = renderer;

        // Reduced geometry
        const geometry = new THREE.SphereGeometry(500, 32, 16);
        
        // Texture loader
        const loadingManager = new THREE.LoadingManager();
        
        loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
          console.log('Started loading:', url);
          setLoadingProgress(0);
        };

        loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
          const progress = (itemsLoaded / itemsTotal) * 100;
          console.log(`Loading progress: ${progress.toFixed(0)}%`);
          setLoadingProgress(progress);
        };
        
        loadingManager.onLoad = () => {
          console.log('Panorama loaded successfully');
          setLoadingProgress(100);
          setTimeout(() => setIsLoading(false), 300);
        };

        loadingManager.onError = (url) => {
          console.error('Error loading texture:', url);
          setLoadError(true);
          setIsLoading(false);
        };

        const textureLoader = new THREE.TextureLoader(loadingManager);
        
        const getOptimalTextureURL = () => {
          const width = window.innerWidth;
          if (width < 768) {
            return 'https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/qwantani_dusk_2.jpg';
          }
          return 'https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/qwantani_dusk_2.jpg';
        };
        
        const texture = textureLoader.load(
          getOptimalTextureURL(),
          () => {
            console.log('Texture loaded');
          },
          undefined,
          (error) => {
            console.error('Texture loading error:', error);
            setLoadError(true);
            setIsLoading(false);
          }
        );
        
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.BackSide,
        });

        const sphere = new THREE.Mesh(geometry, material);
        meshRef.current = sphere;
        scene.add(sphere);

        // OrbitControls setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;
        
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = -0.5;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI;
        controls.target.set(0, 0, 0);
        controls.update();

        // Track dragging
        const onPointerDown = () => {
          setIsDragging(true);
          setHasInteracted(true);
        };
        const onPointerUp = () => setIsDragging(false);
        const onPointerCancel = () => setIsDragging(false);
        
        renderer.domElement.addEventListener('pointerdown', onPointerDown);
        renderer.domElement.addEventListener('pointerup', onPointerUp);
        renderer.domElement.addEventListener('pointercancel', onPointerCancel);

        // Handle resize
        let resizeTimeout;
        const handleResize = () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          }, 100);
        };

        window.addEventListener('resize', handleResize);

        // Reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          controls.enableDamping = false;
        }

        // Tab visibility
        let isTabVisible = true;
        const handleVisibilityChange = () => {
          isTabVisible = !document.hidden;
          console.log('Tab visible:', isTabVisible);
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Animation loop
        const animate = () => {
          animationFrameRef.current = requestAnimationFrame(animate);
          
          if (isTabVisible && isVisible && !isLoading) {
            controls.update();
            renderer.render(scene, camera);
          }
        };

        animate();

        // Auto-hide hint
        const hintTimeout = setTimeout(() => {
          setHasInteracted(true);
        }, 4000);

        // Setup cleanup function
        cleanup = () => {
          console.log('Cleaning up Three.js resources...');
          
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          
          clearTimeout(hintTimeout);
          clearTimeout(resizeTimeout);
          
          window.removeEventListener('resize', handleResize);
          document.removeEventListener('visibilitychange', handleVisibilityChange);
          renderer.domElement.removeEventListener('pointerdown', onPointerDown);
          renderer.domElement.removeEventListener('pointerup', onPointerUp);
          renderer.domElement.removeEventListener('pointercancel', onPointerCancel);
          
          geometry.dispose();
          material.dispose();
          texture.dispose();
          renderer.dispose();
          controls.dispose();
          
          sceneRef.current = null;
          cameraRef.current = null;
          rendererRef.current = null;
          controlsRef.current = null;
          meshRef.current = null;
          
          console.log('Cleanup complete');
        };
      } catch (error) {
        console.error('Error loading Three.js:', error);
        setLoadError(true);
        setIsLoading(false);
      }
    };

    initThreeJS();

    return () => {
      if (cleanup) cleanup();
    };
  }, [isLoading, isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="home"
      className="snap-start snap-always relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ 
          userSelect: 'none',
        }}
      />

      {/* Enhanced Loading State */}
      {isLoading && !loadError && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-20"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-md px-6">
            {/* Animated spinner ring */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/30 border-r-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-transparent border-t-white/50 border-l-white/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center pulse */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span 
                  className="text-2xl font-bold text-white"
                  key={loadingProgress}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.5)',
                  }}
                >
                  {Math.round(loadingProgress)}%
                </motion.span>
              </div>
            </div>
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 
                className="text-xl font-semibold text-white mb-3 tracking-wide"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                Loading Panorama
              </h3>
              <p 
                className="text-white/60 text-sm tracking-wider uppercase mb-6"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                Preparing your immersive experience
              </p>
            </motion.div>
            
            {/* Progress bar */}
            <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
                }}
              />
              
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '50%' }}
              />
            </div>
            
            {/* Loading stages */}
            <motion.p 
              className="mt-4 text-white/40 text-xs tracking-wider"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              {!threeLoaded && "Loading 3D engine..."}
              {threeLoaded && loadingProgress < 30 && "Initializing 3D environment..."}
              {threeLoaded && loadingProgress >= 30 && loadingProgress < 70 && "Loading high-resolution textures..."}
              {threeLoaded && loadingProgress >= 70 && loadingProgress < 100 && "Finalizing scene..."}
              {loadingProgress === 100 && "Ready!"}
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Error State */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="text-center max-w-md px-6">
            <p className="text-white/80 text-lg font-light mb-4">
              Unable to load panorama
            </p>
            <p className="text-white/60 text-sm mb-6">
              Please check your connection and try again
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 text-white/90 text-sm tracking-wider uppercase border border-white/20 rounded-lg hover:bg-white/10 transition-all"
            >
              Reload
            </button>
          </div>
        </div>
      )}

      {/* UI Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center"
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
            }}
          >
            <motion.span
              className="block text-white"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))',
              }}
            >
              YUSUF
            </motion.span>
            <motion.span
              className="block text-white"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))',
              }}
            >
              SHEIKHALI
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-white/90 text-lg md:text-xl tracking-widest uppercase"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            Portfolio
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Hint Text */}
      {!isLoading && !hasInteracted && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p 
            className="text-white/70 text-sm md:text-base font-light tracking-wider uppercase text-center"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            Drag to explore • Scroll to continue
          </p>
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasInteracted ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;