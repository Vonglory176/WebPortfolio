'use client'

import { FaImages } from 'react-icons/fa'
import { useSiteContext } from '../context/SiteContext'

export default function ViewImages({project}) {
    const { showModal } = useSiteContext()
    return (
        <button aria-label="View Images" onClick={() => showModal(project)} className='bg-blue-600 bg-opacity-80 text-white p-3 rounded-full flex items-center gap-2 hover:bg-blue-700 duration-300'>
            <FaImages size={20} />
            {/* <FaTools size={20} /> */}
            {/* <FaInfo size={20} /> */}
        </button>
    )
}