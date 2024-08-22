import React from 'react'

const Header = () => {
  return (
    <header className='w-full p-4 fixed z-20'> {/* bg-gray-800 bg-opacity-80 */}

        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-2xl'>Skyler<span className='text-blue-500'>.</span></h2>

            {/* CHANGE LATER */}
            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
        </div>

    </header>
  )
}

export default Header
