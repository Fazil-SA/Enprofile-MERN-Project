import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import HeroImg from '../../../assets/user/portfolio-t1/heroImage3.png'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row'>
        <div className='flex flex-col mt-20 justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a full stack developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>Deploying various webapps from scratch,Learning the new technologies and loving the path</p>
            <div className='flex justify-center items-center sm:justify-start'>
                <Link to='portfolio' duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImg} className='rounded-2xl mx-auto w-2/3 md:w-full' alt="profileImg"/>
        </div>
      </div>   
    </div>
  )
}

export default Home