import React from 'react'
import { Carousel } from 'react-bootstrap'
import Navbar from './navigationBar/NavigationBar'
import Member from './member/Member'

import './aboutUs.css'
import drink from '../images/slideshow-drinks.jpg'
import phone from '../images/slideshow-phone.jpg'
import friends from '../images/slideshow-friends.jpg'


export default function AboutUs() {
  return (
    <div>
        <Navbar/>
        <div className='carousel-container'>
            <Carousel 
                // controls={false}
                // indicators={false}
            >
                <Carousel.Item>
                    <img
                        className='d-block carousel-image'
                        src={drink}
                        alt='First slide'
                    />
                    <Carousel.Caption className='caption'>
                        <h3>First slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block carousel-image'
                        src={phone}
                        alt='Second slide'
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block carousel-image'
                        src={friends}
                        alt='Third slide'
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Third slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='team-container'>
            <h1>Meet Our Team: Sussy Bakas</h1>
            <div className="team-grid">
                <div className="member1">
                    <Member/>
                </div>
                <div className="member2">
                    <Member/>
                </div>
                <div className="member3">
                    <Member/>
                </div>
                <div className="member4">
                    <Member/>
                </div>
                <div className="member5">
                    <Member/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

