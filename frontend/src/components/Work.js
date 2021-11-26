import React from 'react'
import './work.css'
import Separator from './Separator'

function Work() {
    return (
        <div className='work'>
           <Separator/> 
           <label className='work-title'>Work</label>
           <div>
                
                <div className='project-card'>
                    <div className='project-info' data-aos="zoom-in-down"  data-aos-delay="300">
                        <label className='project-title'> Fiverr</label>
                        <div className='project-links'>
                            <div>
                            <h2>Rating</h2>

                            </div>
 

                            <div>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>

                            </div>
                           
                           

                        </div>
                        <h4>Comments</h4>
                        <p> Very nice seller :) he was very responsive at all times and answered all my 
                            questions detailed and paid attention to my critique. He was 
                            very helpful and was also willing to help me set my program up on my own computer.
                             Highly recommend!</p>
                        
                        

                    </div>
                    <img src={require("../picture/rating1.PNG").default} className='project-img' data-aos="zoom-in-left"  data-aos-delay="300"/>

                </div>


                <div className='project-card'>
                    <div className='project-info' data-aos="zoom-in-left"  data-aos-delay="300">
                        <label className='project-title'> Fiverr</label>
                        <div className='project-links'>
                            <div>
                            <h2>Rating</h2>

                            </div>


                            <div>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>

                            </div>
                           
                           

                        </div>
                        <h4>Comments</h4>
                        <p> Amazing to work with will keep returning back. Very kind and a chill
                             person.</p>
                        
                        

                    </div>
                    <img src={require("../picture/rating2.PNG").default} className='project-img' data-aos="zoom-in-right"  data-aos-delay="300"/>

                </div>

                <div className='project-card'>
                    <div className='project-info'  data-aos="flip-left"  data-aos-delay="300">
                        <label className='project-title'> Freelancer</label>
                        <div className='project-links'>
                            <div>
                            <h2>Rating</h2>

                            </div>


                            <div>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>
                            <img src={require("../picture/star.png").default} className='star'/>

                            </div>
                           
                           

                        </div>
                        <h4>Comments</h4>
                        <p> He is very talanted & smart in implementing solutions, very responsive and cooperative.
                             His programming skills are very advanced and he can implement solutions quickly. 
                             I stringly recommend him.</p>
                        
                        

                    </div>
                    <img src={require("../picture/rating3.PNG").default} className='project-img' data-aos="flip-right"  data-aos-delay="300"/>

                </div>




                

            </div>
        </div>
    )
}

export default Work
