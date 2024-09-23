import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/navbar';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

    </>
  )
}

export default App;