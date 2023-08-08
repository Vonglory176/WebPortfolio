import ProjectCard from "./ProjectCard"
import projectData from "../data/projectData"

export default function Projects() {
    const projectCardArray = projectData.map(item => {
        return (
            <ProjectCard 
            key={item.title}
            position={item.position}
            link={item.link}
            projectImages={item.projectImages}
            title={item.title}
            description={item.description}
            skillLogos={item.skillLogos}
            />
        )
    })
    
    return (
        <section id="projects-section">
            <h1 className="projects-title section-title shadow">Recent projects</h1>

            <div className="projectsContainer-div">
                {projectCardArray}
            </div>            
        </section>
    )
}