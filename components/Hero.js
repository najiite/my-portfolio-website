import React from 'react'
import Link from "next/link"

const Hero = () => {
  return (
    <>
        <div className='flex items-center justify-start h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/80 z-[2]'></div>
            <div className='py-7 sm:px-[15rem] px-[3rem] text-white z-[2]'>
                <h2 className='text-5xl font-bold my-5'>Hello,</h2>
                <h2 className='text-5xl font-bold my-5'>I am <span className="main-Textcolor">Jite,</span></h2>
                <h2 className='text-5xl font-bold my-5'><span className="main-Textcolor">Front</span> End Developer</h2>
                <p className='text-xl my-10'>Currently located in Lagos, Nigeria. I love building <span className="main-Textcolor">interactive,</span> digital experiences on the web</p>
                <Link href='/#contact' className='my-10 px-7 sm:px-[5rem] py-7 border border-pink-700 hover:bg-pink-700 hover:border-0'>Let's get in touch</Link>
            </div>
        </div>
    </>
  )
}

export default Hero