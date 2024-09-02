// WebPortfolio
import webPortfolioImage1 from '../assets/images/projects/webportfolio/webportfolio-1.webp'
import webPortfolioImage1Small from '../assets/images/projects/webportfolio/webportfolio-1-small.webp'
// import webPortfolioThumbnail from '../assets/images/projects/webPortfolio/webPortfolio-thumbnail.webp'

// Gym App
import gymAppImage1 from '../assets/images/projects/gymApp/gym-app-1.webp'
import gymAppImage2 from '../assets/images/projects/gymApp/gym-app-2.webp'
import gymAppImage3 from '../assets/images/projects/gymApp/gym-app-3.webp'
import gymAppImage1Small from '../assets/images/projects/gymApp/gym-app-1-small.webp'
import gymAppImage2Small from '../assets/images/projects/gymApp/gym-app-2-small.webp'
import gymAppImage3Small from '../assets/images/projects/gymApp/gym-app-3-small.webp'
// import gymAppThumbnail from '../assets/images/projects/gymApp/gym-app-thumbnail.webp'

// FreeScribe
import freeScribeImage1 from '../assets/images/projects/freeScribe/freeScribe-1.webp'
import freeScribeImage2 from '../assets/images/projects/freeScribe/freeScribe-2.webp'
import freeScribeImage3 from '../assets/images/projects/freeScribe/freeScribe-3.webp'
import freeScribeImage4 from '../assets/images/projects/freeScribe/freeScribe-4.webp'
import freeScribeImage1Small from '../assets/images/projects/freeScribe/freeScribe-1-small.webp'
import freeScribeImage2Small from '../assets/images/projects/freeScribe/freeScribe-2-small.webp'
import freeScribeImage3Small from '../assets/images/projects/freeScribe/freeScribe-3-small.webp'
import freeScribeImage4Small from '../assets/images/projects/freeScribe/freeScribe-4-small.webp'
// import freeScribeThumbnail from '../assets/images/projects/freeScribe/freeScribe-thumbnail.webp'

// ColProSol
import colProSolImage1 from '../assets/images/projects/colprosol/colprosol-1.webp'
import colProSolImage2 from '../assets/images/projects/colprosol/colprosol-2.webp'
import colProSolImage3 from '../assets/images/projects/colprosol/colprosol-3.webp'
import colProSolImage4 from '../assets/images/projects/colprosol/colprosol-4.webp'
import colProSolImage5 from '../assets/images/projects/colprosol/colprosol-5.webp'
import colProSolImage1Small from '../assets/images/projects/colprosol/colprosol-1-small.webp'
import colProSolImage2Small from '../assets/images/projects/colprosol/colprosol-2-small.webp'
import colProSolImage3Small from '../assets/images/projects/colprosol/colprosol-3-small.webp'
import colProSolImage4Small from '../assets/images/projects/colprosol/colprosol-4-small.webp'
import colProSolImage5Small from '../assets/images/projects/colprosol/colprosol-5-small.webp'
// import colProSolThumbnail from '../assets/images/projects/colprosol/colprosol-thumbnail.webp'

// ColProSol - Admin
// import colProSolAdminImage1 from '../assets/images/projects/colprosolAdmin/colprosolAdmin-1.webp'
// import colProSolAdminImage2 from '../assets/images/projects/colprosolAdmin/colprosolAdmin-2.webp'
// import colProSolAdminImage1Small from '../assets/images/projects/colprosolAdmin/colprosolAdmin-1-small.webp'
// import colProSolAdminImage2Small from '../assets/images/projects/colprosolAdmin/colprosolAdmin-2-small.webp'
// import colProSolAdminThumbnail from '../assets/images/projects/colprosolAdmin/colprosolAdmin-thumbnail.webp'

// Catalyst Store Clone
import catalystStoreImage1 from '../assets/images/projects/catalystStore/catalystStore-1.webp'
import catalystStoreImage1Small from '../assets/images/projects/catalystStore/catalystStore-1-small.webp'
// import catalystStoreThumbnail from '../assets/images/projects/catalystStore/catalystStore-thumbnail.webp'

// Image Generator
import imageGeneratorImage1 from '../assets/images/projects/imageGenerator/imageGenerator-1.webp'
import imageGeneratorImage2 from '../assets/images/projects/imageGenerator/imageGenerator-2.webp'
import imageGeneratorImage3 from '../assets/images/projects/imageGenerator/imageGenerator-3.webp'
import imageGeneratorImage1Small from '../assets/images/projects/imageGenerator/imageGenerator-1-small.webp'
import imageGeneratorImage2Small from '../assets/images/projects/imageGenerator/imageGenerator-2-small.webp'
import imageGeneratorImage3Small from '../assets/images/projects/imageGenerator/imageGenerator-3-small.webp'
// import imageGeneratorThumbnail from '../assets/images/projects/imageGenerator/imageGenerator-thumbnail.webp'

