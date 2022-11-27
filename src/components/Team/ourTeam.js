import React from 'react'
import './ourteam.css'




export default function Member(){
   const data=[
      {
         Imag: "https://via.placeholder.com/400x200",
         Name:"Daniel",
         Fav:"Bobba Love",
         LinK:"LinkedIn"
      },
      {
         Imag: "https://via.placeholder.com/400x200",
         Name:"Jacklyn",
         Fav:"Bobba Love",
         LinK:"LinkedIn"
      },
      {
         Imag: "https://via.placeholder.com/400x200",
         Name:"Maxwell",
         Fav:"Bobba Love",
         LinK:"LinkedIn"
      },
      {
         Imag: "https://via.placeholder.com/400x200",
         Name:"Simon",
         Fav:"Bobba Love",
         LinK:"LinkedIn"
      },
      {
         Imag: "https://via.placeholder.com/400x200",
         Name:"Reni",
         Fav:"Bobba Love",
         LinK:"LinkedIn"
      },
      ];
    return(
        <div className='team_section'>
            <h3>Our Team</h3> 
            
            {data.map((data) => (
               <div className='team-member'>
                  <div className='image-holder'>
                     <img src="https://via.placeholder.com/400x200" alt='profile' />
                     </div>
                  <div className='listOfMember'>
                     <div>{data.Name}</div>
                     <div>{data.Fav}</div>
                     <div>{data.LinK}</div>
                  </div>
                  </div>             
               ))}
                          
            </div>        
            
    )
}
