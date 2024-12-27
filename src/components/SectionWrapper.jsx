'use client'

// import { useSiteContext } from '@/context/SiteContext'
import ClientImage from '@/components/ClientImage'
import ObserverCover from '@/components/ObserverCover'

import bgColors1 from '@/assets/images/backgrounds/bg-colors-1.png'
import bgColors3 from '@/assets/images/backgrounds/bg-colors-3.png'
import bgColors5 from '@/assets/images/backgrounds/bg-colors-5.png'
import bgColors6 from '@/assets/images/backgrounds/bg-colors-6.png'

// import bgPattern from '../assets/images/bg-site.png'
// import bgColors2 from '@/assets/images/backgrounds/bg-colors-2.png'
// import bgColors4 from '@/assets/images/backgrounds/bg-colors-4.png'

const SectionWrapper = ({id, title, children}) => {
  // const { handleInView } = useSiteContext()
  // const { ref } = useInView({
  //     threshold: 0.6,
  //     onChange: handleInView
  // })

  const backgroundImages = {
    landing: bgColors5,
    // about: bgColors4, // bgColors1,
    // projects: bgColors2,
    skillset: bgColors6,
    experience: bgColors1, // bgColors4,
    references: bgColors3,
    // contact: bgColors1,
  }

  const currentBackgroundImage = backgroundImages[id]

  const ref = null // "CHANGE THIS"

  return (
    //  min-h-screen
    <section id={id} className='flex flex-col w-full relative' ref={ref}> {/*  style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'}} */}
    {/* <section id={id} className='flex flex-col min-h-screen w-full' ref={ref} style={{backgroundImage: `url(${bgPattern})`, backgroundOpacity: '0.5'}}> */}

        <ObserverCover id={id} />

        {/* Section Header */}
        {title && <div className='bg-gray-800 bg-opacity-80 sticky top-0 z-20 shadow-sm border-b border-solid border-gray-700'>
            <h2 className='text-2xl font-semibold text-center p-4 relative z-[11]'>{title}</h2>
        </div>}

        {/* Section Content */}
        <div className='section-content-wrapper flex flex-1 flex-col px-4 py-12 items-center justify-center gap-4 relative z-10 border-b border-solid border-gray-700'> {/*  bg-gray-800 bg-opacity-30 */}
          {children}
        </div>

        {/* -- BACKGROUND IMAGES -- */}

        <div className={`background-image-container pointer-events-none ${id}`}>
            {currentBackgroundImage ?

              <ClientImage
                src={currentBackgroundImage}
                alt={""}
                className='w-full h-full object-cover'
              />

              :

              null
            }
        </div>

    </section>
  )
}

export default SectionWrapper
