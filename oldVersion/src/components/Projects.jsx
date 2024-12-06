import React from 'react'
import SectionWrapper from './SectionWrapper'
import { projects } from '../assets/projects'
import ProjectCard from './ProjectCard'
// import ProgressiveImage from 'react-progressive-graceful-image'
// import bgColorImg from '../assets/images/bg-colors-6.png'
// import { FaExternalLinkAlt, FaGithub, FaImages, FaInfo, FaTools } from 'react-icons/fa'

const Projects = () => {
  return (
    <SectionWrapper id='projects' title='Projects'>
        {/* <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center relative'> */}

          <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-4xl font-bold'>Noteable <span className='text-blue-500'>Work</span></h2>
            <h3 className='text-2xl text-gray-400'>In order of recency</h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-10 p-1 w-full'>
            {projects.map((project, index) => (

              <ProjectCard project={project} index={index} key={index} />

            ))}
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

export default Projects
