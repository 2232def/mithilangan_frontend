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

      
      </Routes>
    </>
  
  )
}

export default App
