import React from 'react'
import './Projects.css';
import {motion} from 'framer-motion'
import project1 from '../Projects/Project1.png';
 import project2 from '../Projects/Blood-Donation.jpg'
// import project3 from '../Projects/'
// import project4 from '../Projects/'
export const PROJECTS = [
    {
      title: "Street Food",
      image: project1,
      description:
        "A fully functional Street Food website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
        title:"Donor2Needer",
        image:project2,
        description:"A full functional Blood Donation Website can be useful in emergency Situations for Emergency Blood by the help of Geo Location",
        technologies:["HTML","CSS","React","Node.js","PHP","JQuery"]
    }
  ];
  

const Projects = () => {
  return (
    <div className='border-b  border-neutral-900 pb-4'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} 
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {
                PROJECTS.map((project,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                        <img  className="mb-6 rounded-2xl" width={300} height={300}src={project.image} alt={project.title} />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-settle'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech,index)=>(
                                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech} </span>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Projects
