import React from 'react'
import { Link } from 'react-router-dom'
import './scss/index.scss'
import  {FaFacebook} from 'react-icons/fa'

const Mainhome = () => {

    const arry = [
        {
            name:'demo1',
            link:'/demo1',
            img:'/img/demo1.jpeg'
        },
       
        {
            name:'demo2',
            link:'/demo3',
            img:'/img/demo2.jpeg'
        },
]

  return (
    <div className='mainhome'>
     <div>
        <h1>this is my demo projects</h1>
     </div>

     <h1>i'm a programmer, i use react js,scss framer motion,node.js
     i have created website just for practice and copy this website, support me for improve myself, and here i haven't created  navbar</h1>
        
     <div className="grid">
        {
            arry.map((item, index) =>(
                <Link key={index} to={item.link} className="box1">
                      <div>
                      <h1>{item.name}</h1>
                      </div>
                       <img src={item.img} alt="" />
                </Link>
            ))
        }
     </div>

         <div className='myprofile'>
         <div className="wep">
     
         <div className="imgbox">
         
            <img src="/img/my.png" alt="" />
         </div> 
            <h1>MD: Raisul Hasan Redoy</h1>
             <p>Mail:raisul58208@gmail.com</p>
             <div>
               <a href="https://www.facebook.com/mdrisulhasan.hridoy.3"><FaFacebook/></a>
             </div>
         </div>
         </div> 
           
    </div>
  )
}

export default Mainhome