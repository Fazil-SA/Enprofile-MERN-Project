import React from 'react'
import {demo} from "../../../assets/user/index"
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: demo
        },
        {
            id: 2,
            src: demo
        },
        {
            id: 3,
            src: demo
        },
        {
            id: 4,
            src: demo
        },
        {
            id: 5,
            src: demo
        },
        {
            id: 6,
            src: demo
        },
    ]
  return (
    <div id='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-12'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check some of my works right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
                ))
            }
            

        </div>
      </div>
    </div>
  )
}

export default Portfolio
