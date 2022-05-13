import React from 'react'

import { box, data, icon, img, job, textdata, textdata2 } from '../Data';
import { Swiper, SwiperSlide } from "swiper/react";
import {FaSearchLocation, FaMailBulk,FaPhone, FaFacebook,FaInstagram,FaLinkedinIn,FaViacoin} from 'react-icons/fa'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination } from "swiper";


const Home = () => {
  return (
    <div className='home-section'>
    <div className="navbar"></div>
  
    {/*this is our hero section*/}
    <Swiper
    spaceBetween={30}
    pagination={{ clickable: true,}}
    autoplay={{delay: 2500,disableOnInteraction: false,}}
    modules={[Autoplay, Pagination]}
    className="mySwiper">
  {
      data.map((item)=>(
          <SwiperSlide>
           <div className="box">
           <div className="left-box">
    
             
                <h1>{item.hading}</h1>
                <p>{item.p}</p> 
                <button>explore more</button>        
            
            
           </div>
           <div className="right-box">
               <img src={item.img} alt="" />
           </div>
           </div>
          </SwiperSlide>
      ))
  }
  </Swiper>

  {/*here is icon sectio create */}
    <div className='icon-section'>
         {
             icon.map((item)=>(
                  <div className="box">
                    <img src={item.icon} alt="" />
                    <h1>{item.name}</h1>
                    
                  </div>
             ))
         }   
    </div>
    <div className='text'><h1>Best android app to<span> <br /> learn programming</span></h1>
           <div className="icon-box">
             <img src="/img/picon1.svg" alt="" />
             <img src="/img/picon2.svg" alt="" />
           </div>
    </div>

    {/**here  is review box system create */}
    <div  className='review-section'>
            <div className="left-box">
                <img src="/img/bi.svg" alt="" />
                <h1>After learning each programming concept, you will add an element to</h1>
                <img src="/img/b2.png" alt="" />
            </div>    
            <div className="top-box">
              <h1>Rewards Badges</h1>
              <p>Our courses are gamified. you can earn superpowers, Surprise points and gifts for your enjoyable learning.</p>
              <img src="/img/b1.png" alt="" />
            </div>    
            <div className="down-box">
            <div className="box">
            <img src="/img/p4.png" alt="" />
             <div className="textbox">
              <h1>Offline Playground</h1>
              <p>You can get instant support from thousands of learners in the Forum</p>
             </div>
            </div>
            <img src="/img/b3.png" alt="" />
            </div>    
    </div>

    {/**here is our complete guide  */}

    <div className='guide-section'>
    
        
          <h1><span>Complete guideline</span>from absolute beginners to getting hired.</h1>
            <div className="btn">
             <button>expore course</button>
             <button>hired list</button>
            </div>
    </div>


    {/*course section create here */}

    <div className='course-section'>
      <div className="left">
         <img src="/img/img1.png" alt="" />
      </div>
      <div className="right">
         
      <h1>
      Complete Web Development Course
      with ------------</h1>
      <p>Enjoy the most effective and enjoyable journey with interactive lessons and guided support to become a web developer.</p>
        <div className="box1">
        {
          textdata.map((item)=>(
            <div className="box">
              <img src={item.icon} alt="" />
               <div className="text">
                <h3>{item.title}</h3>
                <p>{item.sub}</p>
               </div>
            </div>
          ))
        }
        </div>

         <div className="box2">
          {
            textdata2.map((item)=>(
               <div className="box">
                 <img src={item.icon} alt="" />
                 <h3>{item.title}</h3>
               </div>
            ))
          }
         </div>
      </div>
    
    </div>



      {/**here is our support section */}


    <div className='support-section'>
       <div className="left">
             <div className="imgbox">
                <img src="/img/s1.svg" alt="" />
                <img src="/img/s2.svg" alt="" />
             </div>
               <p>Live support sessions three times in a day to solve your coding related issues.</p>
       </div>
       <div className="right">
             <div className="textbox">
               <h1>Build 11 professional projects while learning.
               </h1>
               <p>Build real-world projects while learning and get international job-placement service.
               </p>
             </div>

             <Swiper
             spaceBetween={30}
             pagination={{ clickable: true,}}
             autoplay={{delay: 2500,disableOnInteraction: false,}}
             modules={[Autoplay, Pagination]}
             className="mySwiper">
                
             {
               img.map((item)=>(
                   <SwiperSlide>
                     <img src={item.img} alt="" />
                   </SwiperSlide>
               ))
             }
                  
                  
             </Swiper>
       </div>
    
    </div>

        {/** this is sectio find best */}

           <div className="text-find">
                 <h1>Find best talented candidate</h1>

                  <button>successfull student</button>
           </div>

         <div className="find">
         {
           box.map((item)=>(
             <div>
                <img src={item.img} alt="" />
                 <div className="txtbox">
                   <h1>{item.title}</h1>
                   <p>{item.sub}</p>
                 </div>
             </div>
                 
           ))
         }
                
         </div>
                   
         {/**job flatform */}

         
              <h1 className='text'>Job placement success</h1>
         
               <div className="job-section">
                 
               <div className="left">
                 <img src="/img/job.png" alt="" />
               </div>
               <div className="right">
                       {
                         job.map((item)=>(
                           <div>
                           <img src={item.img} alt="" />
                             <h1>{item.title}</h1>
                             <p>{item.sub}</p>
                           </div>
                         ))
                       }
               </div>
                      
               </div>
             

               <div className="footer">
                    <div className="left">
                    <div><span><FaSearchLocation/></span> <p> Level-4, 34, Awal Centre, Banani, Dhaka</p></div>
                    <div><span><FaMailBulk/></span> <p> Support: support@programming-hero.com</p></div>
                    <div><span><FaPhone/></span> <p> (Available : 10:00am to 07:00pm)</p></div>
                    </div>
                    <div className="right">
                          
                    <h1>follow us</h1>
                     <div className="icon">
                     <FaFacebook/>
                     <FaInstagram/>
                     <FaLinkedinIn/>
                     <FaViacoin/>
                     </div>
                      
                    </div>
               </div>


         </div>  
  )
}

export default Home