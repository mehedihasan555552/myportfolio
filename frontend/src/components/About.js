import React from 'react'
import './home.css'
import Social from './Social'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info' data-aos="fade-up-right">
                    <p>Hello, I'M 
                    <br/>
                        <span className='info-name'>MEHEDI HASAN</span>
                    <br/>
                    PYTHON DJANGO FULL-STACK WEB DEVELOPER</p>
                </div>

                <div className='about-pic'>
                   <img src={require("../picture/about.png").default} className='picture' />
                </div>

            </div>

            <div className='about-bottom' data-aos="fade-up">
               <Social/>
            </div>
            
        </div>
    )
}

export default About
