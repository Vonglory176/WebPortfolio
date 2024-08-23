import React from 'react'
import SectionWrapper from './SectionWrapper'
import skylerPicture from '../assets/images/people/skylerPicture.webp'
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope, FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import bgColorImg from '../assets/images/bg-colors-5.png'
import ProgressiveImage from 'react-progressive-graceful-image'

const Landing = () => {
  return (
    <SectionWrapper id='landing'>
        <div className='flex flex-col items-center justify-center px-4 py-8 flex-1 h-full gap-4 relative'>            

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
                {/* <img src={skylerPicture} alt="Skyler" className='w-full h-full object-cover' /> */}
            </div>

            {/* Name and Title */}
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Skyler <span className='text-blue-500'>Conley</span></h1>
                <h2 className='text-lg'> <span className='text-blue-500'>Full Stack</span> Web Developer</h2>
            </div>

            {/* Socials */}
            <ul className="social-icons flex gap-4"> 
                <li> 
                    <a aria-label="github" href="https://github.com/vonglory176" rel="noreferrer" target="_blank"><FaGithub size={24} className='text-white hover:text-blue-400' /></a> 
                </li> 
                <li> 
                    <a aria-label="FaGitlab" href="https://gitlab.com/vonglory176" rel="noreferrer" target="_blank"><FaGitlab size={24} className='text-white hover:text-blue-400' /></a> 
                </li>                
                <li> 
                    <a aria-label="linkedin" href="https://www.linkedin.com/in/skyler-g-conley-1b6a33133/" rel="noreferrer" target="_blank"><FaLinkedin size={24} className='text-white hover:text-blue-400' /></a> 
                </li> 
                <li> 
                    <a aria-label="send mail" href="mailto:skylergconley@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope size={24} className='text-white hover:text-blue-400' /></a> 
                </li> 
                {/* <li> 
                    <a aria-label="whatsapp" href="" rel="noreferrer" target="_blank"><FaWhatsapp /></a> 
                </li>  */}
            </ul>

            {/* Contact Button */}
            <button href="#contact" className='bg-blue-700 px-4 py-2 mt-3 rounded hover:bg-blue-800'>Contact Me</button>


            {/* Scroll For More */}
            <div className='absolute bottom-0 left-0 w-full'>
                <h2 className='text-xl text-center'><a href="#about">Scroll For More</a></h2>

                <div className="flex justify-center mt-2 mb-4">
                    <FaChevronDown size={24} className="animate-bounce" />
                    {/* <FaDoubleChevronDown size={24} className="text-blue-500 animate-bounce" /> */}
                </div>
            </div>

            {/* Background Image */}
            <div className="background-image-container pointer-events-none">
                <ProgressiveImage src={bgColorImg} placeholder={''}>
                    {(src, loading) => (
                        <img
                            src={src}
                            alt={""}
                            className={`w-full h-full object-cover duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        />
                    )}
                </ProgressiveImage>
                {/* <img src={bgColorImg} alt=""/> */}
            </div>
            
            {/* <div className="absolute top-0 inset-x-0 h-[37.5rem] bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-100/[0.03] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-18 z-100"></div> */}
        </div>
    </SectionWrapper>
  )
}

export default Landing
