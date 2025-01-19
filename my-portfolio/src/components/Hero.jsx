import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box />
          <OrbitControls />
        </Canvas>
      </div>
      
      <div className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          <span className="text-neon-pink">Hello, I'm</span>
          <span className="text-neon-blue"> YourName</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Full Stack Developer | UI/UX Designer | Creative Coder
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-neon-purple text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors"
        >
          View My Work
        </motion.button>
      </div>
    </section>
  )
}

export default Hero