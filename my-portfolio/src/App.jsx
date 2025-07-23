import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import WhatIDo from './components/WhatIDo.jsx'; // Import the WhatIDo component
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo /> {/* Add the WhatIDo component here */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;