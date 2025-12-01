import React from 'react'
import './Projects.css'
import portfolioImage from '../assets/portfolio1.png'
import Chatgpt from '../assets/ChatGPT.png'
// import { FaGithub } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";


const Projects = () => {
  return (
    <section id="projects">
        <div className="project-top">
        <h5>My Portfolio</h5>
        <h4>Let's Have a Look  <span>|</span> <span>My Portfolio</span></h4>
      </div>
      <h2>MY PROTFOLIO</h2>
   
     
     <div className="project-container">

              <div className="card-projects">
                     
                    
                    <div className="pro-card-top">
                      <img src={portfolioImage} alt="Portfolio" />
                    </div>
            
                       
                       <div className="pro-card-med">
                     
                         <h4>Html</h4>
                         <h4>CSS</h4>
                         <h4>Javascript</h4>

                       </div>


                    <div className="pro-card-bottom">
                  

                    <h3>Portfolio Website</h3>
                    <p>A personal portfolio website to showcase my skills, projects, and experience as a developer.</p>
                        </div>

                    <div className="pro-link">
                               
                               <div id="git">
                                 <a href="https://github.com/shoaibquraishi06" target="_blank" rel="noopener noreferrer">
                                   <span id='git-i'><LuGithub /></span>
                                 </a>
                               </div>
                               <div id="live">
                                 <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                                   <span id='live-i'><LuExternalLink /></span>
                                 </a>
                               </div>

                    </div>

              </div>

              <div className="card-projects">
                   
                     <div className="pro-card-top">
                      <img src={Chatgpt} alt="Portfolio" />
                    </div>
            
                       
                       <div className="pro-card-med">
                     
                         <h4>React</h4>
                         <h4>Node.js</h4>
                         <h4>Express</h4>
                         <h4>Mongo DB</h4>

                       </div>


                    <div className="pro-card-bottom">
                  

                    <h3>ChatGPT Clone</h3>
                    <p>This project replicates the intelligent conversational experience of ChatGPT, complete with real-time messaging, AI-generated responses, and a clean, responsive UI.</p>
                        </div>

                    <div className="pro-link">
                               
                               <div id="git">
                                 <a href="https://github.com/shoaibquraishi06/chatGPT" target="_blank" rel="noopener noreferrer">
                                   <span id='git-i'><LuGithub /></span>
                                 </a>
                               </div>
                               <div id="live">
                                 <a href="https://zen-ai-c6b4.onrender.com/login" target="_blank" rel="noopener noreferrer">
                                   <span id='live-i'><LuExternalLink /></span>
                                 </a>
                               </div>

                    </div>


              </div>

              <div className="card-projects">

                   <div className="pro-card-top">
                      <img src={portfolioImage} alt="Portfolio" />
                    </div>
            
                       
                       <div className="pro-card-med">
                     
                        {/* <h4>React</h4> */}
                         <h4>Node.js</h4>
                         <h4>Express</h4>
                         <h4>Mongo DB</h4>

                       </div>


                    <div className="pro-card-bottom">
                  

                    <h3>micro-services</h3>
                    <p>Built a scalable e-commerce platform using microservices with secure login, product listing, ordering, add-to-cart, payment integration, notifications, and a seller dashboard improving reliability, flexibility, and overall user experience.</p>
                        </div>

                    <div className="pro-link">
                               
                               <div id="git">
                                 <a href="https://github.com/shoaibquraishi06/microservices" target="_blank" rel="noopener noreferrer">
                                   <span id='git-i'><LuGithub /></span>
                                 </a>
                               </div>
                               <div id="live">
                                 <a href="#" target="_blank" rel="noopener noreferrer">
                                   <span id='live-i'><LuExternalLink /></span>
                                 </a>
                               </div>

                    </div>
                   

              </div>



     </div>
    
    
       {/* <div className="end-line"></div> */}
   </section>
  
  )
}

export default Projects
