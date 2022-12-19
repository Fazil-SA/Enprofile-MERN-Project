import React from 'react'
import {features} from '../../constants/user/index'
import styles , {layout} from '../../style'
import {Button} from '../user/userComponents'

const FeatureCard = ({icon,title,content,index}) => (
  <img src={icon} alt="" />
)
const Business = () => (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business,<br className='sm:block hidden' />We'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
        <Button styles='mt-10' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=> 
          <FeatureCard key={feature.id} {...feature} index={index} />
        )}
      </div>
    </section>
  )

export default Business
