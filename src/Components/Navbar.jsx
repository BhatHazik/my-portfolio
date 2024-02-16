import React, { useState } from 'react'
import "../Styles/Navbar.css"
import bg1 from "../Assets/bg1.png"
import { Link } from "react-router-dom"
const Navbar = (props) => {

  const [barsDiv, setbarsDiv] = useState(false);

  const handleBars = () => {
    setbarsDiv(!barsDiv)
    // console.log(barsDiv)
  }

  return (

    <>
      
          {barsDiv? <div className='toggle-bars'>
            <nav>
              <img src={bg1} />
<div className='nav-sec2'>
  <h4><Link to='/' >Home</Link></h4>
  <h4><Link to='/project' >Projects</Link></h4>
  <h4><Link to='/about' >About Me</Link></h4>
  <h4 ><Link to='/contact' >Contact</Link></h4>
  <h3><Link onClick={handleBars}>Menu</Link></h3>
</div>
</nav>
          
          
             <div className='toggle-bottom'>

              <h4><Link to='/'>Home</Link></h4>
          <h4><Link to='/contact'>Contact</Link></h4>
          <h4><Link to='/project'>Projects</Link></h4>
          <h4><Link to='/about'>About Me</Link></h4>

             </div>
          
          
          </div> : <nav>
        <img src={bg1} />

        <div className='nav-sec2'>
          <h4><Link to='/'>Home</Link></h4>
          <h4><Link to='/project'>Projects</Link></h4>
          <h4><Link to='/about'>About Me</Link></h4>
          <h4><Link to='/contact'>Contact</Link></h4>
          <h3><Link onClick={handleBars}>Menu</Link></h3>
        </div>
        
      </nav> }
    </>




  )
}

export default Navbar