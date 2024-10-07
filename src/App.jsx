import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'


import Navbar from './components/Navbar'


const App = () => {
  return (

    <div className='px-4sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />

      </Routes>

    </div >
  )
}

export default App
