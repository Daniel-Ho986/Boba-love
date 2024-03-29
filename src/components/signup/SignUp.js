import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

import './signup.css'
import logo from '../../assets/icons/boba-love-logo.png'
import leftArrow from '../../assets/icons/arrow-left.png'
import google from '../../assets/icons/google-logo.png'


export default function SignUp() {
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser }  = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            navigate('/main')
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div className='signup-page'>
            <div className='container'>
                <Link to='/'>
                    <img id='signup-logo' src={logo} alt='Logo'/>
                </Link>
            </div>
            <div className='container'>
                <div className='signup-card'>
                    <Link to='/'>
                        <img className='left-arrow' src={leftArrow} alt='Left Arrow'/>
                    </Link>
                    <h2 className='header'>Join Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='grid'>
                            <section className='name' id='firstname'>
                                <label>
                                    First Name
                                    <span className='astrix'>*</span>
                                </label>
                                <input 
                                    type='text' 
                                    className='textfield' 
                                    onChange={(e) => setFirstname(e.target.value)}
                                    required />
                            </section>
                            <section className='name' id='lastname'>
                                <label>
                                    Last Name
                                    <span className='astrix'>*</span>
                                </label>
                                <input 
                                    type='text' 
                                    className='textfield' 
                                    onChange={(e) => setLastname(e.target.value)}
                                    required />
                            </section>
                            <section id='email'>
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
                            <section id='password'>
                                <label>
                                    Password
                                    <span className='astrix'>*</span>
                                </label>
                                <input 
                                    type='password' 
                                    className='textfield' 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </section>
                            <button className='signup-button' id='submit' type='submit'>Sign Up</button>
                            <div id='existing-user'>
                                Already a user? <Link className='login' to='/login'>Login</Link>
                            </div>

                            {/* Temporary Until Authentication */}
                            <button className='button' id='google'>
                                <img id='google-logo' src={google} alt='google'/>
                                Sign up with Google
                            </button>
                        </div>   
                    </form>   
                </div>
            </div>
        </div>
    )
}