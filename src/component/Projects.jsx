import ProjectCard from "./ProjectCard"
import projectData from "../data/projectData"

export default function Projects() {
    const projectCardArray = projectData.map(item => {
        return (
            <ProjectCard 
            key={item.title}
            position={item.position}
            projectLink={item.projectLink}
            githubLink={item.githubLink}
            projectImages={item.projectImages}
            title={item.title}
            description={item.description}
            skillLogos={item.skillLogos}
            />
        )
    })
    
    return (
        <section id="projects-section">
            <h1 className="projects-title section-title shadow">Noteable Projects</h1>

            <div className="projectsContainer-div">
                {projectCardArray}
            </div>            
        </section>
    )
}