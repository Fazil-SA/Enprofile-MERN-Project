import React from 'react'
import { useState } from 'react'
import { close,logo,menu } from '../../assets/user/index'
import { navLinks } from '../../constants/user/index'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-start navbar'>
      <a href="/">
        <img src={logo} alt="Enprofile" className='w-[150px] h-[35px] cursor-pointer' />
      </a>

      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => {
          return <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-[#04535f] hover:animate-spin-bounce`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        })}
        <button className={`font-poppins cursor-pointer text-[16px] text-white mb-4 bg-[#13353a] hover:bg-[#0a282c] font-bold py-2 px-4 rounded-full`}>
        Login / Register
        </button>
      </ul>
      <div className='md:hidden flex flex-1 justify-end items-center'>
        {
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain' onClick={() => {
              setToggle((prev) => !prev)
            }} />
        }
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex-col justify-end items-center flex-1'>
              {navLinks.map((nav,index) => {
                return <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              })}
              <button className={`font-poppins cursor-pointer text-[16px] text-white mb-4 bg-[#13353a] hover:bg-[#0a282c] font-bold py-2 px-4 rounded-md`}>
              Login / Register
            </button>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
