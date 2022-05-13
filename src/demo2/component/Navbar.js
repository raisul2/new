import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {motion, useTransform, useViewportScroll} from 'framer-motion'
const Navbar = () => {


  const {scrollY, scrollYProgress} = useViewportScroll()
   

 
 
window.onscroll =  ()  =>{
  // called when the window is scrolled.
  if (window.scrollY >= 44) {

      //your event
      document.getElementById("nav").style.backgroundColor = "black";
      
      
    }else if (window.scrollY >= 0 ) {
    document.getElementById("nav").style.backgroundColor = "transparent";
    
  }
}


  return (
    <div id='nav' className='navbar'>
         
    <MobileNavigation/>
    <NormalNavigtation/>
           

    </div>
  )
}

export default Navbar



function MobileNavigation() {
  
   const [open, setOpen] = useState(false)

   const humburger =   <CgMenuRound className='humburger' size='40px' color='white'
   onClick={()=> setOpen(!open)}
/>
   const closebtn =   <CgCloseO className='humburger' size='40px' color='white'
   onClick={()=> setOpen(!open)}
/>

const colseMobilemenu = () => setOpen(false)





// scrollevent

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(lastKnownScrollPosition) {
    
//   console.log(lastKnownScrollPosition)

//   if (lastKnownScrollPosition < 44 ) {
//     document.getElementById("nav").style.color = "blue";
//     console.log('yes')
//   }

// }

// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });



  return(
    <>   
             <nav 
             
             className='mobilenav'>
              
           
             {open ?  closebtn : humburger}

             {
               open && <Nablink isMobile={true} colseMobilemenu={colseMobilemenu} />
             }
               
             </nav>

    </>
  )

};


function NormalNavigtation() {
  
    
  return(
    <>
          
    <nav  className='normalnav'>
    <Nablink/>
  </nav>

    </>
  )

}






function Nablink(props) {
  
  const navlink = [
      {
        name:"home"
        
      },
      {
        name:"about"
        
      },
      {
        name:"skills"
        
      },
      {
        name:"youtue"
        
      },
      {
        name:"contact"
        
      },

  ]
return(
  <>
        <motion.ul 
        initial={{x:200}}
        animate={{ x: 0 }}
        transition={{ times: [1, 0.10, 1] }}

      >
          {
               navlink.map((item)=>(
                 <motion.li 
                    whileHover={{scale:1.3,color:"yellow"}}
                    transition={{ type:"spring", stiffness:300}}
                 onClick={()=> props.isMobile && props.colseMobilemenu() } ><Link to={item.name}>{item.name}</Link></motion.li>
               ))
            }
          
        </motion.ul>

  </>
)

};