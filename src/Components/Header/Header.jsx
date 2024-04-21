import React from 'react'
import Headerpic from '../Header/Headerpic.jpg'
import { motion } from 'framer-motion'
// import { pageAnimation } from '../animation'


const container = (delay) =>({
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        x:0,
        opacity:1,
        transition:{duration:0.5,delay: delay},
    }
})

const Header = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                 variants={container(0.25)}
                 initial="hidden"
                 animate="visible"
                 viewport={{once:true}}
                 className='pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-7xl'>BhagyaDillesh</motion.h1>
                <motion.span  
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                viewport={{once:true}}
                className='bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500  bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                viewport={{once:true}}
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img 
                   initial={{opacity:0,x:-100}}
                   animate={{opacity:1,x:0}}
                   transition={{duration:1,delay:1.2}}
                className='rounded-2xl' src={Headerpic} alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
