import React from 'react'
import './aboutme.css'

function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='aboutme-left' data-aos="zoom-in-left">
             <img src={require("../picture/about-pic.jpg").default} className='aboutme-img'/>
            </div>
            <div className='aboutme-right' data-aos="flip-right">
            <h2>Hello 👋🏽</h2>
              <p>
                I'm Mehedi Hasan,I am a software engineer working on web applications and web infrastructure.
                I have been developing professionally for 2 years but tinkering since a kid.
                I started in tech with internships, freelance services and part time positons during college.
                <strong>I'm Python Django Full-Stack Web Developer </strong> 💻 with a strong
                educational background in Software Engineering. I am doing
                freelance work 🚀 <strong> in Fiverr and Frelancer </strong>, but I do
                work remotely for international clients.
              </p>
              <p>
                I started creating  web app using<strong> Django,Reactjs, HTML and CSS</strong> back in
                2018. <strong>I'm a Python Django Expert</strong> and extremely
                passionate about coding. I love to learn new things every day and
                keep up with the new technologies. In many ways, websites are my
                first love 💙
              </p>
              <p>
                A day in my life may consist of: prepping web art, fixing some front-end bugs,
                adding an API endpoint, dockerizing an application, database design, configuring a unit or ui test library,
                setting up a build or deployment plan, provisioning a test tier machine or feature work when I am lucky.


              </p>


            </div>
            
        </div>
    )
}

export default AboutMe
