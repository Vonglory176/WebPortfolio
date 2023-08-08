import SkillDropdownItem from "./SkillDropdownItem"

export default function SkillDropdown({title, alt, image, skills}) {

    const skillItemElements = skills.map(item => {
        return (
            <SkillDropdownItem
                key={item.id}
                checked={item.checked}
                content={item.content}
            />
        )
    })

    return (
        <div className="skillDropdown-div">
            <button className="skillDropdown-button btn btn-primary btn-lg collapsed" type="button" data-bs-target={"#" + title + "-collapse"} data-bs-toggle="collapse">
                <div className="skillDropdownButtonTitle-div">
                    <img alt={alt} src={image}/> 
                    <span>{title}</span>
                </div>
                <div className="button-arrow"></div>
            </button>

            <div className="skillDropdownCollapse-div collapse" id={title + "-collapse"}>
                {skillItemElements}
            </div>                    
        </div>
    )
}