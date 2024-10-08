import React, { useCallback, useEffect, useState } from 'react'
import { useSiteContext } from '../context/SiteContext'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import ProgressiveImage from 'react-progressive-graceful-image'
// import loadingIcon from '../assets/icons/loading-icon.svg'

const SlideshowModal = () => {
    const { modal, hideModal } = useSiteContext()
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % modal.images.full.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + modal.images.full.length) % modal.images.full.length)
    }

    // Keyboard Navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowRight') {
            handleNext()
        } else if (e.key === 'ArrowLeft') {
            handlePrev()
        }
    }, [handleNext, handlePrev])

    // const handleKeyDown = (e) => {
    //     if (e.key === 'ArrowRight') {
    //         handleNext()
    //     } else if (e.key === 'ArrowLeft') {
    //         handlePrev()
    //     }
    // }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

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
                            {modal.link ? <a href={modal.link} rel="noreferrer" target='_blank'>{modal.name}</a> : modal.name}
                        </h2>
                        <button aria-label='Close Slideshow Modal' name='close-slideshow-modal' className="close-button p-3 rounded-full bg-blue-600 bg-opacity-80" onClick={hideModal}><FaX size={20} /></button>
                    </div>

                    <div className="modal-ui-middle flex items-center justify-between">
                        <button aria-label='Previous Slideshow Image' name='previous-slideshow-image' className="modal-ui-button p-3 rounded-full bg-blue-600 bg-opacity-80" onClick={handlePrev} aria-controls='slideshow-image-container'>
                            <FaArrowLeft size={20} />
                        </button>
                        <button aria-label='Next Slideshow Image' name='next-slideshow-image' className="modal-ui-button p-3 rounded-full bg-blue-600 bg-opacity-80" onClick={handleNext} aria-controls='slideshow-image-container'>
                            <FaArrowRight size={20} />
                        </button>
                    </div>

                    <div className="modal-ui-bottom flex items-center justify-center gap-2">
                        {modal.images.full.map((image, index) => (
                            <button key={index} aria-label={`Slideshow Image ${index + 1}`} name={`slideshow-image-${index + 1}`} className={`modal-ui-button p-3 rounded-full border border-solid bg-opacity-80 duration-300 ${index === currentIndex ? 'bg-blue-600 border-blue-500' : 'bg-gray-600 border-gray-700'}`} onClick={() => setCurrentIndex(index)} aria-controls='slideshow-image-container'></button>
                        ))}
                    </div>
                </div>

                {/* Slideshow Images */}
                <div id='slideshow-image-container' className="modal-image-container fixed inset-0 flex items-center justify-center">
                    <ProgressiveImage src={modal.images.full[currentIndex]} placeholder={modal.images.small[currentIndex]}>
                        {(src, loading) => (
                            <img
                                src={src}
                                alt={modal.name}
                                className={`object-contain min-h-[100svh] min-w-[100svw] max-h-[100svh] max-w-[1920px] ${loading ? 'blur-sm' : 'blur-0 transition-[filter] duration-300'}`}
                                // className={`w-full h-full object-cover duration-300 max-w-[1920px] max-h-[1080px] ${loading ? 'blur-sm' : 'blur-0'}`}
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