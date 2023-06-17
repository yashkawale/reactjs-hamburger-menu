import React, { useState } from 'react';
import {FaTimes, FaBars} from "react-icons/fa"

const Navbar = () => {

    const [nav, hamNav] = useState(false)
    const handleClick = () => hamNav(!nav)

    return(
        
        <div className='fixed w-full h-16 flex justify-between items-center px-4 bg-[#0A174E] text-[#F5D042]'>
            {/* desktop menu  */}
        <div>
            <ul className="hidden md:flex">
                <li className="px-6">Home</li>
                <li className="px-6">About</li>
                <li className="px-6">Projects</li>
                <li className="px-6">Contact</li>
            </ul>
        </div>

        <div className='text-[#F5D042] md:hidden'>
            <h1 className='text-4xl'>Yash Kawle</h1>
        </div>

        {/* hamburger icon  */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className='hidden md:flex md:text-[#F5D042]'>
            <h1 className='text-4xl'>Yash Kawle</h1>
        </div>

        {/* mobile menu  */}
        <ul className={!nav ? 'hidden': 'absolute text-4xl top-0 left-0 w-full h-screen flex flex-col items-center justify-center md:hidden bg-[#0A174E]'}>
            <li className="py-5">Home</li>
            <li className="py-5">About</li>
            <li className="py-5">Projects</li>
            <li className="py-5">Contact</li>
        </ul>

        </div>
        
    );
};

export default Navbar;