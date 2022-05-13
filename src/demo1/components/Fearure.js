import React from 'react'

const Fearure = () => {

    const arry = [
      {
         icon:"fa-solid fa-bars",
         title:"business stratagy",
         subtitle:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, similique numquam! Necessitatibus voluptatem, doloribus in quasi deserunt quam nihil ea quia minus pariatur"
    },
      {
         icon:"fa-solid fa-book-open",
         title:"business stratagy",
         subtitle:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, similique numquam! Necessitatibus voluptatem, doloribus in quasi deserunt quam nihil ea quia minus pariatur"
    },
      {
         icon:"fa-solid fa-tv",
         title:"business stratagy",
         subtitle:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, similique numquam! Necessitatibus voluptatem, doloribus in quasi deserunt quam nihil ea quia minus pariatur"
    },
      {
         icon:"fa-solid fa-mobile",
         title:"app development",
         subtitle:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, similique numquam! Necessitatibus voluptatem, doloribus in quasi deserunt quam nihil ea quia minus pariatur"
    },
      {
         icon:"fa-solid fa-wifi",
         title:"business stratagy",
         subtitle:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, similique numquam! Necessitatibus voluptatem, doloribus in quasi deserunt quam nihil ea quia minus pariatur"
    },
      {
         icon:"fa-solid fa-object-group",
         title:"business stratagy",
         subtitle:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, similique numquam! Necessitatibus voluptatem, doloribus in quasi deserunt quam nihil ea quia minus pariatur"
    },
  
  ]

  return (
    <>
    <div className="features">
             <div className='f-box'>
               <p>feture</p>
               <h1>what i do</h1>
             </div>
             <div className="box1">
        
             
             {
                 arry.map((item)=>(
                    <div className='box'>
                       <span><i className={item.icon}></i></span>
                       <h1>{item.title}</h1>
                       <p>{item.subtitle}</p>
                     <span>    <i class="fa-solid fa-arrow-right"></i> </span> 
                    </div>        
                     ))
                    }
                    </div> 
     </div>
    </>
  )
}

export default Fearure