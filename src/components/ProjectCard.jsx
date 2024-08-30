import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaImages, FaInfo, FaTools } from 'react-icons/fa'
import TextCarosuel from './TextCarosuel'
import { useSiteContext } from '../context/SiteContext'
import ProgressiveImage from 'react-progressive-graceful-image'

const ProjectCard = ({project, index}) => {
    const { showModal } = useSiteContext()

    return (
        <div key={index} className='project-card bg-gray-800 rounded-lg overflow-hidden relative w-full h-full max-w-[384px] max-h-[216px] shadow-lg hover:scale-105 duration-300'> {/* w-[343px] h-[195px] // hover:scale-105 */}

            <ProgressiveImage src={project.thumbnail.full} placeholder={project.thumbnail.small}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={project.name}
                        className={`w-full h-full object-cover duration-300 ${loading ? 'blur-sm' : 'blur-0'}`}
                    />
                )}
            </ProgressiveImage>
            {/* <img src={project.thumbnail} alt={project.name} className='project-card-image w-full h-full object-cover' /> */}

            <div className='project-card-info flex flex-col items-center justify-between text-center gap-2 py-4 absolute bottom-0 bg-black bg-opacity-50 w-full h-full' style={{ transform: 'scale(1.05)', backfaceVisibility: 'hidden' }}>
                
                {/* Project Name and Description */}
                <div className='flex flex-col items-center justify-center gap-2 px-4'>
                    <h3 className='text-xl font-bold text-blue-400'>{project.name}</h3>
                    <p>{project.description}</p>
                </div>

                {/* Skills */}
                <TextCarosuel skills={project.skills} />

                {/* Buttons */}
                <div className='flex items-center justify-between gap-2 w-full px-4'>
                    <a href={project.link} target='_blank' className='bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 duration-300'><FaExternalLinkAlt size={20} /></a>
                    {project.github ? (
                        <a href={project.github} target='_blank' className='bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 duration-300'>
                            <FaGithub size={20} />
                        </a>
                    ) : (
                        <div className='bg-gray-600 text-white p-3 rounded-full'>
                            <FaGithub size={20} />
                        </div>
                    )}
                    <button onClick={() => showModal(project)} className='bg-blue-600 text-white p-3 rounded-full flex items-center gap-2 hover:bg-blue-700 duration-300'>
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
