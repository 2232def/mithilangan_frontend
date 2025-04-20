import React from 'react'
import './App.css'
import Container from './Container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
 
 
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Container/>} />

        {/* Login Route */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* SignIn Route */}
    
      </Routes>
    </>
  
  )
}

export default App
