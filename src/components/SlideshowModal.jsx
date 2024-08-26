import React, { useState } from 'react'
import { useSiteContext } from '../context/SiteContext'
import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import ProgressiveImage from 'react-progressive-graceful-image'
import loadingIcon from '../assets/icons/loading-icon.svg'

const SlideshowModal = () => {
    const { modal, hideModal } = useSiteContext()
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % modal.images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + modal.images.length) % modal.images.length)
    }

    return (
        <div className='modal-container fixed inset-0 bg-black bg-opacity-60 z-30'>

            {/* Overlay */}
            {/* <div className="modal-overlay "></div> */}

            {/* Content */}
            <div className="modal-content flex items-center justify-center w-full h-full">

                {/* Slideshow UI */}
                <div className="modal-ui flex flex-col justify-between flex-1 h-full fixed inset-0 px-4 py-4 z-10">

                    <div className="modal-ui-top flex items-center justify-between">
                        <h2 className='text-xl font-bold rounded-full bg-blue-600 bg-opacity-80 px-2 py-1'>
                            {modal.link ? <a href={modal.link} target='_blank'>{modal.name}</a> : modal.name}
                        </h2>
                        <button className="close-button p-3 rounded-full bg-blue-600 bg-opacity-80" onClick={hideModal}><FaX size={20} /></button>
                    </div>

                    <div className="modal-ui-middle flex items-center justify-between">
                        <button className="modal-ui-button p-3 rounded-full bg-blue-600 bg-opacity-80" onClick={handlePrev}>
                            <FaArrowLeft size={20} />
                        </button>
                        <button className="modal-ui-button p-3 rounded-full bg-blue-600 bg-opacity-80" onClick={handleNext}>
                            <FaArrowRight size={20} />
                        </button>
                    </div>

                    <div className="modal-ui-bottom flex items-center justify-center gap-2">
                        {modal.images.map((image, index) => (
                            <button key={index} className={`modal-ui-button p-3 rounded-full ${index === currentIndex ? 'bg-blue-600 bg-opacity-80' : 'bg-gray-600'}`} onClick={() => setCurrentIndex(index)}></button>
                        ))}
                    </div>
                </div>

                {/* Slideshow Images */}
                <div className="modal-image-container flex flex-1 items-center justify-center">
                    <ProgressiveImage src={modal.images[currentIndex]} placeholder={modal.images[currentIndex]}>
                        {(src, loading) => (
                            <img
                                src={src}
                                alt={modal.name}
                                className={`w-full h-full object-cover duration-300 ${loading ? 'blur-sm' : 'blur-0'}`}
                            />
                        )}
                    </ProgressiveImage>
                    {/* <img src={modal.images[currentIndex]} alt={modal.name} className="modal-image object-cover" /> */}
                </div>

            </div>
        </div>
    )
}

export default SlideshowModal