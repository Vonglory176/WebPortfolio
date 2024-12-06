import React from 'react'
import { useSiteContext } from '../context/SiteContext'
import { useInView } from 'react-intersection-observer'
import ProgressiveImage from 'react-progressive-graceful-image'

// import bgPattern from '../assets/images/bg-site.png'
import bgColors1 from '../assets/images/backgrounds/bg-colors-1.png'
// import bgColors2 from '../assets/images/backgrounds/bg-colors-2.png'
import bgColors3 from '../assets/images/backgrounds/bg-colors-3.png'
// import bgColors4 from '../assets/images/backgrounds/bg-colors-4.png'
import bgColors5 from '../assets/images/backgrounds/bg-colors-5.png'
import bgColors6 from '../assets/images/backgrounds/bg-colors-6.png'

const SectionWrapper = ({id, title, children}) => {
  const { handleInView } = useSiteContext()
  const { ref } = useInView({
      threshold: 0.6,
      onChange: handleInView
  })

  const backgroundImages = {
    landing: bgColors5,
    about: bgColors1,
    // projects: bgColors2,
    skillset: bgColors6,
    references: bgColors3,
    // contact: bgColors1,
  }

  const currentBackgroundImage = backgroundImages[id]

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

        <div className={`background-image-container pointer-events-none ${id}`}>
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

    </section>
  )
}

export default SectionWrapper
