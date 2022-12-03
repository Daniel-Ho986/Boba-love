import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import './navigationBar.css'
import logo from '../../icons/boba-love-logo.png'

export default function NavigationBar() {
  return (
    <Navbar variant='dark' style={{ background: '#FEE2CC'}} sticky='top'>
        <Navbar.Brand href='/' className='ps-2'>
            <img id='nav-logo' className='ps-3' src={logo} alt='Logo'/>
        </Navbar.Brand>

        <Navbar.Collapse className='justify-content-end pe-3'>
                <button className='nav-button nav-login mx-2 px-3'>
                    <Link className='nav-login-link' to='/login'>Log in</Link>
                </button>
                <button className='nav-button nav-register mx-2'>
                    <Link className='nav-register-link' to='/signup'>Register</Link>
                </button>
        </Navbar.Collapse>
    </Navbar>
  )
}
