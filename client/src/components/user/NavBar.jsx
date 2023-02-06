import React from 'react'
import { useState } from 'react'
import { close,logo,menu } from '../../assets/user/index'
import { navLinks } from '../../constants/user/index'
import { useSelector, useDispatch } from 'react-redux'
import { clearUserToken, clearPortfolioCreationData, clearPurchasedTemplateData } from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const token = useSelector((state) => state.authSlice.userToken)
  const navigate = useNavigate()
  const Dispatch = useDispatch()

  function clearDispatch() {
    Dispatch((clearUserToken()))
    Dispatch((clearPortfolioCreationData()))
    Dispatch((clearPurchasedTemplateData()))
  }
  return (
    <nav className='w-full flex py-6 justify-between items-start navbar'>
      <a href="/">
        <img src={logo} alt="Enprofile" className='w-[150px] h-[35px] cursor-pointer' />
      </a>
      <ToastContainer/>

      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => {
          return <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-[#04535f] hover:animate-spin-bounce`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        })}
        <button onClick={() => { 
                token ? clearDispatch()  && toast.error("User has been logged out!!", {
                  theme: "colored",
                  autoClose: 3000,
              }) : navigate('/login')
              }} className={`font-poppins cursor-pointer text-[16px] text-white mb-4 bg-[#13353a] hover:bg-[#0a282c] font-bold py-2 px-4 rounded-full`}>
          {token ? 'Logout' : 'Login / Register'} 
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
                  <a href={`${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              })}
              <button onClick={() => {
                token ? clearDispatch() && toast.error("User has been logged out!!", {
                  theme: "colored",
                  autoClose: 3000,
              }) : navigate('/login')
              }} className={`font-poppins cursor-pointer text-[16px] text-white mb-4 bg-[#13353a] hover:bg-[#0a282c] font-bold py-2 px-4 rounded-md`}>
              {token ? 'Logout' : 'Login / Register'} 
            </button>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
