import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <>
    <div id='projects' className='bg-gradient-to-r from-[#000106] to-[#20020f]'>
        <h1 className="text-5xl font-bold text-center pt-10"><span className='main-Textcolor'>Projects</span></h1>
        <div className='sm:grid sm:gap-4 sm:grid-cols-2 p-5'>
            <motion.div animate={{ rotate: 360}} transition={{ ease: "linear", duration: 5, repeat: Infinity }}
 className='absolute content-center  bg-pink-700/10 z-[0] rounded-3xl w-60 h-60 m-10'></motion.div>
            <motion.div className='items-center justify-center p-10 z-[10]' initial={{ scale: 0.2}} whileInView={{ scale: 1}} transition={{ duration: 2}}>
                <p className='text-xl leading-loose py-10 z-[10]'>Take a look at some of my recent projects</p>  
                <Link href='https://github.com/najiite?tab=repositories' className='px-4 sm:px-[5rem] py-7 border border-pink-700 hover:bg-pink-700 hover:border-0'>View my Github page</Link>
              
            </motion.div>
            <div className='grid gap-2 sm:gap-0 sm:grid-cols-2 grid-cols-1 py-5'>
                <motion.div initial={{ scale: 0.2}} whileInView={{ scale: 1}} transition={{ duration: 2}}>
                    <figure className="figure-div">
                        <a href='https://photon-three.vercel.app/'>
                            <Image src='/projects/photon.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Photon</p>
                            <p className='text-sm '>A simple photography portfolio website built with nextJs</p>
                        </figcaption>
                    </figure>
                </motion.div>
                <motion.div initial={{ scale: 0.2}} whileInView={{ scale: 1}} transition={{ duration: 2}}>
                    <figure className="figure-div">
                        <a  href='https://hotel-gold.vercel.app/'>
                            <Image src='/projects/hotel.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>La Belle Vue Hotel</p>
                            <p className='text-sm '>A luxury hotel landing page built with NextJs and TailwindCss</p>
                        </figcaption>
                    </figure>
                </motion.div>
                <motion.div initial={{ scale: 0.2}} whileInView={{ scale: 1}} transition={{ duration: 2}}>
                    <figure className="figure-div">
                        <a  href='https://react-realtime-chat-phi.vercel.app/'>
                            <Image src='/projects/wixper.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Wixper</p>
                            <p className='text-sm '>Realtime webchat app built with react and supabase</p>
                        </figcaption>
                    </figure>
                </motion.div>
                <motion.div initial={{ scale: 0.2}} whileInView={{ scale: 1}} transition={{ duration: 2}}>
                    <figure className="figure-div">
                        <a  href='https://reactjs-blog-black.vercel.app/'>
                            <Image src='/projects/blog.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Blog </p>
                            <p className='text-sm '>Blog template built with Reactjs and Sanity</p>
                        </figcaption>
                    </figure>
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects