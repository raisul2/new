import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const Testomoni = () => {

  const data = [

    {
      img:"/img/1.jpg",
      title:"raisulx thems",
      sub:"Hasan redoy",
      p:"chief operating officer",
      title2:"android app development",
      sub2:"via upwork-mar3,2015-agu30,2022",
      p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa excepturi saepe, modi dolor obcaecati libero beatae, esse aspernatur odio vitae inventore doloremque corrupti nisi, fugiat dolorem officiis nam voluptas!"
    },

    {
      img:"/img/1.jpg",
      title:"raisulx thems",
      sub:"Hasan redoy",
      p:"chief operating officer",
      title2:"android app development",
      sub2:"via upwork-mar3,2015-agu30,2022",
      p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa excepturi saepe, modi dolor obcaecati libero beatae, esse aspernatur odio vitae inventore doloremque corrupti nisi, fugiat dolorem officiis nam voluptas!"
    },

    {
      img:"/img/1.jpg",
      title:"raisulx thems",
      sub:"Hasan redoy",
      p:"chief operating officer",
      title2:"android app development",
      sub2:"via upwork-mar3,2015-agu30,2022",
      p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa excepturi saepe, modi dolor obcaecati libero beatae, esse aspernatur odio vitae inventore doloremque corrupti nisi, fugiat dolorem officiis nam voluptas!"
    },

    {
      img:"/img/1.jpg",
      title:"raisulx thems",
      sub:"Hasan redoy",
      p:"chief operating officer",
      title2:"android app development",
      sub2:"via upwork-mar3,2015-agu30,2022",
      p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa excepturi saepe, modi dolor obcaecati libero beatae, esse aspernatur odio vitae inventore doloremque corrupti nisi, fugiat dolorem officiis nam voluptas!"
    },

  ]


  return (
    <>
    <div className="text"><h2>testomonial</h2></div> 
    <Swiper 
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
    className="mySwiper testomonial"
  >
  
           

  {
    data.map((item)=>(
      <SwiperSlide>

   

      <div className="test-box">
         <div className="left">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
            <h1>{item.sub}</h1>
            <p>{item.p}</p>

         </div>
      
         <div className="down">
           <div className='topy'>
            <h1>{item.title2}</h1>
            <p>{item.sub2}</p>
             <span>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             </span> 
           </div>
            <p>{item.p2}</p>
         </div>
      </div>



  </SwiperSlide>
    ))
  }

   
    </Swiper>
    </>
  )
}

export default Testomoni