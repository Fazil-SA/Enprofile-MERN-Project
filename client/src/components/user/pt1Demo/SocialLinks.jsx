import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = (tempData) => {
  console.log(tempData.data.linkedin)
  const links = [
    {
      id:1,
      child: (
        <>LinkedIn<FaLinkedin size={30} /></>
      ),
      href: tempData.data.linkedin  || 'https://www.linkedin.com/in/fazil-s-a-9721021b4/' ,
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child: (
        <>GitHub<FaGithub size={30} /></>
      ),
      href: tempData.data.github || 'https://github.com/Fazil-SA',
      style: 'rounded-br-md',
    },
    // {
    //   id:3,
    //   child: (
    //     <>Mail<HiOutlineMail size={30} /></>
    //   ),
    //   href: 'mailto:fazilsa2000@gmail.com',
    // },
    // {
    //   id:4,
    //   child: (
    //     <>Resume<BsPersonLinesFill size={30} /></>
    //   ),
    //   href: '',
    //   style: 'rounded-br-md',
    //   download: true
    // },
  ]
  return (
    <div className='top-[65%] lg:flex flex-col md:top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
          <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank" rel='noreferrer'>
            {child}
          </a>
          </li>
        ))}
       
      </ul>
    </div>
  )
}

export default SocialLinks