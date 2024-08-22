import React, { createContext, useState, useContext } from 'react'

// Create the context
const SiteContext = createContext()

// Create the provider component
const SiteProvider = ({ children }) => {
  const [modal, setModal] = useState(null)

  const showModal = (newModal) => setModal(newModal)
  const hideModal = () => setModal(null)

  return (
    <SiteContext.Provider value={{ modal, showModal, hideModal }}>
      {children}
    </SiteContext.Provider>
  )
}

// Custom hook to use the ModalContext
const useSiteContext = () => useContext(SiteContext)

export { SiteProvider, useSiteContext }