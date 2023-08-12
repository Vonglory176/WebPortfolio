export default {
    skillCategories:[
        {
            id:"HTML - skillCategory",
            title:"HTML",
            alt:"HTML logo",
            image:"https://www.svgrepo.com/show/452228/html-5.svg",
            skills:[
                {
                    id:"Non-semantic elements - HtmlSkill",
                    checked:true,
                    content:<span>Non-semantic elements (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, lists, links, <code>&lt;img&gt;</code> vs. <code>&lt;picture&gt;</code>)</span>
                },
                {
                    id:"Semantic elements - HtmlSkill",
                    checked:true,
                    content:<span>Semantic elements (<code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>)</span>
                },
                {
                    id:"Forms - HtmlSkill",
                    checked:true,
                    content:<span>Forms (<code>&lt;input&gt;</code> types, validation attributes, <code>&lt;input type=”text”&gt;</code> vs. <code>&lt;textarea&gt;</code>)</span>
                },
                {
                    id:"Metadata - HtmlSkill",
                    checked:true,
                    content:<span>Metadata (viewport metadata, open graph metadata, link to stylesheet, link to favicon, how to add Google Analytics or Tag Manager)</span>
                },
                {
                    id:"Accessible HTML - HtmlSkill",
                    checked:true,
                    content:<span>Accessible HTML (well-understood by screen readers)</span>
                },
                {
                    id:"SVG basics - HtmlSkill",
                    checked:false,
                    content:<span>SVG basics</span>
                }
            ]
        },
        {
            id:"CSS - skillCategory",
            title:"CSS",
            alt:"CSS logo",
            image:"https://www.svgrepo.com/show/452185/css-3.svg",
            skills:[
                {
                    id:"The box model - CssSkill",
                    checked:true,
                    content:<span>The box model</span>
                },
                {
                    id:"Display value types - CssSkill",
                    checked:true,
                    content:<span>Display value types (block, inline-block, inline, flex, grid)</span>
                },
                {
                    id:"Positioning - CssSkill",
                    checked:true,
                    content:<span>Positioning (static, absolute, fixed, relative)</span>
                },
                {
                    id:"Selectors - CssSkill",
                    checked:true,
                    content:<span>Selectors (a, .component, .component &gt; a)</span>
                },
                {
                    id:"Pseudo-classNames - CssSkill",
                    checked:true,
                    content:<span>Pseudo-classNamees (:hover, :active)</span>
                },
                {
                    id:"Specificity - CssSkill",
                    checked:true,
                    content:<span>Specificity, !important (and when to use !important responsibly)</span>
                },
                {
                    id:"Default stylesheet and reset.css - CssSkill",
                    checked:true,
                    content:<span>Default stylesheet and reset.css</span>
                },
                {
                    id:"Animation basics - CssSkill",
                    checked:false,
                    content:<span>Animation basics (@keyframes)</span>
                },
                {
                    id:"Understanding of CSS frameworks and their trade-offs - CssSkill",
                    checked:true,
                    content:<span>Understanding of CSS frameworks and their trade-offs (experience with one preferred)</span>
                },
                {
                    id:"Understanding of Sass - CssSkill",
                    checked:false,
                    content:<span>Understanding of Sass (mixins, loops, conditions, functions)</span>
                },
                {
                    id:"Understanding of BEM methodology - CssSkill",
                    checked:true,
                    content:<span>Understanding of BEM methodology</span>
                }
            ]
        },
        {
            id:"Javascript - skillCategory",
            title:"Javascript",
            alt:"Javascript logo",
            image:"https://www.svgrepo.com/show/303206/javascript-logo.svg",
            skills:[
                {
                    id:"Functions - JavascriptSkill",
                    checked:true,
                    content:<span>Functions</span>
                },
                {
                    id:"Pass by value vs. pass by reference - JavascriptSkill",
                    checked:true,
                    content:<span>Pass by value vs. pass by reference</span>
                },
                {
                    id:"Values, types, and basic operators - JavascriptSkill",
                    checked:true,
                    content:<span>Values, types, and basic operators (arithmetic, assignment, comparison, difference between <code>==</code> and <code>===</code>)</span>
                },
                {
                    id:"Truthiness and it's quirks - JavascriptSkill",
                    checked:true,
                    content:<span>Truthiness and it's quirks</span>
                },
                {
                    id:"The Document Object Model - JavascriptSkill",
                    checked:true,
                    content:<span>The Document Object Model (getElementById, onClick, window.location.reload)</span>
                },
                {
                    id:"Data structures - JavascriptSkill",
                    checked:true,
                    content:<span>Data structures (Objects, arrays, arrays as queues, arrays as stack, Set) and how to manipulate them (loops, <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>Object.keys</code>)</span>
                },
                {
                    id:"How to send and and handle HTTP requests - JavascriptSkill",
                    checked:true,
                    content:<span>How to send and handle HTTP requests using <code>fetch</code></span>
                },
                {
                    id:"Promises and asynchronous programming - JavascriptSkill",
                    checked:true,
                    content:<span>Promises and asynchronous programming (chaining promises, handling errors, awaiting multiple promises in order, <code>await</code> keyword)</span>
                },
                {
                    id:"Basics of regular expressions - JavascriptSkill",
                    checked:false,
                    content:<span>Basics of regular expressions (matching characters, wildcards, anchors, quantifiers, greediness)</span>
                },
                {
                    id:"How to encode and decode text - JavascriptSkill",
                    checked:false,
                    content:<span>How to encode and decode text (base64, url encoding)</span>
                },
                {
                    id:"Cloning objects - JavascriptSkill",
                    checked:true,
                    content:<span>Cloning objects</span>
                },
                {
                    id:"ES6 syntactic sugar - JavascriptSkill",
                    checked:true,
                    content:<span>ES6 syntactic sugar (arrow functions, destructuring assignments, object initializer shorthand, rest parameters, spread operator)</span>
                },
                {
                    id:"Prototypes - JavascriptSkill",
                    checked:true,
                    content:<span>Prototypes (constructor functions and <code>new</code> keyword, this keyword, basics of prototypical inheritance)</span>
                },
                {
                    id:"Cookies, local storage, session storage - JavascriptSkill",
                    checked:true,
                    content:<span>Cookies, local storage, session storage</span>
                }
            ]
        }
    ],
    skillLogos:[
        {
            id:"HTML - skillLogo",
            alt:"HTML logo",
            name:"HTML",
            image:"https://www.svgrepo.com/show/452228/html-5.svg"
        },
        {
            id:"CSS - skillLogo",
            alt:"CSS logo",
            name:"CSS",
            image:"https://www.svgrepo.com/show/452185/css-3.svg"
        },
        {   
            id:"Bootstrap - skillLogo",
            name:"Bootstrap",
            alt:"Bootstrap logo",
            image:"https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
        },
        {   
            id:"Sass - skillLogo",
            name:"Sass",
            alt:"Sass logo",
            image:"https://sass-lang.com/assets/img/styleguide/seal-color.png"
        },
        {   
            id:"React - skillLogo",
            name:"React",
            alt:"React logo",
            image:"https://www.svgrepo.com/show/303157/react-logo.svg"
        },
        {   
            id:"Javascript - skillLogo",
            name:"JavaScript",
            alt:"JavaScript logo",
            image:"https://www.svgrepo.com/show/303206/javascript-logo.svg"
        },
        {   
            id:"jQuery - skillLogo",
            name:"jQuery",
            alt:"jQuery logo",
            image:"https://www.svgrepo.com/show/452242/jquery.svg"
        },
        {   
            id:"Vite - skillLogo",
            name:"Vite",
            alt:"Vite logo",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743"
        },
        {   
            id:"ExpressJS - skillLogo",
            name:"ExpressJS",
            alt:"ExpressJS logo",
            image:"https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png"
        },
        {   
            id:"SQL - skillLogo",
            name:"SQL",
            alt:"SQL logo",
            image:"https://www.svgrepo.com/show/158396/database.svg"
        },
        {   
            id:"Node.js - skillLogo",
            name:"Node.js",
            alt:"Node.js logo",
            image:"https://www.svgrepo.com/show/452075/node-js.svg"
        },
        {   
            id:"NPM - skillLogo",
            name:"NPM",
            alt:"NPM logo",
            image:"https://www.svgrepo.com/show/354126/npm-icon.svg"
        },
        {   
            id:"Git - skillLogo",
            name:"Git",
            alt:"Git logo",
            image:"https://www.svgrepo.com/show/452210/git.svg"
        },
        {   
            id:"Github - skillLogo",
            name:"Github",
            alt:"Github logo",
            image:"https://www.svgrepo.com/show/512317/github-142.svg"
        },
        {   
            id:"RESTful API - skillLogo",
            name:"RESTful API",
            alt:"RESTful API logo",
            image:"https://dataconversion.ie/wp-content/uploads/2021/02/API-01.png"
        },
        {   
            id:"Web Accessibility - skillLogo",
            name:"Web Accessibility",
            alt:"Web Accessibility logo",
            image:"https://img.icons8.com/ios/452/accessibility2.png"
        },
        {   
            id:"Responsive Design - skillLogo",
            name:"Responsive Design",
            alt:"Responsive Design logo",
            image:"https://cdn-icons-png.flaticon.com/512/65/65381.png"
        }
    ]
}