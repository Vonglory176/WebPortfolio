import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaImages, FaInfo, FaTools } from 'react-icons/fa'
import TextCarosuel from './TextCarosuel'
import { useSiteContext } from '../context/SiteContext'
import ProgressiveImage from 'react-progressive-graceful-image'

const ProjectCard = ({project, index}) => {
    const { showModal } = useSiteContext()

    return (
        <div key={index} className='project-card bg-gray-800 rounded-lg overflow-hidden relative w-[343px] h-[195px]'>

            <ProgressiveImage src={project.thumbnail} placeholder={project.thumbnail}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={project.name}
                        className={`w-full h-full object-cover duration-300 ${loading ? 'blur-sm' : 'blur-0'}`}
                    />
                )}
            </ProgressiveImage>
            {/* <img src={project.thumbnail} alt={project.name} className='project-card-image w-full h-full object-cover' /> */}

            <div className='project-card-info flex flex-col items-center justify-between text-center gap-2 p-4 absolute bottom-0 bg-black bg-opacity-40 w-full h-full'>
                
                {/* Project Name and Description */}
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h3 className='text-xl font-bold'>{project.name}</h3>
                    <p>{project.description}</p>
                </div>

                {/* Skills */}
                <TextCarosuel skills={project.skills} />

                {/* Buttons */}
                <div className='flex items-center justify-between gap-2 w-full'>
                    <a href={project.link} target='_blank' className='bg-blue-600 text-white p-3 rounded-full'><FaExternalLinkAlt size={20} /></a>
                    <a href={project.github} target='_blank' className='bg-blue-600 text-white p-3 rounded-full'><FaGithub size={20} /></a>
                    <button onClick={() => showModal(project)} className='bg-blue-600 text-white p-3 rounded-full flex items-center gap-2'>
                        <FaImages size={20} />
                        {/* <FaTools size={20} /> */}
                        {/* <FaInfo size={20} /> */}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
