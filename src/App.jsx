import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'

import Simulations from './Simulators/kalamkari/KalamkariSimulations'
import Border from './Simulators/kalamkari/Designs'
import Simulator from './Simulators/kalamkari/KalamkariSimulator'



const App = () => {
  return (

    <div className='px-4sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
    
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/border' element={<Border/>}/>
    <Route path='/3dsim' element={<Simulator/>}/>


      <Route path='/simulation' element={<Simulations/>}/>
    </Routes>
    {/* <HomePage/> */}
    
    </div >
  )
}

export default App
