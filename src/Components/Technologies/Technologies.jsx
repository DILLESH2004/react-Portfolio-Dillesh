import React from 'react'
import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMongodb} from 'react-icons/si';
import {DiRedis} from 'react-icons/di';
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import {motion} from 'framer-motion'


const Technolgies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}} 
       className='my-20 text-center text-4xl' >Technologies</motion.h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl text-white-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiRedis className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-red-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaBootstrap className='text-7xl text-pink-400'/>
        </div>
      </div>
    </div>
  )
}

export default Technolgies;
