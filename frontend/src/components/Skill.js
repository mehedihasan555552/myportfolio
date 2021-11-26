import React from 'react'
import './skill.css'
import Separator from './Separator'

function Skill() {
    return (
        <div className='skills'>
          <Separator/>
          <label className='section-title'>Skills</label>
          <div className='skills-container'>
              <div className='skills-section'>
                 <label className='skills-section-title'>Frontend</label>
                 <div className='skills-list' data-aos="flip-left">
                    

                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-react-original-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>ReactJs</label>
                     </div>

                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-html5-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>HTML</label>
                     </div>

                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-css3-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>CSS</label>
                     </div>


                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-javascript-plain colored"></i>
                         </div>
                         <label className='skill-name'>Javascript</label>
                     </div>


                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-bootstrap-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>Bootstrap</label>
                     </div>        

                 </div>        

              </div>



              <div className='skills-section'>
                 <label className='skills-section-title'>Backend</label>
                 <div className='skills-list' data-aos="flip-right">
                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-python-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>Python</label>
                     </div>

                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-django-plain colored"></i>
                         </div>
                         <label className='skill-name'>Django</label>
                     </div>


                 </div>        

              </div>



              <div className='skills-section'>
                 <label className='skills-section-title'>Cloud Platform</label>
                 <div className='skills-list' data-aos="flip-left">
                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-heroku-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>Heroku</label>
                     </div>

                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>AWS</label>
                     </div>

                     

                     <div className='skill-card'>
                         <div className='skill-icon'>
                         <i class="devicon-digitalocean-plain-wordmark colored"></i>
                         </div>
                         <label className='skill-name'>Digital Ocean</label>
                     </div>


                 </div>        

              </div>


              

          </div>
            
        </div>
    )
}

export default Skill
