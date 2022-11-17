import React from 'react'
import { Link } from 'react-router-dom'

import './login.css'
import logo from '../../images/boba-love-logo.png'
import leftArrow from '../../icons/arrow-left.png'

export default function Login() {
  return (
    <div className='page'>
        <div className='container'>
            <img id='logo' src={logo} alt='Logo'/>
        </div>
        <div className='container'>
            <div className='login-card'>
                <Link to='/'>
                    <img className='left-arrow' src={leftArrow} alt='Left Arrow'/>
                </Link>
                <h2 className='header'>Log In Your Account</h2>
                <form>
                    <div className='login-grid'>
                        <section id='login-email'>
                            <label>
                                Email Address
                                <span className='astrix'>*</span>
                            </label>
                            <input type='email' className='textfield' required />
                        </section>
                        <section id='login-password'>
                            <label>
                                Password
                                <span className='astrix'>*</span>
                            </label>
                            <input type='password' className='textfield' required />
                        </section>
                        <button className='button' id='login-submit' type='submit'>Log In</button>
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