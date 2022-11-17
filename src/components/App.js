import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AboutUs from './AboutUs'
import SignUp from './signup/SignUp'
import Login from './login/Login'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AboutUs/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

