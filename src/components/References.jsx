import React, { useEffect, useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { references } from '../assets/references'
import { FaChevronDown } from 'react-icons/fa'
import ProgressiveImage from 'react-progressive-graceful-image'
// import bgColorImg from '../assets/images/bg-colors-3.png'

const References = () => {
    const [currentReference, setCurrentReference] = useState(2)
    const [isOpen, setIsOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const largeViewContentRef = useRef(null)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (largeViewContentRef.current) {
            setTimeout(() => {
                largeViewContentRef.current.classList.remove('opacity-0')
                largeViewContentRef.current.classList.add('opacity-100')
            }, 200)
        }
    }, [currentReference])

    const handleChangeReference = (index) => {
        if (index === currentReference && isOpen) setIsOpen(false)
        else {
            setIsOpen(true)

            if (windowWidth >= 1024) {
                console.log('large view')
                largeViewContentRef.current.classList.remove('opacity-100')
                largeViewContentRef.current.classList.add('opacity-0')
                setTimeout(() => setCurrentReference(index), 200) // Change to useEffect later !
            }
            else setCurrentReference(index)
        }
    }

    const checkRef = (index) => {
        return index === currentReference
    }

    return (
        <SectionWrapper id='references' title='References'>
            {/* <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center relative'> */}

                <h2 className='text-4xl font-bold text-center mb-6'>Kind Words from <span className='text-blue-500'>Cool People</span></h2>

                <div className="content-wrapper z-10 gap-8 max-w-[800px] w-full lg:max-w-[1000px] lg:grid lg:grid-cols-[364px,1fr] lg:h-[778px]">

                    <div className="flex flex-col gap-6 z-10">
                        {references.map((reference, index) => (

                            // Reference Header / Button
                            <figure className="flex flex-col" key={index}>
                                <figcaption 
                                className={`flex items-center gap-4 w-full rounded-lg ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} // bg-gray-800 rounded-lg hover:bg-gray-800
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
                                    className={`flex justify-center items-center flex-1 h-full p-4 rounded-lg h-[80px] shadow-lg duration-300 border-solid border ${checkRef(index) && windowWidth >= 1024 ? ' scale-105' : ''} ${checkRef(index) && (windowWidth < 1024 ? isOpen : true) ? 'bg-blue-800 border-blue-500' : 'bg-gray-800 bg-opacity-50 border-gray-700 hover:bg-gray-700'}`}>

                                        <div className='flex flex-col text-left'>
                                            <h3 className='text-xl font-bold truncate'>{reference.name}</h3>
                                            <span className={`text-sm duration-300 ${checkRef(index) && (windowWidth < 1024 ? isOpen : true) ? 'text-gray-300' : 'text-gray-400'}`}>{reference.description}</span>
                                        </div>

                                        <FaChevronDown className={`ml-auto lg:hidden ${checkRef(index) && isOpen ? 'rotate-180' : ''}`} />

                                    </button>

                                </figcaption>

                                {/* SMALL VIEW - Reference Content */}
                                <div className={`wrapper border-solid border-gray-700 rounded-lg overflow-hidden bg-gray-800 lg:hidden rounded-lg mt-4 duration-500 ${checkRef(index) && isOpen ? 'shadow-lg border max-h-[600px]' : 'max-h-0'}`}>
                                    <div className={`custom-scrollbar overflow-y-scroll duration-500 bg-gray-800 px-3 py-6 p-1 ${checkRef(index) && isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>                                
                                        <h3 className='mb-4'><span className='text-blue-500 font-bold text-2xl '>{reference.name.split(' ')[0]}</span><span className='text-gray-400 text-xl'> said...</span></h3>
                                        <blockquote dangerouslySetInnerHTML={{ __html: reference.content }} className='flex flex-col h-full gap-4' />
                                    </div>
                                </div>

                            </figure>
                        ))}
                    </div>

                    {/* LARGE VIEW - Reference Content */}
                    <div className='hidden lg:flex flex-col gap-4 duration-200' ref={largeViewContentRef}>

                        {/* Reference Header */}
                        <div className="flex justify-between items-end">
                            <h2 className='text-2xl'><span className='text-blue-500 font-bold'>{references[currentReference]?.name.split(' ')[0] || references[0].name.split(' ')[0]}</span> <span className='text-xl text-gray-200'>said...</span></h2>
                            <p className='text-gray-400'>{references[currentReference].description}</p>
                        </div>

                        {/* Reference Content */}
                        <div className="wrapper pr-1 border border-solid border-gray-700 rounded-lg max-h-[722px] bg-gray-800 shadow-lg">
                            <div className={`duration-500 overflow-y-auto px-4 py-6 h-full gap-4 custom-scrollbar`}> 
                                <blockquote dangerouslySetInnerHTML={{ __html: references[currentReference]?.content || references[0].content }} className='flex flex-col gap-4' />
                            </div>
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
