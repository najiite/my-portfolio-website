import React from 'react'
import { FaWhatsapp, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
        <div id='contact'>
            <div className='bg-fixed bg-center bg-contain  projects'>

                <div className='bg-black/90 p-5 '>

                    <div className='sm:m-10 px-5 leading-loose'>
                        <h1 className="  text-5xl font-bold text-center p-4">Let's Talk About Your <span className='main-Textcolor'>Project</span></h1>
                        <p>I am excited about the opportunity to <span className='main-Textcolor'>work on new and challenging projects. </span>If you have a project in mind and you're looking for a front-end developer to help bring it to life, I would love to hear from you.</p>
                        <p>In this section, I would like to give you an idea of my process for working on a project. I believe that clear <span className='main-Textcolor'>communication and a thorough understanding of your needs</span> are the keys to a successful project. So, before we get started, we'll have a consultation where we can discuss your goals and objectives, as well as any specific requirements you may have.</p>
                        <p>Once we have a clear understanding of what you're looking for, I will work with you to create a detailed project plan that outlines the scope of the project, timelines, and deliverables. I will also provide you with <span className='main-Textcolor'>regular progress updates,</span> so you can be sure that the project is on track.</p>
                        <p>If you're interested in working together, please don't hesitate to <span className='main-Textcolor'>contact me.</span> I would be happy to discuss your project in more detail and provide you with a proposal.</p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#000106] to-[#20020f]'>

                        <p className='text-center text-4xl font-semibold p-10'>Contact Me</p>
                        <motion.div className='sm:grid sm:grid-cols-2' initial={{ opacity: 0, scale: 0.2}} whileInView={{ opacity: 1, scale: 1}} transition={{ duration: 2}}>
                                
                            <p className='flex items-stretch p-5'><FaPhone size={30}/> <a href='tel:+2348038895261' className='text-3xl mx-5 hover:main-Textcolor'>+234 803 889 5261</a></p>
                            <p className='flex items-stretch p-5'><FaEnvelope size={35}/> <a href='mailto:onajiteokeh@gmail.com' className='text-2xl mx-5 hover:main-Textcolor'>onajiteokeh@gmail.com</a></p>
                            <p className='flex items-stretch p-5'><FaWhatsapp size={35}/> <a href='https://wa.me/2348038895261' className='text-3xl mx-5 hover:main-Textcolor'>Message me on WhatsApp</a></p>
                            <p className='flex items-stretch p-5'><FaTwitter size={35}/> <a href='https://twitter.com/najiite' className='text-3xl mx-5 hover:main-Textcolor'>@najiite</a></p>
                        </motion.div>
            </div>
            
        </div>
    </>
  )
}

export default Contact