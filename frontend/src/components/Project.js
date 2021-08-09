import React from 'react'
import './project.css'
import Separator from './Separator'

function Project() {
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                
                <div className='project-card'>
                    <div className='project-info'>
                        <label className='project-title'> MehediEco Ecomerce Web App</label>
                        <div className='project-links'>
                            <a href='http://mehedi-eco.herokuapp.com/' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='fi-rr-globe'></i>Demo
                                </div>
                            </a>

                            <a href='https://github.com/mehedihasan555552/EcomerceDjangoFullFun-2020' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='devicon-github-original colored'></i>Github
                                </div>
                            </a>

                        </div>

                        <p> This is a eComerce web App with Paypal payment integration,
                        I developed for educational purpose. User can buy product without
                        creating account.Users don't need to  register and login
                        for them to use the app.
                        I developed this app using Html,CSS,JavaScript,Bootstarp,Pyhton,Django</p>
                        <div className='project-tags'>
                            <label className='tag'> Pyhton</label>
                            <label className='tag'> Django</label>
                            <label className='tag'>Html </label>
                            <label className='tag'> CSS</label>
                            <label className='tag'>JavaScript </label>
                            <label className='tag'>Bootstarp </label>

                        </div>
                        

                    </div>
                    <img src={require("../picture/Eco.gif").default} className='project-img'/>

                </div>


                <div className='project-card'>
                    <div className='project-info'>
                        <label className='project-title'> Seller Website Admin panel</label>
                        <div className='project-links'>
                            <a href='#' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='fi-rr-globe'></i>Demo
                                </div>
                            </a>

                            <a href='https://github.com/mehedihasan555552/EcomerceDjangoFullFun-2020' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='devicon-github-original colored'></i>Github
                                </div>
                            </a>

                        </div>

                        <p> This is a system for monitoring all things like buy sell and user update, 
                            user delete, price update etc. It have three levels of users Admin, Buyer,and 
                            the Website Coordinator. Each user have a specific role in the system. buyer 
                            have the lowest privilege. I developed this
                            system using Django,CSS, Html</p>
                        <div className='project-tags'>
                            <label className='tag'> Pyhton</label>
                            <label className='tag'> Django</label>
                            <label className='tag'>Html </label>
                            <label className='tag'> CSS</label>
                            <label className='tag'>JavaScript </label>
                            <label className='tag'>Bootstarp </label>

                        </div>
                        

                    </div>
                    <img src={require("../picture/adminpanel.gif").default} className='project-img'/>

                </div>



                <div className='project-card'>
                    <div className='project-info'>
                        <label className='project-title'> To-do App</label>
                        <div className='project-links'>
                            <a href='#' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='fi-rr-globe'></i>Demo
                                </div>
                            </a>

                            <a href='https://github.com/mehedihasan555552/Todo-Djagno-ReactJs' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='devicon-github-original colored'></i>Github
                                </div>
                            </a>

                        </div>

                        <p> This is a simple to-do app I developed for educational purpose.
                        It allows the user to perform CRUD operations e.g adding and
                        removing tasks from the database. A user can  see the tasks that he/she
                        have added. I developed this app using django rest Framework, Reactjs</p>
                        <div className='project-tags'>
                            <label className='tag'> django rest Framework</label>
                            <label className='tag'> Reactjs</label>
                            <label className='tag'>Python </label>
                            

                        </div>
                        

                    </div>
                    <img src={require("../picture/todo.gif").default} className='project-img'/>

                </div>


                <div className='project-card'>
                    <div className='project-info'>
                        <label className='project-title'> Voting System</label>
                        <div className='project-links'>
                            <a href='#' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='fi-rr-globe'></i>Demo
                                </div>
                            </a>

                            <a href='https://github.com/mehedihasan555552/Todo-Djagno-ReactJs' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='devicon-github-original colored'></i>Github
                                </div>
                            </a>

                        </div>

                        <p> This is a simple Poll voting system web app.
                        which performs the most common
                        arithmetic operations. User can give a vote and
                        see results.Only Admin can create poll Question.</p>
                        <div className='project-tags'>
                            <label className='tag'> Pyhton</label>
                            <label className='tag'> Django</label>
                            <label className='tag'>Html </label>
                            <label className='tag'> CSS</label>
                            <label className='tag'>JavaScript </label>
                            <label className='tag'>Bootstarp </label>
                            

                        </div>
                        

                    </div>
                    <img src={require("../picture/voting.gif").default} className='project-img'/>

                </div>


                <div className='project-card'>
                    <div className='project-info'>
                        <label className='project-title'> Library Management System</label>
                        <div className='project-links'>
                            <a href='#' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='fi-rr-globe'></i>Demo
                                </div>
                            </a>

                            <a href='https://github.com/mehedihasan555552/Library-management-system-SWPU-2020' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='devicon-github-original colored'></i>Github
                                </div>
                            </a>

                        </div>

                        <p>Library Management System is developed in Django, Html, CSS, JavaScript
                             which mainly focuses on basic operations in a library like adding new 
                             books, and updating new information, searching books and members, and
                            return books.  Purpose: The system is mainly to provide automatic  
                            Admin: He can read or write the information. </p>
                        <div className='project-tags'>
                            <label className='tag'> Pyhton</label>
                            <label className='tag'> Django</label>
                            <label className='tag'>Html </label>
                            <label className='tag'> CSS</label>
                            <label className='tag'>JavaScript </label>
                            <label className='tag'>Bootstarp </label>
                            

                        </div>
                        

                    </div>
                    <img src={require("../picture/library.gif").default} className='project-img'/>

                </div>


                <div className='project-card'>
                    <div className='project-info'>
                        <label className='project-title'> Bloging App</label>
                        <div className='project-links'>
                            <a href='#' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='fi-rr-globe'></i>Demo
                                </div>
                            </a>

                            <a href='https://github.com/mehedihasan555552/Djagno-Blog-Website-2019' target="_blank" className='project-link'>
                                <div className='link-button'>
                                    <i class='devicon-github-original colored'></i>Github
                                </div>
                            </a>

                        </div>

                        <p>This is a Blogging web app.Any One can post post
                        their blog creating a account.Also User have
                        a profile. User can change their information.
                        In my bloging web app there is a Admin.Admin has
                        all authorization.Admin can delete, Edit, Create
                        all. </p>
                        <div className='project-tags'>
                            <label className='tag'> Pyhton</label>
                            <label className='tag'> Django</label>
                            <label className='tag'>Html </label>
                            <label className='tag'> CSS</label>
                            <label className='tag'>JavaScript </label>
                            <label className='tag'>Bootstarp </label>
                            

                        </div>
                        

                    </div>
                    <img src={require("../picture/blog.gif").default} className='project-img'/>

                </div>



            </div>

            
            
        </div>
    )
}

export default Project
