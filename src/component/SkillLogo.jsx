import skillData from "../data/skillData"

export default function SkillLogo({name, noName}) {
    let logo = (skillData.skillLogos.filter(item => item.id === `${name} - skillLogo`))[0]

if (logo) { // ??
    return (
        <div className="skillLogo-div">
            <img alt={logo.alt} src={logo.image}/>
            {!noName && <h6>{logo.name}</h6>}
        </div>
    )
}
}