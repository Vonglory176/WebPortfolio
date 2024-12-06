import React from 'react'
import SidebarNav from './SidebarNav'

const Header = () => {
  return (
    <header className='w-full p-4 fixed z-30 pointer-events-none'> {/* bg-gray-800 bg-opacity-80 */}

        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-2xl pointer-events-auto'><a href="#landing">Skyler<span className='text-blue-500'>.</span></a></h2>

            {/* CHANGE LATER */}
            <SidebarNav />
        </div>

    </header>
  )
}

export default Header
