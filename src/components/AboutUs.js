import React from 'react'
import './aboutUs.css'
import ButtonEXP from './buttonComponent/indexButton'
import Member from './Team/ourTeam'


export default function AboutUs() {
  return (
    <div className='About-page'>
      <div>bobba love</div>
      <div>
      <ButtonEXP />
      </div>
        <h1>About US</h1>
        <div className='bobba-love'>
        <p>
          The Geniuses behind bobba love are bobba tea fanatics who strives
          for easy access to their own bobba tea
          </p>
          </div>
      

      <div className='Motto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> 
        <p>sed do eiusmod tempor incididunt ut labore et dolore magna </p>
        <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <p>ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='team-member'>
        <Member />
      </div>
    </div>   
  )
}

