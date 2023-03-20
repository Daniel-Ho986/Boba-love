import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'

import AboutUs from './aboutUs/AboutUs'
import SignUp from './signup/SignUp'
import Login from './login/Login'
import Main from './After-Logged/After-logged'
import ProtectedRoute from './ProtectedRoute'

export default function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<AboutUs/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/main' element={<ProtectedRoute><Main/></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    )
}

