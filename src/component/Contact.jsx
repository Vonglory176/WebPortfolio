export default function Contact() {
    return (
        <section id="contact-section">
            <h1 className="contact-title section-title">Want To Get In Touch?</h1>

            <div className="contactContainer-div sectionContainer-div col-11 col-md-9">
                {/* <h5>What I'm looking for</h5> */}
                {/* <p>I'm currently searching for work and am happy to look into any offers given, though my ideal for the moment is something within a team. I've made a lot of progress in my learning, but with so many nuances and techniques that go into Web Development, getting a full idea of what's possible and where the head should turn next when getting started can be quite the maze.</p> */}
                <h5>Contact Me Here</h5>
                {/* <hr/> */}

                <form className="contact-form" action="https://formsubmit.co/SkylerGConley@gmail.com" method="POST">
                    <input id="email" name="email" className="form-control" placeholder="Enter your email address.." type="email" required/>
                    <input id="name" name="name" className="form-control" placeholder="Enter your name.." type="name" required/>                    
                    <textarea id="textareaComments" className="form-control" rows="5" placeholder="Enter your message here.." required></textarea>
                    
                    <div className="contactFormAfterText-div">
                        <input id="submit" className="btn btn-primary" type="submit" value="Submit"/>
                        <div className="contactFormLogos-div">
                            <a className="logoLink" href="https://www.linkedin.com/in/skyler-g-conley-1b6a33133/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/></a>
                            <a className="logoLink" href="https://github.com/Vonglory176" target="_blank" id="profile-link"><img src="https://www.svgrepo.com/show/512317/github-142.svg"/></a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}