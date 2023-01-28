import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <>
    <div id='projects' className='relative max-w-[1240px] m-auto'>
        <h1 className="text-5xl font-bold text-center pt-10"><span className='main-Textcolor'>Projects</span></h1>
        <div className='sm:grid sm:gap-4 sm:grid-cols-2 p-5'>
            <div className='items-center justify-center p-10 '>
                <p className='text-xl leading-loose py-10 z-[10]'>Take a look at some of my recent projects</p>  
                <Link href='https://github.com/najiite?tab=repositories' className='px-4 sm:px-[5rem] py-7 border border-pink-700 hover:bg-pink-700 hover:border-0'>View my Github page</Link>
              
            </div>
            <div className='grid gap-2 sm:gap-0 sm:grid-cols-2 grid-cols-1 py-5'>
                <div>
                    <figure className="figure-div">
                        <a href='https://photon-three.vercel.app/'>
                            <Image src='/projects/photon.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Photon</p>
                            <p className='text-sm '>A simple photography portfolio website built with nextJs</p>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure className="figure-div">
                        <a  href='https://next-weather-topaz.vercel.app/'>
                            <Image src='/projects/weather.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Weather App</p>
                            <p className='text-sm '>A weather webapp built with NextJS</p>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure className="figure-div">
                        <a  href='https://react-realtime-chat-phi.vercel.app/'>
                            <Image src='/projects/wixper.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Wixper</p>
                            <p className='text-sm '>Realtime webchat app built with react and supabase</p>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure className="figure-div">
                        <a  href='https://reactjs-blog-black.vercel.app/'>
                            <Image src='/projects/blog.png' width={1280} height={800}/>
                        </a>
                        <figcaption className="hover-image-caption">
                            <p className='text-lg'>Blog </p>
                            <p className='text-sm '>Blog template built with Reactjs and Sanity</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects