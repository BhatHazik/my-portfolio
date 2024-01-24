import React from 'react'
import "../Styles/Contact.css"
import map from "../Assets/map.webp"
const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className='map'>
            <img src={map}/>
        </div>
        <div className='contact-sec2'>
          <h1>I Am Here!</h1>
          <h3>You can mail me! </h3>
          <h3>bhatkhalid3171@gmail.com</h3>
          <div className='contact-shape'></div>
        </div>
    </div>
  )
}

export default Contact