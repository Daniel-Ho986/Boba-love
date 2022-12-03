import React from 'react'
import { Link } from 'react-router-dom'

import './signup.css'
import logo from '../../icons/boba-love-logo.png'
import leftArrow from '../../icons/arrow-left.png'
import google from '../../icons/google-logo.png'

export default function SignUp() {
  return (
    <div className='page'>
        <div className='container'>
            <img id='signup-logo' src={logo} alt='Logo'/>
        </div>
        <div className='container'>
            <div className='signup-card'>
                <Link to='/'>
                    <img className='left-arrow' src={leftArrow} alt='Left Arrow'/>
                </Link>
                <h2 className='header'>Join Us</h2>
                <form>
                    <div className='grid'>
                        <section className='name' id='firstname'>
                            <label>
                                First Name
                                <span className='astrix'>*</span>
                            </label>
                            <input type='text' className='textfield' required />
                        </section>
                        <section className='name' id='lastname'>
                            <label>
                                Last Name
                                <span className='astrix'>*</span>
                            </label>
                            <input type='text' className='textfield' required />
                        </section>
                        <section id='email'>
                            <label>
                                Email Address
                                <span className='astrix'>*</span>
                            </label>
                            <input type='email' className='textfield' required />
                        </section>
                        <section id='password'>
                            <label>
                                Password
                                <span className='astrix'>*</span>
                            </label>
                            <input type='password' className='textfield' required />
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