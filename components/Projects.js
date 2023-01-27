import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <>
    <div id='about' className='max-w-[1240px] mx-auto'>
        <h1 className="text-2xl font-bold text-center p-4"><span className='main-Textcolor'>Projects</span></h1>
        <div className='sm:grid sm:gap-4 sm:grid-cols-2 p-5'>
            <div className='justify-center p-10'>
                <p className='text-xl leading-loose py-10'>Take a look at some of my recent projects</p>  
                <Link href='https://github.com/najiite?tab=repositories' className='px-7 sm:px-[5rem] py-7 border border-pink-700 hover:bg-pink-700 hover:border-0'>View my Github page</Link>
            
            </div>
            <div className='grid gap-3 sm:grid-cols-3 grid-cols-2 py-5'>
                <div>
                    <iframe src="https://reactjs-blog-black.vercel.app/" title="ReactJs Blog Template" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects