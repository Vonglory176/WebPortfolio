import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaImages, FaInfo, FaTools } from 'react-icons/fa'
import TextCarosuel from './TextCarosuel'
import { useSiteContext } from '../context/SiteContext'
import ProgressiveImage from 'react-progressive-graceful-image'

const ProjectCard = ({project, index}) => {
    const { showModal } = useSiteContext()

    return (
        <div key={index} className='project-card bg-gray-800 rounded-lg overflow-hidden relative w-full h-full aspect-w-16 aspect-h-9 shadow-lg duration-300'> {/* w-[343px] h-[195px] // hover:scale-105 */}

            {/* <ProgressiveImage src={project.thumbnail.full} placeholder={project.thumbnail.small}> */}
            <ProgressiveImage src={project.images.full[0]} placeholder={project.thumbnail.small}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={project.name}
                        className={`w-full h-full object-cover duration-300 ${loading ? 'blur-sm' : 'blur-0'}`}
                        // style={{ objectFit: 'cover', imageRendering: 'crisp-edges' }}
                    />
                )}
            </ProgressiveImage>
            {/* <img src={project.thumbnail} alt={project.name} className='project-card-image w-full h-full object-cover' /> */}

            <div className='project-card-info absolute inset-0 bg-black bg-opacity-50 opacity-0 duration-300 flex items-center justify-center'>
                
                <div className="project-card-info-wrapper flex flex-col items-center justify-between text-center py-2 w-full h-full max-h-[257px]">

                    {/* Project Name and Description */}
                    <div className='flex flex-col items-center justify-center py-1 px-2 max-w-[339px] bg-blue-600 rounded-lg bg-opacity-80 mx-4'>
                        <h3 className='font-bold'>{project.name}</h3>
                        {/* <hr className='w-56 border-gray-300' /> */}
                        <p className='text-gray-200'>{project.description}</p>
                    </div>

                    {/* Skills (DISPLAY WINDOWS DETERMINED IN SCSS) */}
                    <TextCarosuel skills={project.skills} />

                    <div className='skills-static flex flex-wrap justify-center gap-2 max-w-[343px]'>
                        {project.skills.map((skill, index) => (
                            <span key={index} className='bg-gray-800 text-white px-2 rounded-full inline-block border border-gray-700'>{skill}</span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className='flex items-center justify-between gap-2 w-full px-4 max-w-[343px]'>

                        {/* View Project */}
                        <a href={project.link} target='_blank' aria-label="View Project" className='bg-blue-600 bg-opacity-80 text-white p-3 rounded-full hover:bg-blue-700 duration-300'><FaExternalLinkAlt size={20} /></a>
                        
                        {/* View Github */}
                        {project.github ? (
                            <a href={project.github} target='_blank' aria-label="View Github" className='bg-blue-600 bg-opacity-80 text-white p-3 rounded-full hover:bg-blue-700 duration-300'>
                                <FaGithub size={20} />
                            </a>
                        ) : (
                            <div className='bg-gray-600 text-white p-3 rounded-full'>
                                <FaGithub size={20} />
                            </div>
                        )}

                        {/* View Images */}
                        <button aria-label="View Images" onClick={() => showModal(project)} className='bg-blue-600 bg-opacity-80 text-white p-3 rounded-full flex items-center gap-2 hover:bg-blue-700 duration-300'>
                            <FaImages size={20} />
                            {/* <FaTools size={20} /> */}
                            {/* <FaInfo size={20} /> */}
                        </button>

                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default ProjectCard
