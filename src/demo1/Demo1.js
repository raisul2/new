import React from 'react'
import './scss/index.scss'
import {FaFacebook, FaInstagram, FaLinkedinIn, FaIndent, FaFigma, FaModx} from 'react-icons/fa'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Fearure from './components/Fearure'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Testomoni from './components/Testomoni'
import Client from './components/Client'
import Footer from './components/Footer'
import Bottom from './components/Bottom'


const Demo1 = () => {

  

  return (

    

      <div className="mainapp">
           
           <Home/>

             <Fearure/>

      <Portfolio/>
            <Resume/>
             
           <Testomoni/>
<Client/>

         
        
      </div>
         
    
  
    
  )
}

export default Demo1