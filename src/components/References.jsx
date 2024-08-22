import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { references } from '../assets/references'
import { FaChevronDown } from 'react-icons/fa'

const References = () => {
    const [currentReference, setCurrentReference] = useState(null)

    const handleChangeReference = (index) => {
        setCurrentReference(index)
    }

    const checkRef = (index) => {
        return index === currentReference
    }

    const referenceContainer = (
        <div className='flex flex-col gap-2'>

        </div>
    )

    return (
        <SectionWrapper id='references' title='References'>
            <div className='flex flex-1 flex-col px-4 py-8 items-center justify-center'>

                <div className="flex flex-col gap-4">
                    {references.map((reference, index) => (

                        // Reference Header / Button
                        <figure className="flex flex-col gap-2" key={index}>
                            <figcaption 
                            className={`flex items-center gap-4 py-2 w-full rounded-lg ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} // bg-gray-800 rounded-lg hover:bg-gray-800
                            // onClick={() => setCurrentReference(index === currentReference ? null : index)}
                            >
                                <a 
                                href={reference.linkedIn}
                                target='_blank'
                                className='w-20 h-20 rounded-full bg-gray-800 overflow-hidden'> {/* border-[2px] border-white shadow-[0_0_7px_cyan] */}
                                    <img 
                                    className='object-cover'
                                    src={reference.image} 
                                    alt={reference.name} 
                                    />
                                </a>


                                <button 
                                onClick={() => setCurrentReference(checkRef(index) ? null : index)}
                                className={`flex justify-center items-center flex-1 h-full p-4 rounded-lg h-[80px] ${checkRef(index) ? 'bg-blue-900 duration-200' : 'bg-gray-800'}`}>

                                    <div className='flex flex-col text-left'>
                                        {/* <a href={reference.linkedIn} target='_blank' className='text-2xl font-bold'>{reference.name}</a> */}
                                        <h3 className='text-xl font-bold truncate'>{reference.name}</h3>
                                        <span className={`text-sm text-gray-300`}>{reference.description}</span>
                                    </div>

                                    <FaChevronDown className={`ml-auto ${checkRef(index) ? 'rotate-180' : ''}`} />

                                </button>

                            </figcaption>

                            {/* Reference Content */}
                            <div className={`duration-500 rounded-lg overflow-y-auto ${checkRef(index) ? 'max-h-[600px] ' : 'max-h-0'}`}>                                
                                <blockquote dangerouslySetInnerHTML={{ __html: reference.content }} className='flex flex-col gap-2 bg-gray-800 p-4 ' />
                            </div>

                        </figure>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    )
}

export default References
