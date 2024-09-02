import React, { useEffect, useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { skills } from '../assets/skills'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'

const Skills = () => {
    const [currentSkill, setCurrentSkill] = useState('frontend')
    const skillList = Object.keys(skills)
    const skillListRef = useRef(null)
    const skillHeaderRef = useRef(null)

    useEffect(() => {
        if (!skillHeaderRef.current || !skillListRef.current) return
        
        setTimeout(() => {
            skillHeaderRef.current.classList.remove('opacity-0')
            skillHeaderRef.current.classList.add('opacity-100')
            skillListRef.current.classList.remove('opacity-0')
            skillListRef.current.classList.add('opacity-100')
        }, 200)
    }, [currentSkill])

    const handleSkillChange = (index) => {
        if (index === currentSkill) return

        skillHeaderRef.current.classList.remove('opacity-100')
        skillHeaderRef.current.classList.add('opacity-0')
        skillListRef.current.classList.remove('opacity-100')
        skillListRef.current.classList.add('opacity-0')
        setTimeout(() => setCurrentSkill(index), 200) // Change to useEffect later !!!
    }

    return (
        <SectionWrapper id='skillset' title='Skillset'>
            {/* <div className='flex flex-col flex-1 items-center px-4 py-8 justify-center gap-4 bg-gray-800 bg-opacity-30 relative'> flex-1 h-full  */}

                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 ref={skillHeaderRef} className='text-4xl capitalize font-bold duration-200'><span className='text-blue-500'>{currentSkill}</span> Skills</h2>
                    <h3 className='text-2xl text-gray-400'>Glance In the Toolbox</h3>
                </div>

                <div className="flex flex-col items-center gap-6 px-4 py-6 rounded-lg bg-gray-800 h-[655px] w-full max-w-[500px] md:max-w-[700px] shadow-lg border border-solid border-gray-700">
                    {/* Skill Selector */}
                    <div className="grid grid-cols-3 gap-5 w-full">
                        {skillList.map((skill, index) => (
                            <button key={index} aria-label={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Skills`} name={skill} title={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Skills`} onClick={() => handleSkillChange(skill)} className={`flex justify-center border border-solid ${currentSkill === skill ? 'bg-blue-800 border-blue-500' : 'hover:bg-gray-700 hover:text-white border-gray-700 text-gray-400'} px-4 py-3 duration-300 rounded items-center gap-2`}>
                                {skills[skill]?.image && React.createElement(skills[skill].image, { size: 24 })}
                                {/* <p className="hidden sm:inline-block">{skill}</p> */}
                            </button>
                        ))}
                    </div>

                    <hr className='w-full border-gray-700' />

                    {/* Skill Printing */}
                    <div ref={skillListRef} className="grid grid-cols-3 justify-between gap-5 w-full md:grid-cols-4 md:gap-8 duration-200 transition-opacity">
                        {skills[currentSkill]?.list?.map((skill, index) => (

                            <div key={index} className="flex flex-col items-center gap-2" title={skill.description}>
                                {skill.image && <skill.image size={32} />}
                                <p className='text-center'>{skill.name}</p>

                                {/* <img src={skill?.image} alt={skill.name} className="w-10 h-10" /> */}
                                {/* <p>{skill.description}</p> */}
                            </div>
                        ))}
                    </div>

                </div>
            {/* </div> */}
        </SectionWrapper>
    )
}

export default Skills
