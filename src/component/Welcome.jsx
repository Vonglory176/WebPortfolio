export default function Header() {
    return (
        <section id="welcome-section">
            <div className="welcomeContainer-div sectionContainer-div col-11">
                <div className="welcomeTitle-div">
                    <img className="img-fluid" alt="Picture of Skyler" src="https://media.discordapp.net/attachments/937466658027618324/1107840420836290570/image.png"/>
                    <h1 className="text-left m-0">Hello,<br/> I'm Skyler</h1>
                </div>
                <div className="welcomeContent-div col-11">
                    <hr/>
                    <h5 className="text-center">A Junior Web-Developer</h5>
                    <p>I've been pursuing Front-End Web Development for a couple years now, learning both on my own and through my college classNamees while holding down a full-time job. Even with some bumps along the way, each project and every new hurdle taught me a great deal, and I'm keen on ironing out my skills enough to land a place in the industry. Discovering new and increasingly efficient ways to design and create something beautiful has been a blast, and I'm excited to show I have what it takes to do just that. Down below you'll find a series of projects I've built as demonstration, each (Asteroid Gauntlet aside) primarily created to explore the premise of responsive design and layout/content scaling.</p>
                    <hr/>
                </div>
            </div>
        </section>
    )
}