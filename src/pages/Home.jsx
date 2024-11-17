import React, { useState, useEffect }  from 'react'
import Header from './Header'
import BestSeller from '../components/BestSeller'
import NewsFooter from './NewsFooter'
import PreLoader from '../components/PreLoader'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check if preloader has already been shown
    const isPreloaderShown = localStorage.getItem('isPreloaderShown');

    if (!isPreloaderShown) {
      setIsLoading(true); // Show preloader
      const timer = setTimeout(() => {
        setIsLoading(false); // Hide preloader
        localStorage.setItem('isPreloaderShown', 'true'); // Set flag
      }, 4000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, []);
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
