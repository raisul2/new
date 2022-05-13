import React from 'react'

const About = () => {

    const arry = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1]

  return (
    <div className='about'>
    <div className="about-text">
    <h1>Today i am verry happy</h1>
           
    </div>
             
        <div className="about-grid">
        {
            arry.map((item)=>(
                <div className='aboutbox'></div>
                ))
            }
            </div>
    </div>
  )
}

export default About