import React, { useRef, useState } from 'react'
import { useSiteContext } from '../context/SiteContext'

const SidebarNav = () => {
    const { currentSection } = useSiteContext()
    const [isOpen, setIsOpen] = useState(false)
    const sidebarNavContentRef = useRef(null)

    const sectionLinks = [
        { id: 'landing', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'projects', name: 'Projects' },
        { id: 'skillset', name: 'Skillset' },
        { id: 'references', name: 'References' },
        { id: 'contact', name: 'Contact' }
    ]

    const toggleDropdown = () => {
        if (isOpen) {
        setIsOpen(false)
        }
        else {
        const dropdownContent = sidebarNavContentRef.current
        if (dropdownContent && !dropdownContent.contains(document.activeElement)) {
            setIsOpen(true)
            dropdownContent.focus()
        }
      }
    }

    const handleBlur = (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsOpen(false)
        console.log('blur')
      }
    }

    // const handleLinkClick = (e) => {
      // setIsOpen(false)
      // sidebarNavContentRef.current.focus()
    // }

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen) // Simplified toggle logic
    // }

    return (
    <div 
    className={`sidebarnav ${isOpen? 'open' : ''}`} 
    onBlur={handleBlur}
    tabIndex={0}
    >
    <div className='sidebarnav-container pointer-events-auto'>

      {/* Open/Close Button */}
      <button aria-label='Toggle Sidebar Navigation' name='sidebar-nav-toggle' className={`sidebarnav-button flex justify-center items-center w-8 h-8 z-10 relative ${isOpen ? 'toggled' : ''}`} onClick={toggleDropdown}>

        <div className={`hamburger-icon duration-300 ${isOpen ? 'change' : ''}`}>
          <div className='hamburger-icon-bar1'></div>
          <div className='hamburger-icon-bar2'></div>
          <div className='hamburger-icon-bar3'></div>
        </div>

      </button>

      {/* Dropdown Navigation Menu */}
      <aside className={`sidebarnav-content rounded-tl-lg rounded-bl-lg pt-12 duration-300`} ref={sidebarNavContentRef} >      

        <nav className='sidebarnav-content-container w-full h-full p-4'>
          

          {/* Post Related */}
          <ul className='sidebarnav-navlink-list flex flex-col gap-4 font-semibold text-center' aria-label='Main links'>

            {sectionLinks.map((link) => (
              // <li key={link.id} className={`m-auto duration-100 border-blue-500 ${currentSection === link.id ? 'border-b-2' : ''}`}>
              <li key={link.id} className={`${currentSection === link.id ? 'isActive' : ''}`}>
                <a href={`#${link.id}`} className={"m-auto duration-300 text-xl hover:text-blue-400 py-1 " + (currentSection === link.id ? 'text-blue-400' : 'text-white')}>{link.name}</a>
              </li>
            ))}

            {/* <li>
              <a href="#landing" className={"duration-300 " + (currentSection === 'landing' ? 'text-blue-500' : 'text-white')}>Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#references">References</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li> */}

          </ul>

        </nav>
      </aside>

      {/* Overlay */}
      <div className='sidebarnav-overlay' onClick={toggleDropdown}></div>

    </div>
  </div>
)
}

export default SidebarNav
