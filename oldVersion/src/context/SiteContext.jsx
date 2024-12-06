import React, { createContext, useState, useContext, useEffect } from 'react'

// Create the context
const SiteContext = createContext()

// Create the provider component
const SiteProvider = ({ children }) => {
  const [modal, setModal] = useState(null)
  const [currentSection, setCurrentSection] = useState(null)
  // const sections = ['landing', 'about', 'projects', 'skills', 'references', 'contact']

  const showModal = (newModal) => setModal(newModal)
  const hideModal = () => setModal(null)

  const handleInView = (inView, entry) => {
    if (inView) {
      setCurrentSection(entry.target.id)
    }
  }

  useEffect(() => {
    console.log(currentSection)
  }, [currentSection])

  return (
    <SiteContext.Provider value={{ modal, showModal, hideModal, currentSection, handleInView }}>
      {children}
    </SiteContext.Provider>
  )
}

// Custom hook to use the ModalContext
const useSiteContext = () => useContext(SiteContext)

export { SiteProvider, useSiteContext }