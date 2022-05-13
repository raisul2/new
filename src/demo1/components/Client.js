import React from 'react'

const Client = () => {

  const data = [
     
    {
      name:"javascript"
    },
    {
      name:"Product Design"
    },
    {
      name:"wordpress"
    },
    {
      name:"html to react"
    },
    {
      name:"mern dev"
    },
    {
      name:"node js "
    },

  ]

  const arry = [
      
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/2.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/2.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/2.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/2.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/2.webp"
    },
    {
      name:"Abdullah mio",
      img:"/img/1.webp"
    },
  ]


  return (
    <>
     
    <div className="client">

      <div className="text">
      <h1>happy clients</h1>
      </div>
      <div className="client-box">
        <div className="left">
          {
            data.map((item)=>(
              <span><h2>{item.name}</h2></span>
            ))
          }
        </div>
        <div className="right">
        
        {
          arry.map((item)=>(
            <div>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))
        }

        </div>
      </div>

    </div>
    </>
  )
}

export default Client