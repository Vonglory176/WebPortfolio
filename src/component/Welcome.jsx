import React from "react";
import earthImage from "../assets/earth2.png"

export default function Header() {
    const [loaded, setLoaded] = React.useState(false);
    return (
        <section id="welcome-section">
            <div id="earthGradient-div"></div>
                <img src={earthImage} id="earth-img"/>
            {/* <h1 className="welcome-title section-title">Interested in hiring me?</h1> */}

            <div className="welcomeTitle-div">
                <div className="welcomePictureWrap-div">
                    <div className="welcomePicture-div">
                        <img 
                            className="img-fluid"
                            alt="Picture of Skyler" 
                            src="https://media.discordapp.net/attachments/937466658027618324/1107840420836290570/image.png" 
                            loading="lazy" 
                            style={{
                                opacity: loaded ? 1 : 0,
                                transition: '200ms ease-in-out'
                            }}
                            onLoad={() => setLoaded(true)}
                        />
                    </div>
                </div>

                <span className="section-title">
                    <h1 className="text-left m-0">Hello, I'm Skyler</h1>
                </span>
            </div>

            <div className="welcomeContainer-div sectionContainer-div col-11 m-0">
                <h5 className="text-center">A Junior Web-Developer</h5>
                <div className="welcomeContent-div col-11">
                    {/* <hr/> */}
                    <p>I've been pursuing Front-End Web Development for a couple years now, learning both on my own and through my college classes while holding down a full-time job.</p> 
                    <p>Even with some bumps along the way, each project and every new hurdle taught me a great deal, and I'm keen on ironing out my skills enough to land a place in the industry. Discovering new and increasingly efficient ways to design and create something beautiful has been a blast, and I'm excited to show I have what it takes to do just that.</p> 
                    <p>Down below you'll find a series of projects I've built as demonstration, their focuses varying from programs utilizing advanced JavaScript concepts to web pages with fully responsive content and layout</p>
                    {/* each (Asteroid Gauntlet aside) primarily created to explore the premise of responsive design and layout/content scaling. */}
                    {/* <hr/> */}
                </div>
            </div>

            {/* <div className="welcomeContainer-div sectionContainer-div col-11">
                <div className="welcomeTitle-div">
                    <img className="img-fluid" alt="Picture of Skyler" src="https://media.discordapp.net/attachments/937466658027618324/1107840420836290570/image.png"/>
                    <h1 className="text-left m-0">Hello,<br/> I'm Skyler</h1>
                </div>
                <div className="welcomeContent-div col-11">
                    <hr/>
                    <h5 className="text-center">A Junior Web-Developer</h5>
                    <p>I've been pursuing Front-End Web Development for a couple years now, learning both on my own and through my college classes while holding down a full-time job.</p> 
                    <p>Even with some bumps along the way, each project and every new hurdle taught me a great deal, and I'm keen on ironing out my skills enough to land a place in the industry. Discovering new and increasingly efficient ways to design and create something beautiful has been a blast, and I'm excited to show I have what it takes to do just that.</p> 
                    <p>Down below you'll find a series of projects I've built as demonstration, their focuses varying from programs utilizing advanced JavaScript concepts to web pages with fully responsive content and layout</p>
                    <hr/>

                    each (Asteroid Gauntlet aside) primarily created to explore the premise of responsive design and layout/content scaling.

                </div>
            </div> */}
        </section>
    )
}