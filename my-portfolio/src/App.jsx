import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function App() {
    return (
      <div className="bg-dark min-h-screen text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
