import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

     

  

        <div>
            <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                
                <li>cs23b049@iittp.com cs23b059@iittp.com</li>
        
                <li>cs23b024@iittp.com cs23b001@iittp.com</li>
             
                <li>cs21b056@iittp.com cs21b051@iittp.com</li>
               
            </ul>

        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ UG2-7 - All Rights reserved</p>
        </div>

    </div>
  )
}

export default Footer
