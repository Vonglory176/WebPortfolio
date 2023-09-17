import React from 'react'
import {useInView} from 'react-intersection-observer'
import Carousel from 'react-bootstrap/Carousel';
import SkillLogo from "./SkillLogo"

export default function ProjectCard({position,imagePosition,projectLink,githubLink,projectImages,title,description,skillLogos}) {
    const {ref, inView, entry} = useInView({threshold:0.7})
    // https://www.youtube.com/watch?v=r1auJEf9ISo
    // https://github.com/thebuilder/react-intersection-observer
    // https://dev.to/producthackers/intersection-observer-using-react-49ko
    // https://youtu.be/QD4GcZJObXg

    const [index, setIndex] = React.useState(0);
    const [loadedImages, setLoadedImages] = React.useState([]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    //Determining tile shift direction
    const reverse = Boolean(position%2)

    //Monitoring image load completion
    React.useEffect(() => {
        let loadedImagesArray = [];
        projectImages.forEach((image, index) => {
            const newImage = new Image();
            newImage.src = image.image;
            newImage.onload = () => {
                loadedImagesArray[index] = true;
                setLoadedImages([...loadedImagesArray]);
            };
        });
    }, [projectImages]);
    
    //Generating carousel slides for return
    let projectImageElements = []
    for (let i=0;i<projectImages.length;i++) {
        {projectImageElements.push(
        <Carousel.Item 
        key={projectImages[i].alt}
        style={{
            backgroundImage:`url(${projectImages[i].imageSmall})`,
            backgroundSize: 'cover'
            }}>
            
            <img 
            className="img-fluid" 
            alt={projectImages[i].alt} 
            src={projectImages[i].image} 
            loading="lazy"
            style={{
                objectPosition:imagePosition, 
                opacity: loadedImages[i] ? 1 : 0, //Only showing when fully loaded
                transition: '200ms ease-in-out'

            }} 
            />
        </Carousel.Item>
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
            <div ref={ref} className={"project-imageLink row-12 col-lg-7 " + 
            (reverse? "animate-middle-left" + (inView? " animate-1" : "") : 
            "animate-middle-left-reverse" + (inView? " animate-1-reverse" : ""))}>

                {/* <div className='badgeContainer-div d-flex flex-column'>
                    <a href={projectLink}  target="blank_" className="badge badge-pill bg-primary">Click for the Project!</a>
                    <a href={githubLink}  target="blank_" className="badge badge-pill bg-warning text-black">Click for the Github!</a>
                </div> */}

                <Carousel key={"slide"} activeIndex={index} onSelect={handleSelect}>
                    {projectImageElements}
                </Carousel>

            </div>
            
            {/* Content half */}
            <div ref={ref} className={"project-content col-12 col-lg-6 " + 
            (reverse? "animate-middle-right" + (inView? " animate-2" : "") : 
                      "animate-middle-right-reverse" + (inView? " animate-2-reverse" : ""))
            }>
                <h5 className="project-title">{title}</h5>
                <div className="project-description">{description}</div>
                <div className="project-tools">
                    <h5 className='m-0'>Tools:</h5>
                    {skillLogoElements}
                </div>
                <hr/>
                <div className='d-flex justify-content-center gap-2'>
                    <a href={projectLink}  target="blank_" className="btn btn-primary" role="button">View Project</a>
                    <a href={githubLink}  target="blank_" className="btn btn-warning text-black" role="button">View Github Repo</a>
                </div>
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