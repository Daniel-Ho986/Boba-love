import React from 'react'
import { Carousel } from 'react-bootstrap'
import Navbar from './navigationBar/NavigationBar'
import Member from './member/Member'

import './aboutUs.css'
import drink from '../images/slideshow-drinks.jpg'
import phone from '../images/slideshow-phone.jpg'
import friends from '../images/slideshow-friends.jpg'

// Team member images
import Daniel from '../../src/assets/members/Daniel.png'
import Simon from '../../src/assets/members/Simon.png'
import Maxwell from '../../src/assets/members/Maxwell.png'
import Jacklyn from '../../src/assets/members/Jacklyn.png'
import HaoRen from '../../src/assets/members/HaoRen.png'

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
                    <div className="team-card" id="member1">
                        <Member 
                            name="Daniel Ho" 
                            image={Daniel}
                            role="Full Stack" 
                            drink="Brown Sugar"
                        />
                    </div>
                    <div className="team-card" id="member2">
                        <Member
                            name="Simon Hsia" 
                            image={Simon}
                            role="Backend" 
                            drink="Brown Sugar"
                        />
                    </div>
                    <div className="team-card" id="member3">
                        <Member
                            name="Maxwell Sylvestre" 
                            image={Maxwell}
                            role="Frontend" 
                            drink="Brown Sugar"
                        />
                    </div>
                    <div className="team-card" id="member4">
                        <Member
                            name="Jacklyn Yoon" 
                            image={Jacklyn}
                            role="UI/UX" 
                            drink="Brown Sugar"
                        />
                    </div>
                    <div className="team-card" id="member5">
                        <Member
                            name="Hao Ren Yuan" 
                            image={HaoRen}
                            role="Graphics & Backend" 
                            drink="Water"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

