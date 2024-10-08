import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import BestSeller from './components/BestSeller'
import Quiz from './pages/quiz'
import MainQuizPage from './pages/MainQuiz'
import Simulations from './pages/Simulations'
import Border from './pages/Border'
import Simulator from './pages/Simulator'



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
