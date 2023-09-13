import React from 'react'
import { useInView} from 'react-intersection-observer'
import SkillLogo from "./SkillLogo"

export default function ProjectCard({position,link,projectImages,title,description,skillLogos}) {
    const {ref, inView, entry} = useInView({threshold:0.7})
    // https://www.youtube.com/watch?v=r1auJEf9ISo
    // https://github.com/thebuilder/react-intersection-observer
    // https://dev.to/producthackers/intersection-observer-using-react-49ko
    // https://youtu.be/QD4GcZJObXg
    
    //Determining tile shift direction
    const reverse = Boolean(position%2)

    //Generating carousel slides
    let projectImageElements = []
    for (let i=0;i<projectImages.length;i++) {
        {projectImageElements.push(
            <div className={"carousel-item" + (i===0? " active":"")}>
            <img className="img-fluid" alt={projectImages[i].alt} src={projectImages[i].image}/>
        </div>
        )}
    }

    //Generating tool images
    let skillLogoElements = skillLogos.map(item => {
        return(
            <SkillLogo 
                key={item}
                name={item}
                noName={true}
            />
        )
    })

    return (
        <div className="project-card card col-11 col-md-9 col-lg-11 col-xl-10">
            {/* Carousel half */}
            <a ref={ref} className={"project-imageLink row-12 col-lg-7 " + 
            (reverse? "animate-middle-left" + (inView? " animate-1" : "") : 
            "animate-middle-left-reverse" + (inView? " animate-1-reverse" : ""))
        } 
            href={link}  target="blank_"> {/* animate-middle-left*/}
                <span className="badge badge-pill bg-primary">Click to visit!</span>
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {projectImageElements}
                    </div>
                </div>
            </a>
            
            {/* Content half */}
            <div ref={ref} className={"project-content col-12 col-lg-6 " + 
            (reverse? "animate-middle-right" + (inView? " animate-2" : "") : 
                      "animate-middle-right-reverse" + (inView? " animate-2-reverse" : ""))
            }> {/* animate-middle-right*/}
                <h5 className="project-title">{title}</h5>
                {/* <p className="project-description">{description}</p> */}
                <div className="project-description">{description}</div>
                {/* <hr/> */}
                <div className="project-tools">
                    <h5 className='m-0'>Tools used:</h5>
                    {skillLogoElements}
                </div>
                <hr/>
            </div>
        </div>

        // <div className="project-card card col-11 col-md-9 col-lg-11 col-xl-10">
        //     {/* Carousel half */}
        //     <a className={"project-imageLink row-12 col-lg-7 " + (reverse? "animate-middle-left" : "animate-middle-left-reverse")} href={link}  target="blank_"> {/* animate-middle-left*/}
        //         <span className="badge badge-pill bg-primary">Click to visit!</span>
        //         <div className="carousel slide" data-bs-ride="carousel">
        //             <div className="carousel-inner">
        //                 {projectImageElements}
        //             </div>
        //         </div>
        //     </a>
        //     {/* Content half */}
        //     <div className={"project-content col-12 col-lg-6 " + (reverse? "animate-middle-right" : " animate-middle-right-reverse")}> {/* animate-middle-right*/}
        //         <h5 className="project-title">{title}</h5>
        //         <p className="project-description">{description}</p>
        //         <hr/>
        //         <h5>Tools used</h5>
        //         <div className="project-tools">
        //             {skillLogoElements}
        //         </div>
        //         <hr/>
        //     </div>
        // </div>
    )
}