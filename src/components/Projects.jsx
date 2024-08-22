import React from 'react'
import SectionWrapper from './SectionWrapper'
import { projects } from '../assets/projects'
import ProjectCard from './ProjectCard'
// import { FaExternalLinkAlt, FaGithub, FaImages, FaInfo, FaTools } from 'react-icons/fa'

const Projects = () => {
  return (
    <SectionWrapper id='projects' title='Projects'>
        <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center'>

          <div className='flex flex-col gap-4'>
            {projects.map((project, index) => (

              <ProjectCard project={project} index={index} />

            ))}
          </div>

        </div>
    </SectionWrapper>
  )
}

export default Projects
