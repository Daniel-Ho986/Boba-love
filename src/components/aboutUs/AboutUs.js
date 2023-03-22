import React from 'react'
import { Carousel } from 'react-bootstrap'
import Navbar from '../navigationBar/NavigationBar'
import Member from '../member/Member'

import './aboutUs.css'
import slideshow1 from '../../assets/images/slideshow/slideshow1.jpg'
import slideshow2 from '../../assets/images/slideshow/slideshow2.jpg'
import slideshow3 from '../../assets/images/slideshow/slideshow3.jpg'
import slideshow4 from '../../assets/images/slideshow/slideshow4.png'
import slideshow5 from '../../assets/images/slideshow/slideshow5.png'

// Team member images
import Daniel from '../../assets/members/Daniel.png'
import Simon from '../../assets/members/Simon.png'
import Maxwell from '../../assets/members/Maxwell.png'
import Jacklyn from '../../assets/members/Jacklyn.png'
import HaoRen from '../../assets/members/HaoRen.png'

// Drink Icons
import PassionFruit from '../../assets/icons/drinkIcons/PassionFruit.png'
import MilkTea from '../../assets/icons//drinkIcons/MilkTea.png'

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
                            src={slideshow1}
                            alt='First slide'
                        />
                        {/* <Carousel.Caption className='caption'>
                            <h3>First slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block carousel-image'
                            src={slideshow2}
                            alt='Second slide'
                        />
                        {/* <Carousel.Caption className='caption'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block carousel-image'
                            src={slideshow3}
                            alt='Third slide'
                        />
                        {/* <Carousel.Caption className='caption'>
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block carousel-image'
                            src={slideshow4}
                            alt='Third slide'
                        />
                        {/* <Carousel.Caption className='caption'>
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block min-width'
                            src={slideshow5}
                            alt='Third slide'
                        />
                        {/* <Carousel.Caption className='caption'>
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='team-container'>
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-card" id="member1">
                        <Member 
                            name="Daniel Ho" 
                            image={Daniel}
                            role="Full-Stack Web Developer" 
                            drinkIcon={PassionFruit}
                            drink="Passion Fruit Green Tea"
                        />
                    </div>
                    <div className="team-card" id="member2">
                        <Member
                            name="Simon Hsia" 
                            image={Simon}
                            role="Back-end Developer"
                            drinkIcon={MilkTea}
                            drink="Classic Milk Tea"
                        />
                    </div>
                    <div className="team-card" id="member3">
                        <Member
                            name="Maxwell Sylvestre" 
                            image={Maxwell}
                            role="Front-end Developer"
                            drinkIcon={PassionFruit}
                            drink="Refreshing Ice Cold Water"
                        />
                    </div>
                    <div className="team-card" id="member4">
                        <Member
                            name="Jacklyn Yoon" 
                            image={Jacklyn}
                            role="UI/UX Designer"
                            drinkIcon={PassionFruit}
                            drink="Brown Sugar Milk Tea"
                        />
                    </div>
                    <div className="team-card" id="member5">
                        <Member
                            name="Hao Ren Yuan" 
                            image={HaoRen}
                            role="Graphics"
                            drinkIcon={MilkTea}
                            drink="Classic Milk Tea"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

