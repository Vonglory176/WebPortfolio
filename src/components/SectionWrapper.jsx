import React from 'react'
import { useSiteContext } from '../context/SiteContext'
import { useInView } from 'react-intersection-observer'
import ProgressiveImage from 'react-progressive-graceful-image'

// import bgPattern from '../assets/images/bg-site.png'
import landingBgColorImg from '../assets/images/bg-colors-5.png'
import projectsBgColorImg from '../assets/images/bg-colors-6.png'
import referencesBgColorImg from '../assets/images/bg-colors-3.png'

const SectionWrapper = ({id, title, children}) => {
  const { handleInView } = useSiteContext()
  const { ref } = useInView({
      threshold: 0.6,
      onChange: handleInView
  })

  const currentBackgroundImage = id === 'landing' ? landingBgColorImg : id === 'projects' ? projectsBgColorImg : id === 'references' ? referencesBgColorImg : null

  return (
    //  min-h-screen
    <section id={id} className='flex flex-col w-full relative' ref={ref}> {/*  style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'}} */}
    {/* <section id={id} className='flex flex-col min-h-screen w-full' ref={ref} style={{backgroundImage: `url(${bgPattern})`, backgroundOpacity: '0.5'}}> */}

        {/* Section Header */}
        {title && <div className='bg-gray-800 bg-opacity-80 sticky top-0 z-20 shadow-sm border-b border-solid border-gray-700'>
            <h2 className='text-2xl font-semibold text-center p-4 relative z-[11]'>{title}</h2>
        </div>}

        {/* Section Content */}
        <div className='section-content-wrapper flex flex-1 flex-col px-4 py-12 items-center justify-center gap-4 bg-gray-800 bg-opacity-30 relative z-10 border-b border-solid border-gray-700'>
          {children}
        </div>

        {/* -- BACKGROUND IMAGES -- */}

        {/* Landing */}
        <div className="background-image-container pointer-events-none">
            {currentBackgroundImage ? 
              <ProgressiveImage src={currentBackgroundImage} placeholder={''}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={""}
                        className={`w-full h-full object-cover duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
              </ProgressiveImage>

              :

              null
            }
        </div>

        {/* Projects */}
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

        {/* References */}
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

    </section>
  )
}

export default SectionWrapper
