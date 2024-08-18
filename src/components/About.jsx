import React from 'react'
import SectionWrapper from './SectionWrapper'

const About = () => {
  return (
    <SectionWrapper id='about' title='About'>
        <div className='flex flex-col items-center justify-center gap-4'> {/* flex-1 h-full  */}

            <div className="flex flex-col items-center gap-4 p-4 m-4 rounded-lg bg-gray-800">
                <p>Results-oriented and highly motivated full-stack developer with 3+ years of experience. Heavily focused on Web-Development with extensive experience using MERN, this including strong familiarity of Responsive Design, Best Practices and W3C Standards among others. I am self-motivated, a fast learner and am always eager to tackle a challenge to expand my skillset!</p>

                <button className='bg-blue-700 px-4 py-2 rounded hover:bg-blue-800'>Download Resume</button>
            </div>

            <div className="flex justify-between w-full p-4">
                <h1>Projects Done</h1>
                <h1>GitHub Commits</h1>
            </div>
        </div>
    </SectionWrapper>
  )
}

export default About
