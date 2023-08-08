export default function SkillDropdownItem({checked,content}) {
    return (
        <div className="skillDropdownItem-div">
            <input className="form-check-input" type="checkbox" checked={checked} readOnly /> {/*style={{margin:"5px 0 0 6px"}}*/}
            {content}
        </div>
    )
}