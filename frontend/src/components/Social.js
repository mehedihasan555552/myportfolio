import React from 'react'
import './home.css'

function Social() {
    return (
        <div className='social'>
             <div className='social-icon'>
                        <a href='#project'>
                        <img src={require("../picture/facebook.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='#skill'>
                        <img src={require("../picture/twitter.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='#work'>
                        <img src={require("../picture/linkedin.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='#contact'>
                        <img src={require("../picture/fiverr.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='#contact'>
                        <img src={require("../picture/instagram.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='#contact'>
                        <img src={require("../picture/gmail.png").default} className='social-icon-img'/>
                        </a>
                </div>
            
        </div>
    )
}

export default Social
