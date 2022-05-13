import React from 'react'
import {FaFacebookF, FaInstagram,FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
       
    <div className="footer">
             
             
             <div className="right">
               <div className='topz'>
               
                <input type="text" placeholder='Your Name'/>
                <input type="number" placeholder='Your Number' />
                </div>
                <input type="email"  placeholder='Email'/>
                <input type="text" placeholder='Subject' />
                <textarea name="" placeholder='Text Message' id="" cols="30" rows="10"></textarea>

                <button>SEND MESSAGE</button>

             </div>
    </div>
    
    </>
  )
}

export default Footer