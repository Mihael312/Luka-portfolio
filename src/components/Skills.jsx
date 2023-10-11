import React from "react";

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { js, node, python, react } from "../assets";

const ServiceCard = ({img, text}) => {
    return (
      <Tilt className='xs:w-[300px] w-full'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={img} className='w-96 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{text}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

const Skills = () => {
    return (
        <>
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <div className="mt-32 text-center sm:text-start">
            <h1 className="text-5xl">My skills.</h1>
        </div>
        </motion.div>

        <div className='mt-20 mb-10 flex justify-center flex-wrap gap-10'>
            <ServiceCard img={js} text='JavaScript' key='service' index='index'/>
            <ServiceCard img={react} text='React' key='service' index='index'/>
            <ServiceCard img={python} text='Python' key='service' index='index'/>
            <ServiceCard img={node} text='NodeJS' key='service' index='index'/>
        </div>

        </>
    )
}



export default Skills