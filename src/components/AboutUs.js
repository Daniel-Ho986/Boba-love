import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Navbar from './navigationBar/NavigationBar'

import './aboutUs.css'
import drink from '../images/slideshow-drinks.jpg'
import phone from '../images/slideshow-phone.jpg'
import friends from '../images/slideshow-friends.jpg'


export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
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
          className='d-block w-100'
          src={phone}
          alt='Second slide'
        />

        <Carousel.Caption className='caption'>
          <h3>Second slide label</h3>
          <p>Mauris rhoncus aenean vel elit. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={friends}
          alt='Third slide'
        />

        <Carousel.Caption className='caption'>
          <h3>Third slide label</h3>
          <p>Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Leo a diam sollicitudin tempor id eu nisl nunc.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

    </div>
    
    
      

    //   <div className='team-member'>
    //     <Member />
    //   </div>
    // </div>   
  )
}

