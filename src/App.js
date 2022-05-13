import React, { useEffect, useRef, useState } from 'react'
import {BrowserRouter as Router ,  Routes , Route, Link} from 'react-router-dom'
import About from './component/About'
import Demo1 from './demo1/Demo1'
import Home from './component/Home'
import Mainhome from './Mainhome'
import Demo2 from './demo2/Demo2'
import { PushSpinner, GuardSpinner  } from "react-spinners-kit"; 
import Demo3 from './demo3/Demo3'
const App = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
      
       setLoading(true)

  
        setTimeout(()=>{

          setLoading(false)
            
        }, 2000)
            


    }, [])
    
  

     
 

  return (

    <>

    {
      loading ?  ( <div  style={{height:"100vh", display:"flex" ,alignItems:"center", justifyContent:"center" }}>  <GuardSpinner 
        size={30}
        color="white"
        loading={loading}
    />  </div> )
      :(    <Router>
        <Routes>
       
           <Route path='/' element={<Mainhome/>} />
           <Route path='/demo1' element={<Demo1/>} />
           <Route path='/demo2/*' element={<Demo2/>} />
           <Route path='/demo3/*' element={<Demo3/>} />
       
        </Routes>
        </Router>
      )
    }




    </>
  )   
}

export default App