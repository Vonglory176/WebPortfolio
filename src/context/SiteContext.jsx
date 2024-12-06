'use client'

import { createContext, useState, useContext, useEffect } from 'react'

// Create the context
const SiteContext = createContext()

// Create the provider component
const SiteProvider = ({ children }) => {
  const [modal, setModal] = useState(null)
  const [currentSection, setCurrentSection] = useState(null)
  const [windowWidth, setWindowWidth] = useState(0)
  // const sections = ['landing', 'about', 'projects', 'skills', 'references', 'contact']

  const showModal = (newModal) => setModal(newModal)
  const hideModal = () => setModal(null)

  const handleInView = (inView, entry) => {
    if (inView) {
      const formattedId = entry.target.id.replace(/-cover/g, '')
      setCurrentSection(formattedId)
    }
  }

  // Resize Listener
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setWindowWidth(window.innerWidth)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  // useEffect(() => {
  //   console.log(currentSection)
  // }, [currentSection])

  return (
    <SiteContext.Provider value={{ modal, showModal, hideModal, currentSection, handleInView, windowWidth }}>
      {children}
    </SiteContext.Provider>
  )
}

// Custom hook to use the ModalContext
const useSiteContext = () => useContext(SiteContext)

export { SiteProvider, useSiteContext }