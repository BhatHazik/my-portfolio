import React from 'react'
import "../Styles/Section.css"
import video from "../Assets/videoplayback.mp4"
import me from "../Assets/me.png"
import {Link} from "react-router-dom"
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";





const Section = () => {

  // gsap.registerPlugin(ScrollTrigger);


  // gsap.to(".",{
   
  //  y:-50,
  //  duration:1,
  //  delay:1,
  // })









  return (
    <>
    <div className='main-wrapper'>

      <div className='page1'>
        <div className='hero-wrapper'>

          <div className='hero-left'>
            <h3>
              As a skilled software developer, I bring innovation to life through code, transforming ideas into seamless, impactful solutions.
            </h3>
          </div>

          <div className='hero-right'>
            <h1>STRIVE   <br /> CODE <br /> SUCCESS</h1>
          </div>



        </div>

        <div className='hero-shape'>
          <div className='hero-shape1'></div>
          <div className='hero-shape2'></div>
          <div className='hero-shape3'></div>
          <div className='hero-shape4'></div>
        </div>


        <video src={video} autoPlay muted loop></video>



      </div>


      
      <div className='page2'>
        <div className='moving-text'>
        <div className='text-container'>
          <h1>FOCUS</h1>
          <div className='circle'></div>
          <h1>OPTIMIZATION</h1>
          <div className='circle'></div>
          <h1>DEBUGGING</h1>
          <div className='circle'></div>
        </div>

        <div className='text-container'>
          <h1>FOCUS</h1>
          <div className='circle'></div>
          <h1>OPTIMIZATION</h1>
          <div className='circle'></div>
          <h1>DEBUGGING</h1>
          <div className='circle'></div>
        </div>

        <div className='text-container'>
          <h1>FOCUS</h1>
          <div className='circle'></div>
          <h1>OPTIMIZATION</h1>
          <div className='circle'></div>
          <h1>DEBUGGING</h1>
          <div className='circle'></div>
        </div>
        </div>


        <div className='page2-bottom'>
          <div className='page2-h2'>
            <h2>Hey there, my name is Hazik Hilal bhat and i am a devloper from kashmir and likes to make Apps and websites. If you want to make one for buisness or for your own you can higher me on upwork or just contact me!</h2>
          </div>
          <div className='page2-image'>

            <img src={me}/>
            <p>I Hazik Hilal a skilled software engineer hailing from the enchanting region of Kashmir, brings innovation and expertise to the world of development, merging technical prowess with the serene beauty of my homeland.</p>
          </div>

          <div className='page2-shape'>
            
          </div>
        </div>
      </div>
      <div className='page3'>
        <div className='circle-text'>
          <div className='small-circle'></div>
          <h5>FEATURED PROJECTS</h5>
        </div>
          <div className='project'>
            <h1>Foodlle</h1>
          </div>
        
        
          <div className='project'>
            <h1>PUSG</h1>
          </div>
        
        
          <div className='project'>
            <h1>Amazon(clone)</h1>
          </div>
    
      
          <div className='project'>
            <h1>API (Application Programing Interface)</h1>
          </div>
   
       
          <div className='project'>
            <h1>Backend</h1>
        </div> 

        <h4><Link to='/project'>All Projects</Link></h4>
        <div className='space'>

        </div>
    
</div>
</div>
<div className='page4'>
          
        </div>


    
    <div className='fixed-footer'>
      <div className='footer-content'>
      <div className='footer-shape'></div>
      <div className='footer-shape2'></div>
      <div className='footer-shape3'></div>
      <div className='footer-links'>
        <Link to='/project'>Projects</Link>
        <Link to='/about'>About Me</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='footer-h1'><h1>THE HAZIK</h1></div>
      <div className='footer-bottom'>
        <h4>Copyright © The Hazik</h4>
        <h4><a href='https://www.youtube.com/c/HZKGAMINGOFFICIAL'>Youtube</a></h4>
        <h4><a href='https://www.instagram.com/ur_hazik/'>Instagram</a></h4>
        <h4><a href='https://www.linkedin.com/in/hazik-bhat-1842572a1/'>LinkedIn</a></h4>
      </div>
      </div>
  
</div></>
  )
}

export default Section