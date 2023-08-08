export default function Navbar() {
    return (
    <nav className="navbar navbar-dark navbar-expand-md fixed-top">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto shadow">
                <li className="navbar-item"><a href="#welcome-section">Welcome</a></li>
                <li className="navbar-item"><a href="#projects-section">Projects</a></li>
                <li className="navbar-item"><a href="#skills-section">Skills</a></li>
                <li className="navbar-item"><a href="#contact-section">Contact</a></li>
                <li className="navbar-item navbar-image-li">
                    <a href="https://www.linkedin.com/in/skyler-g-conley-1b6a33133/" className="navbar-imageLink" target="_blank"><img alt="LinkedIn logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/></a>
                    <a href="https://github.com/Vonglory176" className="navbar-imageLink" target="_blank" id="profile-link"><img alt="Github logo" src="https://www.svgrepo.com/show/475654/github-color.svg"/></a>
                </li>
            </ul>
        </div>
    </nav>
    )
}