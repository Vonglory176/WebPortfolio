import SectionWrapper from '@/components/SectionWrapper'
import { FaCheckCircle, FaCodeBranch, FaDownload } from 'react-icons/fa'
// import bgColorImg from '@/assets/images/bg-colors-1.png'
import HobbyDisplay from '@/components/HobbyDisplay'

const About = () => {

    return (
        <SectionWrapper id='about' title='About'>

            <div className="content-wrapper flex flex-col gap-4 max-w-[548px]"> {/* 619px */}

                <div className='flex flex-col items-center justify-center text-center gap-2'>
                    {/* <h3 className='text-2xl font-bold text-left m-auto max-w-[250px] md:max-w-[450px]'>Meet Skyler<span className='text-blue-400'>,</span> an avid <span ref={hobbyRef} className='text-blue-400 transition-opacity opacity-0' key={currentHobby}>{hobbies[currentHobby]}</span></h3> */}

                    <h2 className='text-4xl font-bold'>Meet Skyler<span className='text-blue-500'>.</span></h2>
                    <HobbyDisplay />
                    {/* <h3 ref={hobbyRef} className='text-2xl w-full m-auto duration-300 transition-opacity opacity-0 text-blue-500' key={currentHobby}>{hobbies[currentHobby]}</h3> */}

                    {/* <p className='text-xl font-semibold text-center w-full m-auto duration-300 transition-opacity opacity-0 text-blue-500'>{hobbies[currentHobby]}</p> */}
                </div>


                <div className="flex flex-col items-center gap-4 px-4 py-6 rounded-lg bg-gray-800 z-10 shadow-lg border border-solid border-gray-700 text-gray-200">

                    {/* <h3 className='text-center text-2xl font-bold w-full'>Meet Skyler<span className='text-blue-400'>.</span></h3> */}
                    <p>Results-oriented and highly motivated <span className='text-blue-400'>Full-Stack Developer</span> with <span className='text-blue-400'>3+ years</span> of experience in <span className='text-blue-400'>Web Development</span>, specializing in the <span className='text-blue-400'>MERN tech stack</span>.</p>
                    <p>Proficient in <span className='text-blue-400'>Responsive Design</span>, <span className='text-blue-400'>Best Practices</span>, and <span className='text-blue-400'>W3C Standards</span>. <span className='text-blue-400'>Self-motivated</span>, <span className='text-blue-400'>fast learner</span>, and always eager to tackle new challenges to expand my skillset.</p>

                </div>

                <div className="flex justify-around gap-2 w-full z-10 text-gray-400 text-center">

                    <div className="flex flex-col items-center justify-center gap-2 w-full max-w-[110px]">
                        <FaCheckCircle size={24} />
                        <h3 className='text-lg font-bold'>8+</h3>
                        <p>Projects Completed</p>
                    </div>

                    <a 
                        href='/SkylerConley_Resume_12-13-2024.pdf'
                        download ='Skyler_Conley_Resume.pdf'
                        rel="noreferrer noopener"
                        target='_blank'
                        title="Download Skyler's Resume"
                        className='bg-blue-700 text-white px-4 py-3 my-auto rounded hover:bg-blue-800 duration-300 flex items-center gap-2'
                    >
                        {/* Download */}
                        <span className='hidden sm:block'>Download</span>
                        <span>Resume</span>
                        <FaDownload />
                    </a>

                    <div className="flex flex-col items-center gap-2 w-full max-w-[110px]">
                        <FaCodeBranch size={24} />
                        <h3 className='text-lg font-bold'>2000+</h3>
                        <p>Code Commits</p>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    )
}

export default About
