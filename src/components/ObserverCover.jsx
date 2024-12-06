'use client'

import { useInView } from 'react-intersection-observer'
import { useSiteContext } from '@/context/SiteContext'

const ObserverCover = ({id}) => {
  const { handleInView } = useSiteContext()
  const { ref } = useInView({
      threshold: 0.6,
      onChange: handleInView
  })

  return (
    <div id={`${id}-cover`} ref={ref} className='absolute inset-0 w-full h-full pointer-events-none' />
  )
}

export default ObserverCover
