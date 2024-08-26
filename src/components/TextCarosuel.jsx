import React from 'react'

const TextCarosuel = ({skills}) => {

    const skillsHtml = skills.map((skill, index) => (
        <span key={index} className='bg-gray-800 text-white px-2 mx-2 rounded-full inline-block'>{skill}</span>
    ))

    return (
        <div className='carousel w-full overflow-hidden whitespace-nowrap box-sizing-border mt-[-5px]'> {/* absolute top-1/2 -translate-y-1/2  */}

            {/* Using double for a constant loop */}
            <div className='carousel-content'>
                {skillsHtml}
            </div>
            <div className='carousel-content'>
                {skillsHtml}
            </div>

            {/* <div className='carousel-content'>
                {skillsHtml}
                {skillsHtml}
            </div> */}
        </div>
    )
}

export default TextCarosuel
