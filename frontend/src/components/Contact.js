import React from 'react'
import './contact.css'
import Separator from './Separator'
import Social from './Social'


function Contact() {
    return (
        <div className='contact'>

           <Separator/> 
           <label className='contact-title'>Contact</label>
           <div className='contact-container'>
               <div className='contact-left'>
                   <p>Want to get in touch? Contact me </p>
                   <Social/>

               </div>

               <div className='download'>
                   <a href={require("../picture/MehediResume.pdf").default}>
                   <i class='fi-rr-cloud-download download-icon'></i>
                   Download Resume
                   </a>

               </div>

           </div>

           
            
        </div>
    )
}

export default Contact
