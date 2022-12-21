import React from 'react'

const Button = ({styles , title}) => (
    <button type='button' className={`rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
        {title ? title : "Get Started"}
    </button>
  )


export default Button
