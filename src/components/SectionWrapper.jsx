import React from 'react'

const SectionWrapper = ({id, title, children}) => {
  return (
    <section id={id} className='flex flex-col min-h-screen w-full'>

        {/* Section Header */}
        {title && <div className='bg-gray-800 bg-opacity-80'>
            <h1 className='text-2xl font-bold text-center p-4 relative z-[11]'>{title}</h1>
        </div>}

        {/* Section Content */}
        {children}

    </section>
  )
}

export default SectionWrapper
