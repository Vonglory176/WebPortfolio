import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGit, FaGithub, FaGitlab, FaSass, FaBootstrap, FaGlobe, FaMobileAlt, FaTools, FaServer, FaCode } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiRedux, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiFigma, SiAdobephotoshop, SiPostman, SiTailwindcss, SiJson, SiJquery, SiW3Schools, SiExpress, SiMicrosoftsqlserver, SiVite } from 'react-icons/si'
import { AiOutlineApi, AiOutlineProject } from 'react-icons/ai'
import { MdAccessibility, MdDesignServices, MdOutlineManageAccounts } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { FaPaintbrush } from 'react-icons/fa6'

export const skills = {
    frontend: {
        image: FaCode,
        list: [
            { name: 'HTML', image: FaHtml5, description: 'HyperText Markup Language' },
            { name: 'CSS', image: FaCss3Alt, description: 'Cascading Style Sheets' },
            { name: 'SCSS', image: FaSass, description: 'Sassy CSS' },
            { name: 'Bootstrap', image: FaBootstrap, description: 'Bootstrap CSS Framework' },
            { name: 'Tailwind', image: SiTailwindcss, description: 'Tailwind CSS Framework' },
            { name: 'Canvas', image: FaPaintbrush, description: 'HTML5 Canvas' },
            { name: 'JavaScript', image: FaJs, description: 'JavaScript' },
            { name: 'TypeScript', image: SiTypescript, description: 'TypeScript' },
            { name: 'React', image: FaReact, description: 'React.js' },
            { name: 'Next.JS', image: SiNextdotjs, description: 'Next.js' },
            { name: 'jQuery', image: SiJquery, description: 'jQuery' },
            { name: 'Redux', image: SiRedux, description: 'Redux' },
            { name: 'JSON', image: SiJson, description: 'JavaScript Object Notation' },
            { name: 'REST API', image: AiOutlineApi, description: 'Representational State Transfer API' },
            { name: 'W3C', image: SiW3Schools, description: 'World Wide Web Consortium' },
            { name: 'Accessibility', image: MdAccessibility, description: 'Web Accessibility' },
            { name: 'Responsive Design', image: FaMobileAlt, description: 'Responsive Web Design' }, // DiResponsive
            { name: 'Cross Browser', image: FaGlobe, description: 'Cross Browser Compatibility' }
        ]
    },
    backend: {
        image: FaServer,
        list: [
            { name: 'NodeJS', image: FaNodeJs, description: 'Node.js' },
            { name: 'ExpressJS', image: SiExpress, description: 'Express.js' },
            { name: 'Python', image: FaPython, description: 'Python' },
            { name: 'MySQL', image: SiMysql, description: 'MySQL' },
            { name: 'MS SQL Server', image: SiMicrosoftsqlserver, description: 'Microsoft SQL Server' },
            { name: 'Postgres', image: SiPostgresql, description: 'PostgreSQL' },
            { name: 'Firebase', image: SiFirebase, description: 'Firebase' },
            { name: 'MongoDB', image: SiMongodb, description: 'MongoDB' },
            { name: 'MVC', image: GiSkills, description: 'Model-View-Controller' }
    ]
    },
    // design: {
    //     image: FaPaintBrush,
    //     list: [
    //         { name: 'Figma', image: SiFigma },
    //         { name: 'Photoshop', image: SiAdobephotoshop },
    //         { name: 'UI Design', image: MdDesignServices },
    //         { name: 'UX Design', image: MdDesignServices },
    //         // { name: 'User Interface', image: MdDesignServices },
    //         // { name: 'User Experience', image: MdDesignServices }
    //     ]
    // },
    other: {
        image: FaTools,
        list: [
            { name: 'Git', image: FaGit, description: 'Git' },
            { name: 'GitHub', image: FaGithub, description: 'GitHub' },
            { name: 'GitLab', image: FaGitlab, description: 'GitLab' },
            { name: 'Vite', image: SiVite, description: 'Vite.js' },
            { name: 'Postman', image: SiPostman, description: 'Postman' },

            // Design merge
            { name: 'Figma', image: SiFigma, description: 'Figma' },
            { name: 'Photoshop', image: SiAdobephotoshop, description: 'Adobe Photoshop' },
            { name: 'UI Design', image: MdDesignServices, description: 'User Interface Design' },
            { name: 'UX Design', image: MdDesignServices, description: 'User Experience Design' },

            { name: 'Project Management', image: AiOutlineProject, description: 'Project Management' },
            // { name: 'Test Case Management', image: MdOutlineAssignment, description: 'Test Case Management' },
            { name: 'Agile Methodology', image: MdOutlineManageAccounts, description: 'Agile Methodology' }
        ]
    }
}

// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGit, FaGithub, FaGitlab, FaSass, FaBootstrap, FaGlobe,  } from 'react-icons/fa'
// import { SiTypescript, SiNextdotjs, SiRedux, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiFigma, SiAdobephotoshop, SiPostman, SiTailwindcss, SiJson, SiJquery, SiW3Schools, SiExpress, SiMicrosoftsqlserver, SiRabbitmq } from 'react-icons/si'
// import { AiOutlineApi } from 'react-icons/ai'
// import { MdAccessibility, MdDesignServices } from 'react-icons/md'
// import { DiResponsive } from 'react-icons/di'
// import { GrMysql } from 'react-icons/gr'

// export const skills = {
//     frontend: [
//         { name: 'HTML', image: FaHtml5 },
//         { name: 'CSS', image: FaCss3Alt },
//         { name: 'SCSS', image: FaSass },
//         { name: 'Bootstrap', image: FaBootstrap },
//         { name: 'Tailwind', image: SiTailwindcss },
//         { name: 'JavaScript', image: FaJs },
//         { name: 'TypeScript', image: SiTypescript },
//         { name: 'React', image: FaReact },
//         { name: 'Next.JS', image: SiNextdotjs },
//         { name: 'jQuery', image: SiJquery },
//         { name: 'Redux', image: SiRedux },
//         { name: 'JSON', image: SiJson },
//         // { name: 'REST', image: '' },
//         { name: 'REST API', image: AiOutlineApi },
//         { name: 'W3C', image: SiW3Schools },
//         { name: 'Accessibility', image: MdAccessibility },
//         { name: 'Responsive Design', image: DiResponsive },
//         { name: 'Cross Browser', image: FaGlobe }
//     ],
//     backend: [
//         { name: 'NodeJS', image: FaNodeJs },
//         { name: 'ExpressJS', image: SiExpress },
//         { name: 'Python', image: FaPython },
//         { name: 'MySQL', image: SiMysql },
//         { name: 'MS SQL Server', image: SiMicrosoftsqlserver },
//         { name: 'Postgres', image: SiPostgresql },
//         { name: 'Firebase', image: SiFirebase },
//         { name: 'MongoDB', image: SiMongodb },
//         { name: 'MVC', image: '' }
//     ],
//     design: [
//         { name: 'Figma', image: SiFigma },
//         { name: 'Photoshop', image: SiAdobephotoshop },
//         { name: 'UI Design', image: '' },
//         { name: 'UX Design', image: '' },
//         { name: 'User Interface', image: '' },
//         { name: 'User Experience', image: '' }
//     ],
//     other: [
//         { name: 'Postman', image: SiPostman },
//         { name: 'Git', image: FaGit },
//         { name: 'GitHub', image: FaGithub },
//         { name: 'GitLab', image: FaGitlab },
//         { name: 'Project Management', image: '' },
//         { name: 'Test Case Management', image: '' },
//         { name: 'Agile Development', image: '' }
//     ]
// }