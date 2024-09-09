import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './page/Home'
import About from './page/About'
import Experience from './page/Experience'


import Header from './component/Header'
import Footer from './component/Footer'



function App() {


  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
