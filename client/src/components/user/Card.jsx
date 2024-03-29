import { Link } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({data , styles, head }) => {
const navigate = useNavigate()

console.log(data)
  return (
    <section className={`flex justify-center items-center sm:justify-between flex-row flex-wrap sm:mb-20 mb-6`}>
        <p className={`${styles.heading3} ${styles.flexCenter} `}>{head}</p>
        <ToastContainer />
      {
        data ? 
        data.map((data) => <div key={data._id}>
        <h2 className={`font-poppins font-bold xs:text-[20px] mt-4 text-[20px] leading-[21px] text-gradient uppercase ml-3 ${styles.flexCenter}`}>{data.name}</h2>
        {data.redirectUrl == "nil" ? 
        <img onClick={() => toast.error("We are working hard to make it live.!", {theme: "colored",autoClose: 3000})} className={`rounded-[20px] mt-7 ${styles.flexCenter} hover:scale-105 opacity-30 duration-100 flex justify-center h-[300px] w-[300px]`} src={data.imageUrl} alt="template" />
         :
        <img onClick={() => navigate(data.redirectUrl,{state:data})} className={`rounded-[20px] mt-7 ${styles.flexCenter} hover:scale-105 duration-100 flex justify-center h-[300px] w-[300px]`} src={data.imageUrl} alt="template" />
         }
        </div>
      )
      :
      ''
      }
      

<div className='absolute z-[3] -left-1/2 bottom-0 w-50% h-50% rounded-full bg-gradient-to-tr'></div>

    </section>
  )
}

export default Card

