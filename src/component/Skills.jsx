import skillData from "../data/skillData"
import SkillDropdown from "./SkillDropdown"
import SkillLogo from "./SkillLogo"

export default function Skills() {
    // Generating dropdowns
    const skillDropdowns = skillData.skillCategories.map(item => {
        return <SkillDropdown 
        key={item.id}
        title={item.title}
        alt={item.alt}
        image={item.image}
        skills={item.skills}
        />
    })

    //Generating skill logos
    const skillLogos = skillData.skillLogos.map(item => {
        if (item.name !== "HTML" && item.name !== "CSS") {
            return <SkillLogo 
            key={item.id}
            name={item.name}
            />
        }
    })

    return (
        <section id="skills-section">
            <h1 className="skills-title section-title">Skills and toolset<br/><span>With future plans shown <a href="https://steep-parent-61b.notion.site/Junior-Web-Developer-Checklist-1-0-aca59fa0c8864ed7809c3c0f5d3c3bc3" target="_blank"> here</a>..</span></h1>
            <div className="skillsContainer-div sectionContainer-div col-11 col-md-9">
                <div className="skillsDropdownContainer-div">
                    {skillDropdowns /* Printing Dropdowns */}
                </div>
                <div className="skillsLogoContainer-div">
                    {skillLogos /* Printing Logos */}               
                </div>
            </div>
        </section>
    )
}