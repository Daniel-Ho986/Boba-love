import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

import './login.css'
import leftArrow from '../../assets/icons/arrow-left.png'
import logo from '../../assets/icons/boba-love-logo.png'

export default function Login() {
    const { signIn } = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/')
        } catch (e) {
            setError(e.message)
        }
    } 

    return (
        <div className='login-page'>
            <div className='container'>
                <Link to='/'> 
                    <img id='login-logo' src={logo} alt='Logo'/>
                </Link>
            </div>
            <div className='container'>
                <div className='login-card'>
                    <Link to='/'>
                        <img className='left-arrow' src={leftArrow} alt='Left Arrow'/>
                    </Link>
                    <h2 className='header'>Log In Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='login-grid'>
                            <section id='login-email'>
                                <label>
                                    Email Address
                                    <span className='astrix'>*</span>
                                </label>
                                <input 
                                    type='email' 
                                    className='textfield' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </section>
                            <section id='login-password'>
                                <label>
                                    Password
                                    <span className='astrix'>*</span>
                                </label>
                                <input 
                                    type='password' 
                                    className='textfield' 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <Link className='forgot-password' to='/'>Forgot Password?</Link>
                            </section>
                            <button className='login-button' id='login-submit' type='submit'>Log In</button>
                            <div id='new-user'>
                                New user? <Link className='signup' to='/signup'>Sign Up</Link>
                            </div>
                        </div>   
                    </form>   
                </div>
            </div>
        </div>
    )
}