import React from 'react'
import SidebarNav from './SidebarNav'

const Header = () => {
  return (
    <header className='w-full p-4 fixed z-30'> {/* bg-gray-800 bg-opacity-80 */}

        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-2xl'>Skyler<span className='text-blue-500'>.</span></h2>

            {/* CHANGE LATER */}
            <SidebarNav />
        </div>

    </header>
  )
}

export default Header
