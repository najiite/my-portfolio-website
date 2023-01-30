import Link from "next/link"
import { useState, useEffect, } from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const HandleNav = () => {
        setNav(!nav)
    } 

    useEffect(()=>{
        const changeColor = () => {
            if (window.scrollY>=90) {
                setColor('#000106')

            }
            else {
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    const boxVariant = {
        hidden : {
            x: "-100vw",
            y: "-100vw",
            borderRadius: "50%"
        },
        visible : {
            x: 0, 
            y: 0,
            borderRadius: "0%",
            transition: {
                duration: 1,
                when: "beforeChildren",
                delayChildren: 0.5,
                staggerChildren: 0.2 
            }
        } 
    } 
    const listVariant = {
        hidden : {
            x: -10,
            opacity: 0
        },
        visible : {
            x: 0,
            opacity: 1,
        }
    }

  return (
    <>
    
        <div  style={{backgroundColor: `${color}`}} className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center text-white p-4">
                <Link href='/'>
                    <h1  className="font-bold text-4xl">Najiite</h1>
                </Link>
                
                <ul className="hidden sm:flex ">
                    <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                        <Link href='/#about'><span className="main-Textcolor">01.</span><motion.span>About</motion.span></Link>
                    </motion.li>
                    <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                        <Link href='/#projects'><span className="main-Textcolor">02.</span>Projects</Link>
                    </motion.li>
                    <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                        <Link href='/#contact'><span className="main-Textcolor">03.</span>Contact</Link>
                    </motion.li>
                </ul>
                <div className="sm:hidden block z-10">
                    { nav ? <AiOutlineClose size={20} onClick={HandleNav}  style={{color: `white`}}/> : <AiOutlineMenu size={20}  onClick={HandleNav} />}
                    
                </div>
                <motion.div 
                    className={nav ?"sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-[#000822] text-center ease-in duration-300": "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-[#000822] text-center ease-in duration-300" } 
                    variants={boxVariant}
                    initial="hidden"
                    whileInView="visible"
            >
                    <ul>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#about'><span className="main-Textcolor">01.</span>About</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#projects'><span className="main-Textcolor">02.</span>Projects</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#contact'><span className="main-Textcolor">03.</span>Contact</Link>
                        </motion.li>
                    </ul>

                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Navbar