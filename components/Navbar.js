import Link from "next/link"
import { useState } from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const HandleNav = () => {
        setNav(!nav)
    } 

  return (
    <>
    
        <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center text-white p-4">
                <Link href='/'>
                    <h1  className="font-bold text-4xl">Najiite</h1>
                </Link>
                
                <ul className="hidden sm:flex ">
                    <li className="lg-navElements">
                        <Link href='/#about'><span className="main-Textcolor">01.</span>About</Link>
                    </li>
                    <li className="lg-navElements">
                        <Link href='/#projects'><span className="main-Textcolor">02.</span>Projects</Link>
                    </li>
                    <li className="lg-navElements">
                        <Link href='/#contact'><span className="main-Textcolor">03.</span>Contact</Link>
                    </li>
                </ul>
                <div className="sm:hidden block z-10">
                    { nav ? <AiOutlineClose size={20} onClick={HandleNav}  style={{color: `white`}}/> : <AiOutlineMenu size={20}  onClick={HandleNav} />}
                    
                </div>
                <div className={nav ?"sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-[#000822] text-center ease-in duration-300": "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-[#000822] text-center ease-in duration-300" }>
                    <ul>
                        <li onClick={HandleNav}  className="sm-navElements">
                            <Link href='/#about'><span className="main-Textcolor">01.</span>About</Link>
                        </li>
                        <li onClick={HandleNav}  className="sm-navElements">
                            <Link href='/#projects'><span className="main-Textcolor">02.</span>Projects</Link>
                        </li>
                        <li onClick={HandleNav}  className="sm-navElements">
                            <Link href='/#contact'><span className="main-Textcolor">03.</span>Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar