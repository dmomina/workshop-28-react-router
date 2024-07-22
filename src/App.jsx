import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue/Blue';
import Red from './components/Red/Red';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home/>} /> 
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
