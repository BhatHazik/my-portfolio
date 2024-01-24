import React from 'react'
import "../Styles/About.css"
import me from "../Assets/me.png"
const About = () => {
  return (
    <div className='about-wrapper'>
        <div className='about-image'>
            <img src={me}/>
        </div>
        <div className='about-sec2'>
          <h1>HEY BUDDY!</h1>
          <h3>I AM HAZIK</h3>
          <h3>Hello, I'm a skilled website and web application developer based in the picturesque region of Kashmir with 2 to 3 years of hands-on experience. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I bring a wealth of expertise to your projects. Beyond my technical proficiency, I'm also a passionate gamer, infusing creativity and attention to detail into my work, much like in the virtual worlds I explore. Whether you're looking to build a dynamic website or a robust web application, I'm here to bring your vision to life. Let's embark on a collaborative journey where my love for gaming and dedication to web development converge to deliver exceptional results for your digital ventures.</h3>
          <div className='about-shape'></div>
        </div>
    </div>
  )
}

export default About