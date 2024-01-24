import React from 'react'
import "../Styles/Project.css"
import bg5 from "../Assets/bg5.png"
const Project = () => {
  return (
    <div className='project-wrapper'>

        <div className='project-image'>
            <img src={bg5}/>
        </div>
        <div className='project-sec2'>
          <h1>Currently I Am Working On My Projects</h1>
          <h3>Any issue? feel free just mail! </h3>
          <h3>bhatkhalid3171@gmail.com</h3>
          <div className='project-shape'></div>
        </div>

    </div>
  )
}

export default Project