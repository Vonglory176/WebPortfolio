import React from 'react'
import SectionWrapper from './SectionWrapper'
import { projects } from '../assets/projects'
import ProjectCard from './ProjectCard'
import ProgressiveImage from 'react-progressive-graceful-image'
import bgColorImg from '../assets/images/bg-colors-6.png'
// import { FaExternalLinkAlt, FaGithub, FaImages, FaInfo, FaTools } from 'react-icons/fa'

const Projects = () => {
  return (
    <SectionWrapper id='projects' title='Projects'>
        <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center relative'>

          <div className='flex flex-col gap-4 z-10'>
            {projects.map((project, index) => (

              <ProjectCard project={project} index={index} key={index} />

            ))}
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
            </div>

        </div>
    </SectionWrapper>
  )
}

export default Projects
