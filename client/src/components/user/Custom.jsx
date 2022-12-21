import React from 'react'
import Button from './Button'
import styles from '../../style'

const Custom = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} sm:px-16 px-6 sm:py-6 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div>
            <p className={`${styles.paragraph} font-medium items-center justify-center max-w-[470px]`}>You need a more customised Website for your business ? Don’t Worry Just call us now...</p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button title="Contact Now" />
        </div>
    </section>
  )
}

export default Custom
