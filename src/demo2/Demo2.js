import React from 'react'
import './scss/index.scss'
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/About'
const Demo2 = () => {
  return (
   <>
  
   <Navbar/>
   <Routes>
  
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />  
  
  
   </Routes>
 
   </>
  )
}

export default Demo2


