import React from 'react'

const Resume = () => {
    const arry = [
      
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
      {
           
        title:"Personal Portfolio April Fools",
        sub:"University of DVI (1997 - 2001)",
        p:"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
    },
  
  ]

  const link = [
     
    {
      name:"education",
      link:"/education"
    },
    {
      name:"professional skills",
      link:"/skills"
    },
    {
      name:"experience",
      link:"/expreince"
    },
    {
      name:"interview",
      link:"/interview"
    },

  ]



  return (
    <>
    <div className="clients">

      <div className="top">
      
      {
        link.map((item)=>(
          <span><p>{item.name}</p></span>
        ))
      }
         

      </div>
      <div className="left">
         {
             arry.map((item)=>(
                 <div className="timeline">
                 <div className='topx'>
                 <h1>{item.title}</h1>
                 <p>{item.sub}</p>
                 <span>4.30/5</span>
                </div>
                <p>{item.p}</p>
                 </div>
             ))
         }
      </div>
      <div className="right">
      {
        arry.map((item)=>(
            <div className="timeline">
            <div className='topx'>
             <h1>{item.title}</h1>
             <p>{item.sub}</p>
             <span>4.30/5</span>
            </div>
            <p>{item.p}</p>
            </div>
        ))
    }
      </div>

    </div>
    
    </>
  )
}

export default Resume