import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [visible, setvisible] = useState(false)
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
           
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p> COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/ about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>



            </ul>
 

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col gap-4 p-3 cursor-pointer">
                    <div onClick={() => setvisible(false)} className="flex items-center gap-2">
                        <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
                        <p>Back</p>
                    </div>


                    <div className="flex flex-col">
                        <NavLink onClick={() => setvisible(false)} className="py-3 px-8 border" to="/">HOME</NavLink>
                        <NavLink onClick={() => setvisible(false)} className="py-3 px-8 border" to="/collection">COLLECTION</NavLink>
                        <NavLink onClick={() => setvisible(false)} className="py-3 px-8 border" to="/about">ABOUT</NavLink>
                        <NavLink onClick={() => setvisible(false)} className="py-3 px-8 border" to="/contact">CONTACT</NavLink>
                    </div>
                </div>


            </div>

        </div >
    )
}

export default Navbar
