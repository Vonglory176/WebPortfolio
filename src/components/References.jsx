import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { references } from '../assets/references'
import { FaChevronDown } from 'react-icons/fa'
import ProgressiveImage from 'react-progressive-graceful-image'
import bgColorImg from '../assets/images/bg-colors-3.png'

const References = () => {
    const [currentReference, setCurrentReference] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleChangeReference = (index) => {
        // if (index === currentReference && isOpen && window.innerWidth < 768) setIsOpen(false)
        if (index === currentReference && isOpen) setIsOpen(false)
        else {
            setCurrentReference(index)
            setIsOpen(true)
        }
    }

    const checkRef = (index) => {
        return index === currentReference
    }

    // const referenceContainer = (
    //     <div className='flex flex-col gap-2'>

    //     </div>
    // )

    useEffect(() => {
        console.log(currentReference)
    }, [currentReference])

    return (
        <SectionWrapper id='references' title='References'>
            {/* <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center relative'> */}

                <div className="content-wrapper z-10 gap-8 max-w-[800px] w-full md:max-w-[1000px] md:grid md:grid-cols-[362px,1fr] md:h-[600px]">

                    <div className="flex flex-col gap-4 z-10">
                        {references.map((reference, index) => (

                            // Reference Header / Button
                            <figure className="flex flex-col gap-2" key={index}>
                                <figcaption 
                                className={`flex items-center gap-4 py-2 w-full rounded-lg ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} // bg-gray-800 rounded-lg hover:bg-gray-800
                                // onClick={() => setCurrentReference(index === currentReference ? null : index)}
                                >
                                    {windowWidth >= 375 && <a 
                                    href={reference.linkedIn}
                                    target='_blank'
                                    className='w-20 h-20 rounded-full bg-gray-800 overflow-hidden shadow-lg'> {/* border-[2px] border-white shadow-[0_0_7px_cyan] */}
                                        
                                        <ProgressiveImage src={reference.image} placeholder={''}>
                                            {(src, loading) => (
                                                <img
                                                    src={src}
                                                    alt={reference.name}
                                                    className={`w-full h-full object-cover duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                                />
                                            )}
                                        </ProgressiveImage>

                                        {/* <img 
                                        className='object-cover'
                                        src={reference.image} 
                                        alt={reference.name} 
                                        /> */}
                                    </a>}

                                    
                                    <button
                                    onClick={() => handleChangeReference(index)}
                                    className={`flex justify-center items-center flex-1 h-full p-4 rounded-lg h-[80px] shadow-lg duration-300 ${checkRef(index) && windowWidth >= 768 ? ' scale-105' : ''} ${checkRef(index) && (windowWidth < 768 ? isOpen : true) ? 'bg-blue-800' : 'bg-gray-800 hover:bg-gray-700'}`}>

                                        <div className='flex flex-col text-left'>
                                            <h3 className='text-xl font-bold truncate'>{reference.name}</h3>
                                            <span className={`text-sm ${checkRef(index) && (windowWidth < 768 ? isOpen : true) ? 'text-gray-300' : 'text-gray-400'}`}>{reference.description}</span>
                                        </div>

                                        <FaChevronDown className={`ml-auto md:hidden ${checkRef(index) && isOpen ? 'rotate-180' : ''}`} />

                                    </button>

                                </figcaption>

                                {/* SMALL VIEW - Reference Content */}
                                <div className={`duration-500 rounded-lg overflow-y-auto md:hidden ${checkRef(index) && isOpen ? 'max-h-[600px] shadow-lg' : 'max-h-0'}`}>                                
                                    <blockquote dangerouslySetInnerHTML={{ __html: reference.content }} className='flex flex-col h-full gap-4 bg-gray-800 px-4 py-6' />
                                </div>

                            </figure>
                        ))}
                    </div>

                    {/* LARGE VIEW - Reference Content */}
                    <div className={`duration-500 rounded-lg overflow-y-auto max-h-[600px] bg-gray-800 px-4 py-6 h-full shadow-lg gap-4 hidden md:block`}> 
                        <h3 className='text-2xl font-bold mb-4 text-blue-500'>{references[currentReference]?.name || references[0].name}</h3>
                        <blockquote dangerouslySetInnerHTML={{ __html: references[currentReference]?.content || references[0].content }} className='flex flex-col gap-4' />
                    </div>
                </div>


                {/* Background Image */}
                {/* <div className="background-image-container pointer-events-none">
                    <ProgressiveImage src={bgColorImg} placeholder={''}>
                        {(src, loading) => (
                            <img
                                src={src}
                                alt={""}
                                className={`w-full h-auto object-cover object-center duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                            />
                        )}
                    </ProgressiveImage>
                </div> */}

            {/* </div> */}
        </SectionWrapper>
    )
}

export default References
