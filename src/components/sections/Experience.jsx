import SectionWrapper from '@/components/SectionWrapper'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { workExperience, educationalExperience } from '@/assets/data/experience'
import Image from 'next/image'
import phiThetaKappa from '@/assets/images/PhiThetaKappa.png'

const Experience = () => {
    return (
        <SectionWrapper id='experience' title='Experience'>

            <div className="content-wrapper flex flex-col gap-4"> {/* 619px */}

                <div className='flex flex-col items-center justify-center text-center gap-2'>

                    <h2 className='text-4xl font-bold'>My <span className='text-blue-500'>Work</span> History</h2>
                    <h3 className='text-2xl text-gray-400 hidden sm:block'>Follow what I&apos;ve gotten up to over the years</h3>


                </div>

                <div className='grid lg:grid-cols-2 gap-4 max-w-[1096px] w-full relative'>
                    {[
                        { id: 'Work', data: workExperience, icon: FaBriefcase },
                        { id: 'Education', data: educationalExperience, icon: FaGraduationCap }
                    ].map(({ id, data, icon: Icon }) => (

                        <div key={id} className="max-w-[548px] w-full h-fit flex flex-col gap-4 px-4 py-6 rounded-lg bg-gray-800 z-10 shadow-lg border border-solid border-gray-700">

                            {data.map((experience, index) => (
                                <div key={index} className={`flex gap-4 ${index === 0 ? '' : 'pt-4'}`}>

                                    {/* Left Side */}
                                    <div className='relative'>
                                        <div className='pb-4 bg-gray-800 z-10 relative'>
                                            <Icon className='text-blue-400' size={24} />
                                        </div>
                                        <div className={`absolute ${index === data.length - 1 ? 'top-0' : 'top-4'} bottom-0 left-[50%] translate-x-[-50%] h-full w-[3px] bg-blue-400 z-[1]`} />
                                    </div>

                                    {/* Right Side */}
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col'>
                                            <span className='text-gray-400'>{experience.date}</span>
                                            <h3 className='text-xl font-bold line-clamp-2'>{experience.position || experience.award}</h3>
                                            <p className='text-sm text-blue-400 text-wrap'>
                                                <a href={experience.link} target='_blank' rel='noreferrer' className='text-blue-400 font-semibold underline'>{experience.company}</a>
                                            </p>
                                        </div>

                                        <ul className='flex flex-col gap-2 list-disc ml-4'>
                                            {experience.bulletPoints.map((bulletPoint, index) => (
                                                <li key={index} className='text-gray-200 text-sm' dangerouslySetInnerHTML={{ __html: bulletPoint }} />
                                            ))}
                                        </ul>

                                        {experience.image && <Image 
                                        src={experience.image} 
                                        alt='Phi Theta Kappa' 
                                        className='object-cover rounded-lg' 
                                        width={309}
                                        height={177}
                                        />}
                                    </div>
                                </div>

                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    )
}

export default Experience
