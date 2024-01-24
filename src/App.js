import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
// import "../src/Styles/Scroll.css"
// import LocomotiveScroll from 'locomotive-scroll';
// import { useEffect } from 'react';
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import About from "./Components/About";




function App() {






//   const scrollFunction = ()=>{
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('#root'),
//       smooth: true
//   });
//   }

  // useEffect(()=>{
  //   scrollFunction()
  // },[scrollFunction])




  return (
   
    
    
<div>

  <BrowserRouter>
  
  <Navbar/>

  <Routes>
    <Route path="/" element={<Section/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/project" element={<Project/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route/>
  </Routes>
  
  <Footer/>
  
  </BrowserRouter>
</div>



    
    
  );
}

export default App;
