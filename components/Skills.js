import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    const listVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                delayChildren: 0.5
            }

        }
    }
  return (
    <>
    <div className='bg-fixed bg-center bg-contain float'>
        <div id='about' className=' bg-black/75 p-5'>
            <h1 className="text-5xl font-bold text-center p-4"><span className='main-Textcolor'>Skills</span> and tools</h1>
            <div className='sm:grid sm:gap-4 sm:grid-cols-2 sm:p-5'>
                <div className='justify-center'>
                    <p className='text-sm leading-loose py-5'>I am a highly skilled and motivated front-end developer with a passion for creating visually stunning and user-friendly websites. I have experience in a variety of web development technologies, including HTML, CSS, JavaScript, and responsive design. I am also familiar with front-end frameworks such as Bootstrap and TailwindCss, and have experience working with JavaScript libraries and frameworks such as React, ReactNative, NextJS and Svelte.</p>
                    <motion.ul className='text-sm leading-loose'>
                        <motion.li  variants={listVariants} initial="hidden" whileInView="show"><span className="main-Textcolor">01.</span>Proficiency in HTML, CSS, and </motion.li>
                        <motion.li variants={listVariants} initial="hidden" whileInView="show"><span className="main-Textcolor">02.</span>Experience with responsive design and mobile optimization</motion.li>
                        <motion.li variants={listVariants} initial="hidden" whileInView="show"><span className="main-Textcolor">03.</span>Familiarity with front-end frameworks such as Bootstrap or Foundation</motion.li>
                        <motion.li  variants={listVariants} initial="hidden" whileInView="show"><span className="main-Textcolor">04.</span>Knowledge of web development tools such as Git and Webpack</motion.li>
                        <motion.li  variants={listVariants} initial="hidden" whileInView="show"><span className="main-Textcolor">05.</span>Experience with JavaScript libraries and frameworks such as React or Angular</motion.li>
                        <motion.li  variants={listVariants} initial="hidden" whileInView="show"><span className="main-Textcolor">06.</span>Experience with accessibility and web standards</motion.li>
                    </motion.ul>
                </div>
                <div className='grid gap-3 sm:grid-cols-3 grid-cols-2 py-5'>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/html-5.svg' alt='image' whileHover={{scale: 1.5}} width={80} height={80} />
                        <p className='text-center'>Html5</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/css3.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>Css3</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/javascript.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>Javascript</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/tailwind.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>TailwindCss</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/bootstrap.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>Bootstrap</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/react.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>React</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/react.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>React Native</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/svelte.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>Svelte</p>
                    </div>
                    <div className='grid grid-rows-none gap-4 justify-center bg-neutral-900 hover:bg-gray-700/50 p-5 rounded-xl'>
                        <motion.img src='/icons/php.svg' alt='image' width={80} height={80}  whileHover={{scale: 1.5}} />
                        <p className='text-center'>PHP</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills