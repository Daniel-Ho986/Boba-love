import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, OverlayTrigger, Popover} from 'react-bootstrap'
import { UserAuth } from '../context/AuthContext';
import Avatar from 'react-avatar';

import SearchBar from '../searchBar/SearchBar';

import './navigationBar.css'
import logo from '../../assets/icons/boba-love-logo.png'
import avatar from '../../assets/images/slideshow-friends.jpg' 

export default function NavigationBar() {
    const [error, setError] = useState('')
    const { user, logout } = UserAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/')
        } catch {
            setError('Failed to log out')
            console.log(error)
        }
    }

    function handleProfile() {
        navigate('/')
    }

    const popover = (
        <Popover id='popover-contained' style={{textAlign:'center' }}>
            <Popover.Header as='h3' 
                style={{ 
                    background: '#fed8cc', 
                    fontWeight: '700',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase'      
                }}
            >
                {user && user.email}
            </Popover.Header>
            <Popover.Body style={{ background: '#FFFBF8' }}>
                <div>
                    <button className='popover-button popover-profile mx-2' onClick={handleProfile}>Profile</button>
                    <button className='popover-button popover-logout mx-2' onClick={handleLogout}>Logout</button>
                </div>
            </Popover.Body>
        </Popover>
    )

    return (
        <Navbar style={{ background: '#FEE2CC' }} sticky='top'>
            <Navbar.Brand href='/' className='ps-2'>
                <img id='nav-logo' className='ps-3' src={logo} alt='Logo'/>
            </Navbar.Brand>

            {user == null ? null :
                <SearchBar className='justify-content-start'/>
            }

            <Navbar.Collapse className='justify-content-end pe-4'>
                {user == null ? ( 
                    <>
                        <button className='nav-button nav-login mx-2 px-3'>
                            <Link className='nav-login-link' to='/login'>Log in</Link>
                        </button>
                        <button className='nav-button nav-register mx-2'>
                            <Link className='nav-register-link' to='/signup'>Register</Link>
                        </button> 
                    </> ) : ( 
                    <>
                        {/* <SearchBar/> */}
                        <OverlayTrigger trigger='click' placement='bottom' overlay={popover} >
                            <Avatar 
                                className='profile-icon'
                                src={avatar}            
                                name={user && user.email}
                                alt={user && user.email}
                                size='50'
                                round={true}
                            />
                        </OverlayTrigger>
                    </> )
                }
            </Navbar.Collapse>
        </Navbar>
    )
}