// Asteroid Gauntlet
import asteroidGauntletImage1 from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-1.webp'
import asteroidGauntletImage2 from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-2.webp'
import asteroidGauntletImage3 from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-3.webp'
import asteroidGauntletImage1Small from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-1-small.webp'
import asteroidGauntletImage2Small from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-2-small.webp'
import asteroidGauntletImage3Small from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-3-small.webp'
// import asteroidGauntletThumbnail from '../assets/images/projects/asteroidGauntlet/asteroidGauntlet-thumbnail.webp'

export const projects = [
    {
        // WebPortfolio
        name: 'WebPortfolio',
        description: 'A website for showcasing my projects and skills',
        thumbnail: {
            full: webPortfolioImage1,
            small: webPortfolioImage1Small,
        },
        images: {
            full: [
                webPortfolioImage1,
            ],
            small: [
                webPortfolioImage1Small,
            ],
        },
        link: 'https://vonglory176.github.io/WebPortfolio/',
        github: 'https://github.com/Vonglory176/WebPortfolio',
        skills: ['HTML', 'SCSS', 'Tailwind', 'JavaScript', 'React'],
    },
    {
        // Gym App
        name: 'Gym App',
        description: 'A website for generating custom workout plans',
        thumbnail: {
            full: gymAppImage1, // gymAppThumbnail,
            small: gymAppImage1Small,
        },
        images: {
            full: [
                gymAppImage1,
                gymAppImage2,
                gymAppImage3,
            ],
            small: [
                gymAppImage1Small,
                gymAppImage2Small,
                gymAppImage3Small,
            ],
        },
        link: 'https://skylers-gym-trainer.netlify.app/',
        github: 'https://github.com/Vonglory176/Gym-App',
        skills: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Vite'],
    },
    {
        // FreeScribe
        name: 'FreeScribe',
        description: 'A website that records and transcribes audio',
        // description: 'A website to record & transcribe audio',
        thumbnail: {
            full: freeScribeImage1, // freeScribeThumbnail,
            small: freeScribeImage1Small,
        },
        images: {
            full: [
                freeScribeImage1,
                freeScribeImage2,
                freeScribeImage3,
                freeScribeImage4,
            ],
            small: [
                freeScribeImage1Small,
                freeScribeImage2Small,
                freeScribeImage3Small,
                freeScribeImage4Small,
            ],
        },
        link: 'https://skylers-transcriber.netlify.app/',
        github: 'https://github.com/Vonglory176/FreeScribe',
        skills: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Vite', 'RESTful API'],
    },
    {
        // Collective Problem Solver
        name: 'Collective Problem Solver',
        description: 'A community-driven platform for tackling everyday challenges',
        thumbnail: {
            full: colProSolImage1, // colProSolThumbnail,
            small: colProSolImage1Small,
        },
        images: {
            full: [
                colProSolImage1,
                colProSolImage2,
                colProSolImage3,
                colProSolImage4,
                colProSolImage5,
            ],
            small: [
                colProSolImage1Small,
                colProSolImage2Small,
                colProSolImage3Small,
                colProSolImage4Small,
                colProSolImage5Small,
            ],
        },
        link: 'https://colprosol.com/',
        github: '',
        skills: ['HTML', 'SCSS', 'JavaScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB', 'RESTful API'],
    },
    {
        // ColProSol - Admin
        name: 'ColProSol - Admin',
        description: 'An admin-panel for moderating Collective Problem Solver',
        thumbnail: {
            full: colProSolImage1, // colProSolThumbnail,
            small: colProSolImage1Small,
        },
        images: {
            full: [
                colProSolImage1,
                colProSolImage2,
                colProSolImage3,
                colProSolImage4,
                colProSolImage5,
            ],
            small: [
                colProSolImage1Small,
                colProSolImage2Small,
                colProSolImage3Small,
                colProSolImage4Small,
                colProSolImage5Small,
            ],
        },
        link: 'https://colprosol.com/',
        github: '',
        skills: ['HTML', 'SCSS', 'JavaScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB', 'RESTful API'],
    },
    {
        // Catalyst Store Clone
        name: 'Catalyst Store Clone',
        description: 'A fully functional recreation of the Catalyst Games Store',
        thumbnail: {
            full: catalystStoreImage1, // catalystStoreThumbnail,
            small: catalystStoreImage1Small,
        },
        images: {
            full: [
                catalystStoreImage1,
                // catalystStoreImage2,
                // catalystStoreImage3,
                // catalystStoreImage4,
                // catalystStoreImage5,
            ],
            small: [
                catalystStoreImage1Small,
                // catalystStoreImage2Small,
                // catalystStoreImage3Small,
                // catalystStoreImage4Small,
                // catalystStoreImage5Small,
            ],
        },
        link: 'https://catalyst-clone.netlify.app/',
        github: 'https://github.com/Vonglory176/CatalystClone',
        skills: ['HTML', 'SCSS', 'JavaScript', 'React', 'Firebase', 'RESTful API', 'Stripe Checkout'],
    },
    {
        // Image Generator
        name: 'Image Generator',
        description: 'A website that uses AI to generate images',
        thumbnail: {
            full: imageGeneratorImage1, // imageGeneratorThumbnail,
            small: imageGeneratorImage1Small,
        },
        images: {
            full: [
                imageGeneratorImage1,
                imageGeneratorImage2,
                imageGeneratorImage3,
            ],
            small: [
                imageGeneratorImage1Small,
                imageGeneratorImage2Small,
                imageGeneratorImage3Small,
            ],
        },
        link: 'https://vonglory176.github.io/ImageGenerator/',
        github: 'https://github.com/Vonglory176/ImageGenerator',
        skills: ['HTML', 'CSS', 'BootStrap', 'JavaScript', 'React', 'RESTful API', 'OpenAI'],
    },
    {
        // Asteroid Gauntlet
        name: 'Asteroid Gauntlet',
        description: 'A small game I made with JavaScript and Canvas',
        thumbnail: {
            full: asteroidGauntletImage1, // asteroidGauntletThumbnail,
            small: asteroidGauntletImage1Small,
        },
        images: {
            full: [
                asteroidGauntletImage1,
                asteroidGauntletImage2,
                asteroidGauntletImage3,
            ],
            small: [
                asteroidGauntletImage1Small,
                asteroidGauntletImage2Small,
                asteroidGauntletImage3Small,
            ],
        },
        link: 'https://vonglory176.github.io/SpaceShip-Game/',
        github: 'https://github.com/Vonglory176/SpaceShip-Game',
        skills: ['HTML', 'CSS', 'BootStrap', 'JavaScript', 'Canvas'],
    },
    
    
    // DUMMY PROJECTS -- DELETE AFTER TESTING !!!!!!
    // {
    //     name: 'Gym App',
    //     description: 'A website for building workout plans',
    //     thumbnail: {
    //         full: gymAppThumbnail,
    //         small: gymAppThumbnail,
    //     },
    //     images: {
    //         full: [
    //             gymAppImage1,
    //             gymAppImage2,
    //             gymAppImage3,
    //         ],
    //         small: [
    //             gymAppImage1Small,
    //             gymAppImage2Small,
    //             gymAppImage3Small,
    //         ],
    //     },
    //     link: 'https://skylers-gym-trainer.netlify.app/',
    //     github: 'https://github.com/Vonglory176/Gym-App',
    //     skills: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Vite'],
    // },
    // {
    //     name: 'FreeScribe',
    //     description: 'A site to record & transcribe audio',
    //     thumbnail: {
    //         full: freeScribeThumbnail,
    //         small: freeScribeThumbnail,
    //     },
    //     images: {
    //         full: [
    //             freeScribeImage1,
    //             freeScribeImage2,
    //             freeScribeImage3,
    //             freeScribeImage4,
    //         ],
    //         small: [
    //             freeScribeImage1Small,
    //             freeScribeImage2Small,
    //             freeScribeImage3Small,
    //             freeScribeImage4Small,
    //         ],
    //     },
    //     link: 'https://skylers-transcriber.netlify.app/',
    //     github: 'https://github.com/Vonglory176/FreeScribe',
    //     skills: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Vite', 'RESTful API'],
    // },
    // {
    //     name: 'Gym App',
    //     description: 'A website for building workout plans',
    //     thumbnail: {
    //         full: gymAppThumbnail,
    //         small: gymAppThumbnail,
    //     },
    //     images: {
    //         full: [
    //             gymAppImage1,
    //             gymAppImage2,
    //             gymAppImage3,
    //         ],
    //         small: [
    //             gymAppImage1Small,
    //             gymAppImage2Small,
    //             gymAppImage3Small,
    //         ],
    //     },
    //     link: 'https://skylers-gym-trainer.netlify.app/',
    //     github: 'https://github.com/Vonglory176/Gym-App',
    //     skills: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Vite'],
    // },
    // {
    //     name: 'FreeScribe',
    //     description: 'A website to record & transcribe audio',
    //     thumbnail: {
    //         full: freeScribeThumbnail,
    //         small: freeScribeThumbnail,
    //     },
    //     images: {
    //         full: [
    //             freeScribeImage1,
    //             freeScribeImage2,
    //             freeScribeImage3,
    //             freeScribeImage4,
    //         ],
    //         small: [
    //             freeScribeImage1Small,
    //             freeScribeImage2Small,
    //             freeScribeImage3Small,
    //             freeScribeImage4Small,
    //         ],
    //     },
    //     link: 'https://skylers-transcriber.netlify.app/',
    //     github: 'https://github.com/Vonglory176/FreeScribe',
    //     skills: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Vite', 'RESTful API'],
    // },
]
