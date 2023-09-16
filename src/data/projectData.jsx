export default [
    {
        position:1,
        projectLink:"https://vonglory176.github.io/ImageGenerator/",
        githubLink:"https://github.com/Vonglory176/ImageGenerator/",
        projectImages:[
            {
                alt:"AI Image Generator project image 1",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1144375437066244277/image.png"
            },
            {
                alt:"AI Image Generator project image 2",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1144378120556773558/image.png"
            }
        ],
        title:"AI Image Generator",
        description:[<p>This project is exactly as it sounds, that being a small React application allowing you to use AI to easily create detailed artwork!</p>, <p>Through the use of Horde-AI API services and a series of fetch calls, clicking the generate button will send whatever settings you've configured off to be processed and returned as an image of your design. The work itself was of course very heavily focused on fundamental React concepts (like useState and useEffect) and Asynchronous Fetch calls in particular, though also involved extensive utilization of React-Bootstrap for much of the UI. </p>, <p>With the “Batch Size” feature being the latest addition to my program, I'm also planning on adding some basic Local Storage functions to allow easy reuse of previous prompts. I'd like a gallery feature of sorts as well, though this looks to require back-end work and is as such an idea on the shelf for now.</p>],
        skillLogos:[
            "HTML",
            "CSS",
            "Sass",
            "Bootstrap",
            "Javascript",
            "React",
            "Vite",
            "RESTful API",
            {
                // {
                //     id:1,
                //     alt:"HTML logo",
                //     image:"https://www.svgrepo.com/show/452228/html-5.svg"
                // },
                // {
                //     id:2,
                //     alt:"CSS logo",
                //     image:"https://www.svgrepo.com/show/452185/css-3.svg"
                // },
                // {
                //     id:3,
                //     alt:"Bootstrap logo",
                //     image:"https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg"
                // }
            }
        ]
    },
    {
        position:2,
        projectLink:"https://vonglory176.github.io/Business-Page/",
        githubLink:"https://github.com/Vonglory176/Business-Page",
        projectImages:[
            {
                alt:"Ocular Instruments Business Page project image 1",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1152666201839911052/businessPageNew1.png"
            },
            {
                alt:"Ocular Instruments Business Page project image 2",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1152667789329436723/businessPageNew2.png"
            },
            {
                alt:"Ocular Instruments Business Page project image 3",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1152666201550491688/businessPageOld.png"
            }
        ],
        title:"Ocular Instruments Business Page (WIP)",
        description:[<p>This is a project I started working on after seeing the rather static website of the company I currently work for. Lacking any form of responsive code or flashy graphics, it inspired me to sit down and see how I could improve things were I to devote some time to it. </p>, <p>The page is still rather rough and requires a good deal of polish work, but I'm already very happy with how things have come along and am excited to continue! So far, all viewports from mobile to desktop work as intended and content will shift and reorganize to compensate, the hardest part for me really just coming down to deciding what more I'd like to add or change and the CSS to be included. Finding good quality pictures has also been a bit of a task, though I'm planning on doing some minor photoshop work to spiff up what I already have.</p>, <p>As far as plans go my main focus is currently directed to the navbar. Things are still a bit unkempt, and I'm going to spruce up the way it looks and functions alongside adding some visual animation/changes to links when you interact with them. </p>],
        skillLogos:[
            "HTML",
            "CSS",
            "Sass",
            "Bootstrap",
            "Javascript",
            "React",
            "Vite"
        ]
    },
    {
        position: 3,
        projectLink:"https://vonglory176.github.io/SpaceShip-Game/",
        githubLink:"https://github.com/Vonglory176/SpaceShip-Game/",
        projectImages:[
            {
                alt:"Asteroid Gauntlet Game project image 1",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1119796973562757180/sddsdfsdf.png"
            },
            {
                alt:"Asteroid Gauntlet Game project image 2",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1119796973176893582/sddsjkljkdfsdf.png"
            }
        ],
        title:"Asteroid Gauntlet Game",
        description:[<p>This was a final project I'd made for a college class in JavaScript. The coding was done entirely by myself and the art assets very kindly drawn for me by my friend Edva.</p>, <p>It was my first project of this type and it took me a few weeks to put together as such, but I think that in the end that it came out pretty well! There are a couple small imperfections with things like hit detection, optimization and so on, but I'd gotten to what I could at the time and am very proud of the outcome.</p>, <p>The game runs within an HTML Canvas element nested within a simple bootstrap frame, the game objects themselves drawn from a series of sprite-sheets and animated through frame-requests and event triggers.</p>],
        skillLogos:[
            "HTML",
            "CSS",
            "Bootstrap",
            "Javascript",
            "jQuery"
        ]
    },
    {
        position:4,
        projectLink:"https://vonglory176.github.io/Mock-ReactDoc-Page/",
        githubLink:"https://github.com/Vonglory176/Mock-ReactDoc-Page/",
        projectImages:[
            {
                alt:"React Documentation Page project image 1",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1119786085124411463/Screenshot_2023-06-17_172718.png"
            },
            {
                alt:"React Documentation Page project image 2",
                image:"https://media.discordapp.net/attachments/1117279430281285632/1119786085376077894/Screenshot_2023-06-17_172904.png"
            }
        ],
        title:"React.js Documentation Page",
        description:[<p>This is a little documentation page built to give the reader some information on the React Javascript library.</p>, <p>In building it, most all attention was on media queries and bootstrap use to make the page's content completely responsive and scalable. It has 3 main viewports in which the navbar will shift around the screen, the mobile view in particular condensing it to a small hamburger menu. Each link within said navbar is connected to a certain section of the page's content, this also incorperating some basic JavaScript / jQuery to keep the navbar out of the way of headers.</p>, <p>Note that the content images included were left on the larger side to better demonstrate this.</p>],
        skillLogos:[
            "HTML",
            "CSS",
            "Bootstrap",
            "Javascript",
            "jQuery"
        ]
    }
]