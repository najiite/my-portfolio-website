import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariant = {
    hidden: {
      y: "5vw",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
      },
    }
  }


  return (
    <>
        <div className='flex items-center justify-start w-auto h-screen mb-12 bg-fixed bg-center bg-cover bg-no-repeat custom-img'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-[2]'></div>
            <div className='py-7 sm:px-[15rem] px-[3rem] text-white z-[2]'>
                <motion.h2 
                    className='text-5xl font-bold my-5' 
                    initial={{ y: "-5vw", opacity: 0}} 
                    animate={{ y: 0, opacity: 1}} 
                    transition={{ duration: 1.5}}>
                      Hello,
                </motion.h2>
                <motion.h2 className='text-5xl font-bold my-5' 
                    initial={{ y: "5vw", opacity: 0}} 
                    animate={{ y: 0, opacity: 1}} 
                    transition={{ duration: 1.5}}>
                      I am <span className="main-Textcolor">Jite,</span></motion.h2>
                <motion.h2 className='text-5xl font-bold my-5'
                    initial={{ x: "10vw", opacity: 0}} 
                    animate={{ x: 0, opacity: 1}} 
                    transition={{ duration: 1.5, delay: 1}}
                    ><span className="main-Textcolor">
                      Front</span> End Developer</motion.h2>
                <p className='text-xl my-10'>Currently located in Lagos, Nigeria. I love building <span className="main-Textcolor">interactive,</span> digital experiences on the web</p>
                <motion.a 
                    initial={{ opacity: 0}} 
                    animate={{ opacity: 1}} 
                    transition={{ delay: 2}} 
                    href='/#contact' className='my-10 px-7 sm:px-[5rem] py-7 border border-pink-700 hover:bg-pink-700 hover:border-0'>Let's get in touch</motion.a>
            </div>
        </div>
    </>
  )
}

export default Hero