import React from "react";
import { luka1 } from "../assets";
import { motion } from 'framer-motion'


const About = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <div className='flex-col sm:flex-row w-full flex items-center'>
            <p className="text-xl text-start sm:w-1/2">
            Hello! I'm Luka, a self-taught full-stack developer with a passion for coding and problem-solving.<br/>
            I recently completed a Python developer qualification course at Algebra University, where I honed my skills and knowledge in programming.<br/>
             One of my proudest achievements is the creation of an AI stories generator app, which includes captivating images to bring stories to life. <br/> 
             Alongside this major project, I've worked on various mini projects that showcase my versatility and creativity.
            </p>

            <img src={luka1} className="flex mx-5 max-w-[320px] sm:w-1/2 lg:ml-32"/>
            
        </div>
        </motion.div>
    )
}

export default About