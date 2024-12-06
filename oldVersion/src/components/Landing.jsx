import React from 'react'
import SectionWrapper from './SectionWrapper'
import skylerPicture from '../assets/images/people/skylerPicture.webp'
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope, FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import ProgressiveImage from 'react-progressive-graceful-image'

const Landing = () => {
  return (
    <SectionWrapper id='landing'>

            <div className="content-wrapper flex flex-col items-center gap-4 z-10">

                {/* Picture */}
                <div className='w-[144px] h-[144px] rounded-full bg-gray-800 overflow-hidden border-[6px] border-white shadow-[0_0_30px_cyan]'> {/* shadow-lg shadow-gray-800 // shadow-[0_0_30px_seagreen]*/}
                    <ProgressiveImage src={skylerPicture} placeholder={''}>
                        {(src, loading) => (
                            <img
                                src={src}
                                alt={"Skyler"}
                                className={`w-full h-full object-cover duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                            />
                        )}
                    </ProgressiveImage>
                </div>

                {/* Name and Title */}
                <div className='text-center flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl font-bold'><span>Skyler</span> <span className='text-blue-500'>Conley</span></h1>
                    <h2 className='text-2xl'> <span className='text-blue-500'>Full Stack</span> Web Developer</h2>
                </div>

                {/* Socials */}
                <ul className="social-icons flex gap-4"> 
                    <li> 
                        <a aria-label="github" href="https://github.com/vonglory176" rel="noreferrer" target="_blank"><FaGithub size={24} className='text-white hover:text-blue-500 duration-300' /></a> 
                    </li> 
                    <li> 
                        <a aria-label="FaGitlab" href="https://gitlab.com/vonglory176" rel="noreferrer" target="_blank"><FaGitlab size={24} className='text-white hover:text-blue-500 duration-300' /></a> 
                    </li>                
                    <li> 
                        <a aria-label="linkedin" href="https://www.linkedin.com/in/skyler-g-conley-1b6a33133/" rel="noreferrer" target="_blank"><FaLinkedin size={24} className='text-white hover:text-blue-500 duration-300' /></a> 
                    </li> 
                    <li> 
                        <a aria-label="send mail" href={`mailto:${process.env.REACT_APP_SKYLER_EMAIL}`} rel="noreferrer" target="_blank"><FaEnvelope size={24} className='text-white hover:text-blue-500 duration-300' /></a> 
                    </li> 
                    {/* <li> 
                        <a aria-label="send a text" href={`https://wa.me/${process.env.REACT_APP_SKYLER_PHONE}`} rel="noreferrer" target="_blank"><FaWhatsapp size={24} className='text-white hover:text-blue-500 duration-300' /></a> 
                    </li>  */}
                </ul>

                {/* Contact Button */}
                <a href="#contact" className='bg-blue-700 px-4 py-2 mt-3 rounded hover:bg-blue-800 duration-300'>Contact Me</a>


                {/* Scroll For More */}
                <div className='absolute bottom-0 left-0 w-full'>
                    <h2 className='text-xl text-center'><a href="#about" className='hover:text-blue-400 duration-300'>Scroll For More</a></h2>

                    <div className="flex justify-center mt-2 mb-4">
                        <FaChevronDown size={24} className="animate-bounce" />
                    </div>
                </div>
            </div>
    </SectionWrapper>
  )
}

export default Landing
