import React, { useRef, useState } from 'react'
import { useSiteContext } from '../context/SiteContext'

const SidebarNav = () => {
    const { currentSection } = useSiteContext()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownNavContentRef = useRef(null)

    const sectionLinks = [
        { id: 'landing', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'projects', name: 'Projects' },
        { id: 'skills', name: 'Skills' },
        { id: 'references', name: 'References' },
        { id: 'contact', name: 'Contact' }
    ]

    const toggleDropdown = () => {
        if (isOpen) {
        setIsOpen(false)
        }
        else {
        const dropdownContent = dropdownNavContentRef.current
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

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen) // Simplified toggle logic
    // }

    return (
    <div 
    className={`dropdownnav ${isOpen? 'open' : ''}`} 
    onBlur={handleBlur}
    tabIndex={0}
    >
    <div className='dropdownnav-container relative'>

      {/* Open/Close Button */}
      <button aria-label='Toggle Dropdown Navigation' name='dropdown-nav-toggle' className={`dropdownnav-button flex justify-center items-center w-8 h-8 z-10 relative ${isOpen ? 'toggled' : ''}`} onClick={toggleDropdown}>

        <div className={`hamburger-icon duration-300 ${isOpen ? 'change' : ''}`}>
          <div className='hamburger-icon-bar1'></div>
          <div className='hamburger-icon-bar2'></div>
          <div className='hamburger-icon-bar3'></div>
        </div>

      </button>

      {/* Dropdown Navigation Menu */}
      <aside className={`dropdownnav-content rounded-tl-lg rounded-bl-lg pt-12 duration-300`} ref={dropdownNavContentRef} >      

        <nav className='dropdownnav-content-container w-full h-full p-4'>
          

          {/* Post Related */}
          <ul className='dropdownnav-navlink-list flex flex-col gap-4 font-bold text-center' aria-label='Main links'>

            {sectionLinks.map((link) => (
              <li key={link.id} className={`m-auto ${currentSection === link.id ? ' border-b-2 border-blue-500' : ''}`}>
                <a href={`#${link.id}`} className={"duration-300 text-300 hover:text-blue-500 " + (currentSection === link.id ? 'text-blue-500' : 'text-white')}>{link.name}</a>
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
    </div>
  </div>
)
}

export default SidebarNav
