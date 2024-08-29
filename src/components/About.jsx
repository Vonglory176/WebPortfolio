import React, { useEffect, useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { FaCheckCircle, FaCodeBranch } from 'react-icons/fa'
import bgColorImg from '../assets/images/bg-colors-1.png'
import ProgressiveImage from 'react-progressive-graceful-image'

const About = () => {
    const hobbyRef = useRef(null)
    const [currentHobby, setCurrentHobby] = useState(0)
    // const hobbies = ['Mountain Biker']
    const hobbies = ['Developer', 'Mountain Biker', 'Model Maker', 'Gamer Geek', 'Chess Player', 'Dad Humorist']

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHobby(prevHobby => {
                const hobbyIndex = hobbies.findIndex(hobby => hobby === hobbies[prevHobby])
                return (hobbyIndex + 1) % hobbies.length
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (hobbyRef.current) {
            hobbyRef.current.classList.remove('opacity-100')
            hobbyRef.current.classList.add('opacity-0')
            setTimeout(() => {
                hobbyRef.current.classList.remove('opacity-0')
                hobbyRef.current.classList.add('opacity-100')
            }, 100)
        }
    }, [currentHobby])

  return (
    <SectionWrapper id='about' title='About'>
        {/* <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center gap-4 bg-gray-800 bg-opacity-30 relative'> flex-1 h-full //  style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'}}  */}

            <div className="content-wrapper flex flex-col gap-4 max-w-[548px]"> {/* 619px */}
                
                <div className=''>
                    {/* <h3 className='text-2xl font-bold text-left m-auto max-w-[250px] md:max-w-[450px]'>Meet Skyler<span className='text-blue-400'>,</span> an avid <span ref={hobbyRef} className='text-blue-400 transition-opacity opacity-0' key={currentHobby}>{hobbies[currentHobby]}</span></h3> */}
                    
                    <h1 className='text-3xl font-bold text-center'>Meet Skyler<span className='text-blue-500'>.</span></h1>
                    <p ref={hobbyRef} className='text-xl font-semibold text-center w-full m-auto duration-300 transition-opacity opacity-0 text-blue-500' key={currentHobby}>{hobbies[currentHobby]}</p>
                </div>
                

                <div className="flex flex-col items-center gap-4 px-4 py-6 rounded-lg bg-gray-800 z-10 shadow-lg">
                    
                    {/* <p>Results-oriented and highly motivated <span className='text-blue-500'>full-stack developer</span> with <span className='text-blue-500'>3+ years</span> of experience.</p>
                    <p>Heavily focused on Web-Development with extensive experience working with the <span className='text-blue-500'>MERN tech stack</span>, this including strong familiarity of <span className='text-blue-500'>Responsive Design, Best Practices and W3C Standards</span> among others.</p>
                    <p>I am self-motivated, a fast learner and am always eager to tackle a challenge to expand my skillset!</p> */}

                    {/* <p>Results-oriented and highly motivated <span className='text-blue-500'>Full-Stack Developer</span> with <span className='text-blue-500'>+3 years</span> of experience.</p>
                    <p>Focused on Web Development with extensive experience in the <span className='text-blue-500'>MERN tech stack</span>, including <span className='text-blue-500'>Responsive Design</span>, <span className='text-blue-500'>Best Practices</span>, and <span className='text-blue-500'>W3C Standards</span>.</p>
                    <p><span className='text-blue-500'>Self-motivated</span>, <span className='text-blue-500'>fast learning</span> and always eager to tackle a challenge to expand my skillset!</p> */}
                    
                    {/* <h3 className='text-center text-2xl font-bold w-full'>Meet Skyler<span className='text-blue-400'>.</span></h3> */}
                    <p>Results-oriented and highly motivated <span className='text-blue-400'>Full-Stack Developer</span> with <span className='text-blue-400'>3+ years</span> of experience in <span className='text-blue-400'>Web Development</span>, specializing in the <span className='text-blue-400'>MERN tech stack</span>.</p>
                    <p>Proficient in <span className='text-blue-400'>Responsive Design</span>, <span className='text-blue-400'>Best Practices</span>, and <span className='text-blue-400'>W3C Standards</span>. <span className='text-blue-400'>Self-motivated</span>, <span className='text-blue-400'>fast learner</span>, and always eager to tackle new challenges to expand my skillset.</p>

                    <button className='bg-blue-700 px-4 py-2 mt-2 rounded hover:bg-blue-800 duration-300'>Download Resume</button>
                </div>

                <div className="flex justify-around w-full p-4 z-10 text-gray-400">

                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <FaCheckCircle size={24} />
                        <h3 className='text-lg font-bold'>8+</h3>
                        <p>Projects Done</p>
                    </div>

                    {/* <button className='bg-blue-700 px-4 py-2 mt-2 rounded hover:bg-blue-800 duration-300'>Download Resume</button> */}


                    {/* <div className="flex flex-col items-center gap-2 text-center">
                        <FaCheckCircle size={24} />
                        <h3 className='text-lg font-bold'>+2</h3>
                        <p>Happy Clients</p>
                    </div> */}

                    <div className="flex flex-col items-center gap-2 text-center">
                        <FaCodeBranch size={24} />
                        <h3 className='text-lg font-bold'>2000+</h3>
                        <p>Code Commits</p>
                    </div>
                </div>

            </div>

            {/* Background Image */}
            {/* <div className="background-image-container pointer-events-none">
                <ProgressiveImage src={bgColorImg} placeholder={''}>
                    {(src, loading) => (
                        <img
                            src={src}
                            alt={""}
                            className={`w-full h-full object-cover duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        />
                    )}
                </ProgressiveImage>
            </div> */}

        {/* </div> */}
    </SectionWrapper>
  )
}

export default About
