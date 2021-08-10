import React from 'react'
import './home.css'

function Social() {
    return (
        <div className='social'>
             <div className='social-icon'>
                        <a href='https://www.facebook.com/mehedihasan555552/' target='_blank'>
                        <img src={require("../picture/facebook.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='https://twitter.com/ridoy123439' target='_blank'>
                        <img src={require("../picture/twitter.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/mehedi-hasan-b402b4116/' target='_blank'>
                        <img src={require("../picture/linkedin.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='https://www.fiverr.com/mehedi555552' target='_blank'>
                        <img src={require("../picture/fiverr.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='https://www.instagram.com/mehedihasan555552/' target='_blank'>
                        <img src={require("../picture/instagram.png").default} className='social-icon-img'/>
                        </a>
                </div>

                <div className='social-icon'>
                        <a href='mailto:mehedihasan555552@gmail.com'>
                        <img src={require("../picture/gmail.png").default} className='social-icon-img'/>
                        </a>
                </div>
            
        </div>
    )
}

export default Social
