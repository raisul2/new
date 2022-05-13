import React from 'react'

const Portfolio = () => {
    const arry = [
      {
        img:"/img/1.jpg",
        title:"this is a title",
        sub:"hellow my name is raiusl hasan redoy this is my demo project and i have create a full responsive wesight i like to code in react js"
      },
      {
        img:"/img/1.jpg",
        title:"this is a title",
        sub:"hellow my name is raiusl hasan redoy this is my demo project and i have create a full responsive wesight i like to code in react js"
      },
      {
        img:"/img/1.jpg",
        title:"this is a title",
        sub:"hellow my name is raiusl hasan redoy this is my demo project and i have create a full responsive wesight i like to code in react js"
      },
      {
        img:"/img/1.jpg",
        title:"this is a title",
        sub:"hellow my name is raiusl hasan redoy this is my demo project and i have create a full responsive wesight i like to code in react js"
      },
      {
        img:"/img/1.jpg",
        title:"this is a title",
        sub:"hellow my name is raiusl hasan redoy this is my demo project and i have create a full responsive wesight i like to code in react js"
      },
      {
        img:"/img/1.jpg",
        title:"this is a title",
        sub:"hellow my name is raiusl hasan redoy this is my demo project and i have create a full responsive wesight i like to code in react js"
      },
     
    
    ]
  return (
    <>
    <div className="portfolio">

    <div className='f-box'>
    <p>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
    <h1>My Portfolio</h1>
  </div>
  <div className="box2">
  
  
  {
      arry.map((item)=>(
         <div className='box'>
              <div className="image">
              <img src={item.img} alt="" />
              </div>
              <h1>{item.title}</h1>
              <p>{item.sub}</p>
         </div>        
          ))
         }
         </div>


    </div>
    </>
  )
}

export default Portfolio