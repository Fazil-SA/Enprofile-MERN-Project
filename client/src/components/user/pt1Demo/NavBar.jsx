import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";

const NavBar = () => {
  const links = [
    {
        id: 1,
        link : "home"
    },
    {
        id: 2,
        link : "about"
    },
    // {
    //     id: 3,
    //     link : "portfolio"
    // },
    // {
    //     id: 4,
    //     link : "experience"
    // },
    {
        id: 5,
        link : "contact"
    },
  ]
  const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Fazil</h1>
        </div>
        <ul className='md:flex hidden'>
                {links.map(({ id,link }) => (
                    <li key={id} className='px-10 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link activeClass="active"
                                to={link}
                                spy={true}
                                offset={-50}
                                duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer text-gray-500 pr-4 z-10 hover:scale-105 duration-200'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && 
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({ id,link }) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link activeClass="active"
                                onClick={() => setNav(!nav)}
                                to={link}
                                offset={-50}
                                duration={500}>
                            {link}
                        </Link>
                </li>
            ))}
            </ul>
        }
    </div>
  )  
}

export default NavBar
