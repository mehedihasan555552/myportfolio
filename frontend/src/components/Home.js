import React,{useEffect} from 'react'
import './home.css'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Project from './Project'
import Skill from './Skill'
import Work from './Work'
import Contact from './Contact'
import AboutMe from './AboutMe'

import Aos from 'aos'
import 'aos/dist/aos.css'




function Home() {

    useEffect( ()=> {
        Aos.init({ duration: 2000,once: true,})
    },[]);

    
    return (
        <div className='home'>
            <div>
            <Header/>
            </div>

            <div className='body'>
                <section id='about'>
                <About/>
                <AboutMe/>
                </section>

                <section id='project'>
                <Project/>
                </section>

                <section id='skill'>
                <Skill/>
                </section>

                <section id='work'>
                <Work/>
                </section>

                <section id='contact'>
                <Contact/>
                </section>

                
               
               
               
            </div>
            
            <div>
            <Footer/>
            </div>
           
            
        </div>
    )
}

export default Home
