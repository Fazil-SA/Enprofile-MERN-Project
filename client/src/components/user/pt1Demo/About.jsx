import React from 'react'

const About = (tempData) => {
  return (
    <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pt-10'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-6'>About</p>
            </div>

            <p className='text-xl mt-5'>
                { tempData.data.firstPara  || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut maxime quia mollitia impedit magni omnis, adipisci tenetur sed hic numquam non cumque. Aspernatur saepe praesentium, tempora voluptatibus, quisquam eligendi non accusamus harum at nisi porro facilis et error voluptate, quo quis vero ipsam vel eos nobis mollitia minus voluptates voluptatem."}
            </p>

            <br />
            <p className='text-xl'>
            { tempData.data.secondPara  || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut maxime quia mollitia impedit magni omnis, adipisci tenetur sed hic numquam non cumque. Aspernatur saepe praesentium, tempora voluptatibus, quisquam eligendi non accusamus harum at nisi porro facilis et error voluptate, quo quis vero ipsam vel eos nobis mollitia minus voluptates voluptatem."}
                
            </p>
        </div>
    </div>
  )
}

export default About