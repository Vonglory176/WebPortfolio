import React from 'react'
import { useSiteContext } from '../context/SiteContext'

const ProjectCardModal = () => {
    const { modal, closeModal } = useSiteContext()

    return (
        <div className='modal-container'>
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="modal-content">

                <div className="modal-header flex items-center justify-between">
                    <h2>{modal.name}</h2>
                    <button className="close-button" onClick={closeModal}>&times;</button>
                    {/* <p>{modal.description}</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardModal
