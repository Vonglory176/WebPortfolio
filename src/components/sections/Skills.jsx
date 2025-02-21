'use client'

import React, { useEffect, useRef, useState } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import { skills } from '@/assets/data/skills'
import { Tooltip } from 'react-tooltip'
// import { FaCode, FaServer, FaTools } from 'react-icons/fa'

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

            {/* Add JSON-LD schema markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": skillList.flatMap((category, index) =>
                            skills[category].list.flatMap((skillCategory) =>
                                skillCategory.list.map((skill, skillIndex) => ({
                                    "@type": "ListItem",
                                    "position": index * 1000 + skillIndex + 1,
                                    "name": skill.fullName,
                                    "description": skill.description
                                }))
                            )
                        )
                    })
                }}
            />

            {/* Add SEO-friendly hidden content */}
            <div className="sr-only">
                {skillList.map(category => (
                    <div key={category}>
                        <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Skills</h3>
                        <ul>
                            {skills[category].list.flatMap(skillCategory =>
                                skillCategory.list.map(skill => (
                                    <li key={skill.shortName}>{skill.fullName} - {skill.description}</li>
                                ))
                            )}
                        </ul>
                    </div>
                ))}
            </div>


            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 ref={skillHeaderRef} className='text-4xl capitalize font-bold duration-200'><span className='text-blue-500'>{currentSkill}</span> Skills</h2>
                <h3 className='text-2xl text-gray-400'>A glimpse into my toolbox</h3>
            </div>

            {/*  Content */}
            <div className="flex flex-col items-center gap-6 px-4 py-6 pb-0 rounded-lg bg-gray-800 w-full max-w-[500px] sm:max-w-[700px] lg:max-w-[1096px] lg:min-h-[862px] shadow-lg border border-solid border-gray-700"> {/*  h-[655px] */}

                {/* Skill Selector */}
                <div className="grid grid-cols-3 gap-5 w-full">
                    {skillList.map((skill, skillIndex) => (
                        <button key={`${skillIndex}-${skill}`} aria-label={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Skills`} name={skill} title={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Skills`} onClick={() => handleSkillChange(skill)} className={`flex justify-center border border-solid ${currentSkill === skill ? 'bg-blue-800 border-blue-500' : 'hover:bg-gray-700 hover:text-white border-gray-700 text-gray-400'} px-4 py-3 duration-300 rounded items-center gap-2`}>
                            {skills[skill]?.image && React.createElement(skills[skill].image, { size: 24 })}
                        </button>
                    ))}
                </div>

                <hr className='w-full border-gray-700' />

                {/* Skill Printing */}
                <div ref={skillListRef} className="flex lg:grid lg:grid-cols-[1fr_1px_1fr] flex-wrap justify-between gap-x-6 w-full duration-200 transition-opacity">
                    {skills[currentSkill]?.list?.map((category, categoryIndex) => (
                        <React.Fragment key={`${categoryIndex}-${category.name}`}>

                            {/* Category */}
                            <div className='w-full border-b border-gray-700 pb-6 mb-6'>
                                <h4 className='text-lg sm:text-xl font-semibold line-clamp-1 min-w-max text-gray-500 pb-6 text-center sm:text-left'>{category.name}</h4>

                                <div className="grid grid-cols-4 justify-between gap-5 w-full sm:gap-8 lg:gap-x-4 duration-200 transition-opacity">

                                    {/* Skills */}
                                    {category.list.map((skill, skillIndex) => (
                                        <div
                                            key={`${skillIndex}-${skill.shortName}`}
                                            data-tooltip-id={`skill-anchor-${skill.shortName}`}
                                            className="flex flex-col items-center gap-2 cursor-help group hover:text-blue-400 transition-colors duration-200"
                                        >
                                            <skill.image
                                                size={42}
                                                className='text-gray-200 group-hover:text-blue-400 transition-colors duration-200'
                                            />
                                            <p className='text-center text-sm sm:text-base'>{skill.shortName}</p>

                                            <Tooltip
                                                id={`skill-anchor-${skill.shortName}`}
                                                place="top"
                                                // float={true}
                                                className="z-50 max-w-[95%] sm:max-w-sm !bg-gray-900 !border !border-gray-700 rounded-lg"
                                                classNameArrow="!bg-gray-900"
                                            // offset={5}
                                            >
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1 mb-1 text-blue-400 font-semibold w-max">
                                                        <p>{skill.fullName}</p>
                                                        <skill.image size={18} />
                                                    </div>
                                                    <p className="text-sm text-gray-300">{skill.description}</p>
                                                </div>
                                            </Tooltip>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Add divider after odd-numbered categories (except the last one) */}
                            {categoryIndex % 2 === 0 && categoryIndex < skills[currentSkill].list.length && (
                                <span className='w-[1px] border-r border-gray-700 pb-6 last-of-type:mb-6 hidden lg:block'></span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    )
}

export default Skills
