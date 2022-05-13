import React from 'react'
import {FaFacebookF, FaInstagram,FaLinkedinIn, FaFigma
, FaNodeJs, FaCss3} from 'react-icons/fa'
const Home = () => {
  return (
    <>
    
    <div className="home">
    <div className="navbars"></div>
               
    <div className="home_left">
        <p>welcome to my world</p>
        <h1>hi, i'm  <span> raiuls hasan redoy  </span> 
          a designer and developer
        </h1>
        <p>as. Temporibus error cumque saepeLorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit mollitia praesentium in tempora sed qui eligendi amet veritatis molesti 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum soluta cum aliquam. Architecto, voluptates repellendus 
        </p>
    </div>
    <div className="home_right_down">
        
       <div  className="icon-left">
          <p>find with me</p>
          <div className="icon">
          <span><FaFacebookF/></span>
          <span><FaInstagram/></span>
          <span><FaLinkedinIn/></span>
          </div>
 
       </div>
       <div  className="icon-right">
       <p>find with me</p>
       <div className="icon">
       <span><FaFigma/></span>
       <span><FaNodeJs/></span>
       <span><FaCss3/></span>
       </div>
       </div>

    </div>
    <div className="home_right">
    
         
          
       
    
    </div>

    </div>
    </>
  )
}

export default Home