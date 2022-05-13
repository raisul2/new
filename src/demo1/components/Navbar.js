 import React, { useState } from 'react'
 import {FaAlignJustify, FaTimes} from 'react-icons/fa'
 
 const Navbar = () => {


  const [navbar, setNavbar] = useState(false)



   return (
     <>
     
   
     



     </>
   )
 }
 
 export default Navbar


 function Navlink() {
 
    const navlink = [
        {
            name:'home',
            link:'#home'
        },
        {
            name:'feature',
            link:'#feature'
        },
        {
            name:'portfolio',
            link:'#portfolio'
        },
        {
            name:'resume',
            link:'#resume'
        },
        {
            name:'clients',
            link:'#clients'
        },
        {
            name:'blog',
            link:'#blog'
        },
        {
            name:'contact',
            link:'#contact'
        },
    ]

    return(
        <>
           {
               navlink.map((item)=>(
                   <li><a href={item.link}>{item.name}</a></li>
               ))
           }
         
        </>
    )
    
}
 