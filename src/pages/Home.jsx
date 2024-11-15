import React from 'react'
import Header from './Header'
import BestSeller from '../components/BestSeller'
import NewsFooter from './NewsFooter'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="overflow-hidden min-h-screen">
      <BestSeller/>
      </div>
      <NewsFooter/>
    </div>
  )
}

export default Home
