
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaGitlab, FaSass, FaBootstrap, FaGlobe, FaMobileAlt, FaTools, FaServer, FaCode, FaAws, FaSharp, FaBug, FaChartLine, FaRunning, FaUniversalAccess, FaSearch, FaUsers, FaBox, FaBook } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs, SiRedux, SiMongodb, SiPostgresql, SiFirebase, SiFigma, SiAdobephotoshop, SiPostman, SiTailwindcss, SiJson, SiJquery, SiW3Schools, SiExpress, SiMicrosoftsqlserver, SiVite, SiPhp, SiWordpress, SiDirectus, SiJira, SiJenkins, SiTestinglibrary, SiRedis, SiAdobeillustrator, SiEslint, SiElectron, SiShopify, SiStrapi, } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiMsqlServer } from "react-icons/di";
import { AiOutlineApi } from 'react-icons/ai'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { FaPaintbrush } from 'react-icons/fa6'
import { VscAzure } from 'react-icons/vsc'

export const skills = {
    frontend: {
        image: FaCode,
        list: [
            // Core Web Technologies // ADD LONGER DESCRIPTIONS
            {
                name: 'Core Web Technologies',
                list: [
                    { shortName: 'HTML', fullName: 'HyperText Markup Language', image: FaHtml5, description: 'The standard markup language for creating web pages and web applications, providing the basic structure and content.' },
                    { shortName: 'CSS', fullName: 'Cascading Style Sheets', image: FaCss3Alt, description: 'A styling language used to control the visual presentation and layout of HTML documents across all screen sizes.' },
                    { shortName: 'JavaScript', fullName: 'JavaScript', image: SiJavascript, description: 'A versatile programming language that enables interactive and dynamic content on websites, powering modern web applications.' },
                    { shortName: 'TypeScript', fullName: 'TypeScript', image: SiTypescript, description: 'A strongly-typed superset of JavaScript that adds optional static typing and object-oriented features to enhance code quality.' },
                ]
            },

            // Frameworks & Libraries
            {
                name: 'Frameworks & Libraries',
                list: [
                    { shortName: 'ReactJS', fullName: 'React.js', image: FaReact, description: 'A popular JavaScript library for building user interfaces with reusable components and efficient DOM manipulation.' },
                    { shortName: 'NextJS', fullName: 'Next.js', image: SiNextdotjs, description: 'A React framework that enables server-side rendering, static site generation, and optimized production builds.' },
                    { shortName: 'ElectronJS', fullName: 'Electron.js', image: SiElectron, description: 'A framework for building cross-platform desktop applications using web technologies like JavaScript and HTML.' },
                    { shortName: 'jQuery', fullName: 'jQuery', image: SiJquery, description: 'A fast and feature-rich JavaScript library that simplifies HTML document traversing and manipulation.' },
                ]
            },

            // Styling & Design
            {
                name: 'Styling & Design',
                list: [
                    { shortName: 'SCSS', fullName: 'Sassy CSS', image: FaSass, description: 'A preprocessor scripting language that extends CSS with advanced features like variables, nesting, and mixins.' },
                    { shortName: 'Bootstrap', fullName: 'Bootstrap CSS Framework', image: FaBootstrap, description: 'A comprehensive CSS framework for building responsive and mobile-first websites with pre-built components.' },
                    { shortName: 'Tailwind', fullName: 'Tailwind CSS Framework', image: SiTailwindcss, description: 'A utility-first CSS framework for rapidly building custom user interfaces with composable classes.' },
                    { shortName: 'Canvas', fullName: 'HTML5 Canvas', image: FaPaintbrush, description: 'An HTML element used for dynamic, scriptable rendering of 2D graphics and bitmap images.' },
                    { shortName: 'Figma', fullName: 'Figma', image: SiFigma, description: 'A collaborative web-based interface design tool for creating, prototyping, and sharing design systems.' },
                    { shortName: 'Photoshop', fullName: 'Adobe Photoshop', image: SiAdobephotoshop, description: 'Industry-standard software for professional image editing, manipulation, and graphic design.' },
                    { shortName: 'Illustrator', fullName: 'Adobe Illustrator', image: SiAdobeillustrator, description: 'Vector graphics software for creating scalable logos, illustrations, and digital artwork.' },
                ]
            },

            // Development Tools & State Management
            {
                name: 'Development Tools',
                list: [
                    { shortName: 'Vite', fullName: 'Vite.js Build Tool', image: SiVite, description: 'A modern frontend build tool that offers faster development server startup and hot module replacement.' },
                    { shortName: 'Redux', fullName: 'Redux State Management', image: SiRedux, description: 'A predictable state container for JavaScript apps, managing complex application state efficiently.' },
                    { shortName: 'REST', fullName: 'Representational State Transfer API', image: AiOutlineApi, description: 'An architectural style for distributed systems, enabling standardized communication between web services.' },
                    { shortName: 'Postman', fullName: 'Postman API Platform', image: SiPostman, description: 'A popular API development environment used for testing, documenting, and interacting with APIs.' },
                ]
            },

            // Best Practices & Standards
            {
                name: 'Best Practices & Optimization',
                list: [
                    { shortName: 'Accessibility', fullName: 'Web Accessibility Standards', image: FaUniversalAccess, description: 'Implementation of WCAG guidelines to make web content accessible to users with disabilities.' },
                    { shortName: 'SEO', fullName: 'Search Engine Optimization', image: FaSearch, description: 'Techniques and strategies to improve website visibility and ranking in search engine results.' },
                    { shortName: 'Responsive', fullName: 'Responsive Web Design', image: FaMobileAlt, description: 'Design approach ensuring websites adapt and function properly across all device sizes and orientations.' },
                    { shortName: 'Analytics', fullName: 'Web Analytics', image: FaChartLine, description: 'Tools and methods for measuring, collecting, and analyzing website traffic and user behavior data.' },
                    { shortName: 'Performance', fullName: 'Web Performance Optimization', image: FaRunning, description: 'Techniques to improve website loading speed, responsiveness, and overall user experience.' },
                    { shortName: 'Cross Browser', fullName: 'Cross Browser Compatibility', image: FaGlobe, description: 'Ensuring consistent website functionality and appearance across different web browsers.' },
                ]
            }
        ]
    },
    backend: {
        image: FaServer,
        list: [
            // Runtime & Frameworks
            {
                name: 'Server Technologies',
                list: [
                    { shortName: 'NodeJS', fullName: 'Node.js', image: FaNodeJs, description: 'A JavaScript runtime environment that executes code outside a web browser, enabling server-side development.' },
                    { shortName: 'ExpressJS', fullName: 'Express.js', image: SiExpress, description: 'A minimal and flexible Node.js web application framework for building robust APIs and web applications.' },
                    { shortName: 'Python', fullName: 'Python', image: FaPython, description: 'A versatile programming language known for its simplicity and extensive library support in backend development.' },
                    { shortName: 'PHP', fullName: 'PHP', image: SiPhp, description: 'A popular server-side scripting language designed for web development and embedded in HTML.' },
                ]
            },

            // Cloud & Infrastructure
            {
                name: 'Cloud Services',
                list: [
                    { shortName: 'AWS', fullName: 'Amazon Web Services', image: FaAws, description: 'A comprehensive cloud computing platform offering scalable and reliable infrastructure services.' },
                    { shortName: 'Azure', fullName: 'Microsoft Azure', image: VscAzure, description: 'Microsoft\'s cloud platform providing a wide range of services for building and managing applications.' },
                ]
            },

            // Databases
            {
                name: 'Database Technologies',
                list: [
                    { shortName: 'MySQL', fullName: 'MySQL', image: GrMysql, description: 'An open-source relational database management system known for its reliability and ease of use.' },
                    { shortName: 'MS SQL Server', fullName: 'Microsoft SQL Server', image: DiMsqlServer, description: 'Microsoft\'s enterprise-grade relational database system with advanced data management features.' },
                    { shortName: 'Postgres', fullName: 'PostgreSQL', image: SiPostgresql, description: 'A powerful, open-source object-relational database system with strong data integrity features.' },
                    { shortName: 'MongoDB', fullName: 'MongoDB', image: SiMongodb, description: 'A popular NoSQL database that provides high performance, high availability, and easy scalability.' },
                    { shortName: 'Firebase', fullName: 'Firebase', image: SiFirebase, description: 'Google\'s platform for building web and mobile applications with real-time database capabilities.' },
                    { shortName: 'Redis', fullName: 'Redis Cache', image: SiRedis, description: 'An in-memory data structure store used as a database, cache, and message broker.' },
                ]
            },

            // Architecture & Patterns
            {
                name: 'Architecture Patterns',
                list: [
                    { shortName: 'MVC', fullName: 'Model-View-Controller', image: GiSkills, description: 'A software design pattern that separates application logic into three interconnected components.' },
                    { shortName: 'REST', fullName: 'REST Architecture Pattern', image: AiOutlineApi, description: 'An architectural style for distributed systems focusing on scalable and maintainable web services.' },
                    { shortName: 'Microservices', fullName: 'Microservices Architecture', image: FaServer, description: 'An architectural approach where applications are built as small, independent services.' }
                ]
            }
        ]
    },
    other: {
        image: FaTools,
        list: [
            // Version Control & Collaboration
            {
                name: 'Collaborative Development',
                list: [
                    { shortName: 'Git', fullName: 'Git', image: FaGitAlt, description: 'A distributed version control system for tracking changes in source code during software development.' },
                    { shortName: 'GitHub', fullName: 'GitHub', image: FaGithub, description: 'A web-based platform for version control and collaboration in software development projects.' },
                    { shortName: 'GitLab', fullName: 'GitLab', image: FaGitlab, description: 'A complete DevOps platform for software development, testing, and deployment.' },
                    { shortName: 'Jira', fullName: 'Project Tracking', image: SiJira, description: 'An agile project management tool for planning, tracking, and managing software development projects.' },
                ]
            },

            // Testing & DevOps
            {
                name: 'Testing & DevOps',
                list: [
                    { shortName: 'ESLint', fullName: 'ESLint', image: SiEslint, description: 'A static code analysis tool for identifying and fixing problems in JavaScript code.' },
                    { shortName: 'Testing', fullName: 'React Testing Library', image: SiTestinglibrary, description: 'A testing utility for React applications focused on testing components from a user perspective.' },
                    { shortName: 'Automation', fullName: 'Test Automation', image: FaBug, description: 'Tools and frameworks for automating software testing processes and quality assurance.' },
                    { shortName: 'CI/CD', fullName: 'Continuous Integration & Deployment', image: SiJenkins, description: 'Practices of automating code integration, testing, and deployment processes.' },
                ]
            },

            // CMS Systems
            {
                name: 'CMS Systems',
                list: [
                    { shortName: 'Strapi', fullName: 'Strapi CMS', image: SiStrapi, description: 'A modern headless CMS that wraps your database with a dynamic API and intuitive admin app.' },
                    { shortName: 'Shopify', fullName: 'Shopify CMS', image: SiShopify, description: 'A leading e-commerce platform and CMS for building online stores with extensive customization capabilities.' },
                    { shortName: 'Directus', fullName: 'Directus CMS', image: SiDirectus, description: 'A modern headless CMS that wraps your database with a dynamic API and intuitive admin app.' },
                    { shortName: 'WordPress', fullName: 'WordPress CMS', image: SiWordpress, description: 'The world\'s most popular content management system for building websites and blogs.' },
                ]
            },

            // Project Management & Methodologies
            {
                name: 'Project Management',
                list: [
                    { shortName: 'Agile', fullName: 'Agile Methodology', image: MdOutlineManageAccounts, description: 'An iterative approach to project management emphasizing flexibility and continuous improvement.' },
                    { shortName: 'Scrum', fullName: 'Scrum Framework', image: FaUsers, description: 'An agile framework for managing complex projects through iterative and incremental development.' },
                    { shortName: 'Docs & Diags', fullName: 'Documentation & Diagrams', image: FaBook, description: 'Creation and maintenance of technical documentation and visual system diagrams.' },
                ]
            }
        ]
    }
}