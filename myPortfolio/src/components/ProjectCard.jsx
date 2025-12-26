import './projectcard.css'
import Button from './Button'

export default function ProjectCard(props){
    return <div className="project-card">
                <div className="button-font project-icon">{props.title}</div>
                <div className="content">
                    <h3>Portfolio Website</h3>
                    <div className="small-body-font">This very own portfolio website would be my fisrt react project which I'll make public.</div>
                    <div className="btnbox">
                        <Button text="Learn more" type="active"/>
                        <Button text="Live Demo" type="inactive"/>
                    </div>
                </div>
            </div>
}
