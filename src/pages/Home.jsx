import React from 'react'
import Header from './Header'
import BestSeller from '../components/BestSeller'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="overflow-hidden min-h-screen">
      <BestSeller />
      </div>

    </div>
  )
}

export default Home
