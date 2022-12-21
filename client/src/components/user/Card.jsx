import React from 'react'

const Card = ({pricing , styles, head }) => {
  return (
    <section className={`flex justify-center items-center sm:justify-between flex-row flex-wrap sm:mb-20 mb-6`}>
        <p className={`${styles.heading3} ${styles.flexCenter} `}>{head}</p>
      
      {pricing.map((pricing) => <div key={pricing.id}>
        <h2 className={`font-poppins font-bold xs:text-[20px] mt-4 text-[20px] leading-[21px] text-gradient uppercase ml-3 ${styles.flexCenter}`}>{pricing.title}</h2>
        <img className={`rounded-[20px] mt-7 ${styles.flexCenter} flex justify-center h-[300px]`} src={pricing.img} alt="" />
        </div>
      )}

<div className='absolute z-[3] -left-1/2 bottom-0 w-50% h-50% rounded-full bg-gradient-to-tr'></div>

    </section>
  )
}

export default Card

