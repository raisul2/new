import React, { useRef, useState } from 'react';
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {FaArrowCircleRight} from  'react-icons/fa'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { hover } from './Animation';
import { useScroll } from './Usescroll'; 
const Home = () => {

  const [element, controls] = useScroll()


  const constraintsRef = useRef(null)

 
  

  const data = [
     {
       hading:"programing just got funn",
       img:"/img/bener.png",
       p:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque animi officia consectetur, molestiae quis saepe voluptatibus a perspiciatis molestias eum enim aliquid sed placeat rem quae maiores accusamus voluptas."
       
     },
     {
       hading:"lern webdevelopment and get to a job",
       img:"/img/b1.svg",
       p:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque animi officia consectetur, molestiae quis saepe voluptatibus a perspiciatis molestias eum enim aliquid sed placeat rem quae maiores accusamus voluptas."
       
     },
     {
       hading:"empolyer: find the perfect match your team",
       img:"/img/b2.svg",
       p:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque animi officia consectetur, molestiae quis saepe voluptatibus a perspiciatis molestias eum enim aliquid sed placeat rem quae maiores accusamus voluptas."
       
     },
     {
       hading:"startup:form your effective softwer development your tram",
       img:"/img/b3.svg",
       p:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque animi officia consectetur, molestiae quis saepe voluptatibus a perspiciatis molestias eum enim aliquid sed placeat rem quae maiores accusamus voluptas."
       
     },

  ]


const icon =[
  {
    icon:"/img/icon1.svg",
    name: "users"
  },
  {
    icon:"/img/icon2.svg",
    name:"playstore rating"
  },
  {
    icon:"/img/icon3.svg",
    name:"code.org win"
  },
  {
    icon:"/img/icon4.svg",
    name:"review"
  },
]
      

const textdata = [
  {
       icon:"/img/img2.png",
       title:"10K+",
       sub:"Enrolled"
  },
  {
       icon:"/img/img3.png",
       title:"1K+",
       sub:"Got Hired"
  },
  {
       icon:"/img/img4.png",
       title:"5",
       sub:"Month Required"
  },
]

const textdata2 = [
  {
    icon:"/img/img5.png",
    title:"800+Videos"
  },
  {
    icon:"/img/img6.png",
    title:"700+Quizzes"
  },
  {
    icon:"/img/img7.png",
    title:"12+Assignments"
  },
]



     const {scrollY, scrollYProgress} = useViewportScroll()
   

       const opacity = useTransform(scrollY, [450,800],[-200,0])
       const xx = useTransform(scrollY, [0,1000],[0,-100])
       const background = useTransform(scrollY, [0,2700],['rgba(255,255,255)','rgba(0,45,45)'])
       
   const scaleY = useTransform(scrollYProgress, [1000 , 1500], [0,-100])
   const leftx = useTransform(scrollY, [2000 , 2900], [1000,0])
   const leftx2 = useTransform(scrollY, [2300 , 3400], [1.2,1])
   const leftx3 = useTransform(scrollY, [2300 , 3400], ['50px','0'])

   window.onscroll =  ()  =>{
    // called when the window is scrolled.
  
    console.log(window.scrollY) 
  }

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);



  const container = {
    show:{
      transition:{
        staggerChridren: 0.35
      }
    }
  }

  const item ={
   
    hidden:{
      opacity:0,
      x:'100vw'
    },
    visible:{
      opacity:1,
      x:0,
        
      transition:{
        type:"spring",
        delay:.5
      }

    }

  }


  const infinity = {
       animate:{
        scale:[1,1.05,1,1.05,1],
           transition:{
             yoyo: 1,
              duration:3
              
           },
           
       }
  }



  return (
    <>
   
      <motion.div ref={element}
       className="main-homepage"
          
       >

              {/* this is a hero section */}
      <Swiper
      spaceBetween={30}
      centeredSlides={true} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
   
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className=" hero"
    >

    {
       data.map((item)=>(
         <SwiperSlide>
            <motion.div       style={{  backgroundColor:background,     transform:scaleY, }}  
             
            className="hero-box">
            <div className="hero-left">
            <div className="textbox11">
            <h2>{item.hading}</h2>
            <p>{item.p}</p>
            
            </div>
            <button>Explore mote<FaArrowCircleRight/></button>
            
            </div>
            <div className="hero-right">
                
                 <img src={item.img} alt="" /> 
                
            </div>
            </motion.div>
          </SwiperSlide>

       ))
    }
              </Swiper>


              {/* this is a icon section */}
              <motion.div className='icon-section'>
                
                  <div 
                 className="icon-box1">
                       {
                         icon.map((item)=>(
                           <div className="iconbox">
                             <img src={item.icon} alt="" />
                             <h3>{item.name}</h3>
                           </div> 

                         ))
                       }
  
                 </div>
                 <div className="text-box1">
                       <h1>Best android app to <br />
                       <span>learn programming</span> </h1>

                       <div className="iconbox">
                         <img src="/img/picon1.svg" alt="" />
                         <img src="/img/picon2.svg" alt="" />
                       </div>
                 </div>
                 <div className="grid-box1">
                   <div className="grid-left">
                     <img src="/img/bi.svg" alt="" />
                     <h3>After learning each programming concept, you will add an element to</h3>
                     <img src="/img/b2.png" alt="" />
                   
                   </div>
                   <div className="grid-r-top">
                   <div className="textbox">
                   <h3>Rewards Badges</h3>
                   <p>Our courses are gamified. you can earn superpowers, Surprise points and gifts for your enjoyable learning.</p>
                   <img src="/img/b1.png" alt="" />
                   </div>
                   </div>
                   <div className="grid-r-down">
                     
                   <div className="text">
                   <img className='icon' src="/img/p4.png" alt="" />
                   <div>
                   <h1>Offline Playground</h1>
                   <p>You can get instant support from thousands of learners in the Forum</p>
                   </div>
                          </div>
                          <img src="/img/b3.png" alt="" />
                   </div>
                 </div>
                 
              
              </motion.div>




              {/* this is a lern  section */}
             

              {/* this is a complete section */}

              <motion.div className="complete-section"
                   style={{x:leftx}}


                   
                   
                   transition={{ duration:0.4 , type:"spring", stiffness:120}}

              >
                  <div className="left"></div>
                  <div className="right"></div>
              </motion.div>


              {/* this is a box section */}


              <motion.div  style={{ scale:leftx2, perspective:leftx3   }}
              variants={infinity}
                  animate='animate'
              className="box-section"
               

              >
                   
              <div className="text-box3"></div>
              <div className="grid-box3">
                 <div className="left-top"></div>
                 <div className="left-down"></div>
                 <div className="right"></div>
              </div>
              </motion.div>


              {/* this is a find section */}
              <div className="find-section">
                    <h1></h1>
                    <div className="grid-box4">
                      <div className="left"></div>
                      <div className="right">
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>
                    </div>
              </div>
             
              {/* this is a footer section */}
          <div className="footer">

            <div className='sample'>
            
            </div>
          
              
          </div>
      </motion.div>
    </>
  )
}






export default Home;




 


         