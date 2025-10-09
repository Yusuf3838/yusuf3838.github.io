import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollContainer from './components/ScrollContainer.jsx';

function App() {
  return (
    <ScrollContainer>
      <Hero />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </ScrollContainer>
  );
}

export default App;