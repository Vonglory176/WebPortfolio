import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { skills } from '../assets/skills'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'

const Skills = () => {
    const [currentSkill, setCurrentSkill] = useState('frontend')

    const handleSkillChange = (skill) => {
        setCurrentSkill(skill)
    }

    // CHANGE UNSKILLS TO BE HIDDEN, NOT UNMOUNTED

    return (
        <SectionWrapper id='skills' title='Skills'>
            {/* <div className='flex flex-col flex-1 items-center px-4 py-8 justify-center gap-4 bg-gray-800 bg-opacity-30 relative'> flex-1 h-full  */}

                <div className="flex flex-col items-center gap-6 px-4 py-6 rounded-lg bg-gray-800 h-[646px] w-full max-w-[500px] md:max-w-[700px] shadow-lg">

                    {/* Skill Selector */}
                    <div className="grid grid-cols-3 gap-5 justify-around w-full">
                        <button name='frontend' title='Frontend Skills' onClick={() => handleSkillChange('frontend')} className={`flex justify-center ${currentSkill === 'frontend' ? 'bg-blue-900' : 'bg-blue-700'} p-2 duration-300 rounded hover:bg-blue-800 items-center gap-2`}>
                            <FaCode size={24} /> 
                            <p className="hidden sm:inline-block">Frontend</p>
                        </button>
                        <button name='backend' title='Backend Skills' onClick={() => handleSkillChange('backend')} className={`flex justify-center ${currentSkill === 'backend' ? 'bg-blue-900' : 'bg-blue-700'} p-2 duration-300 rounded hover:bg-blue-800 items-center gap-2`}>
                            <FaServer size={24} /> 
                            <p className="hidden sm:inline-block">Backend</p>
                        </button>
                        {/* <button name='design' onClick={handleSkillChange} className='bg-blue-700 p-2 duration-300 rounded hover:bg-blue-800 flex items-center gap-2'>
                            <FaPaintBrush /> Design
                        </button> */}
                        <button name='other' title='Other Skills' onClick={() => handleSkillChange('other')} className={`flex justify-center ${currentSkill === 'other' ? 'bg-blue-900' : 'bg-blue-700'} p-2 duration-300 rounded hover:bg-blue-800 flex items-center gap-2`}>
                            <FaTools size={24} /> 
                            <p className="hidden sm:inline-block">Other</p>
                        </button>
                    </div>

                    <hr className='w-full border-gray-700' />

                    {/* Skill Printing */}
                    <div className="grid grid-cols-3 justify-between gap-5 w-full md:grid-cols-4 md:gap-8">
                        {skills[currentSkill]?.map((skill, index) => (

                            <div key={index} className="flex flex-col items-center gap-2" title={skill.description}>
                                {skill.image && <skill.image size={32} />}
                                <h3 className='text-center'>{skill.name}</h3>

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
