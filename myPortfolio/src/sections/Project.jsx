import './project.css'
import ProjectCard from '../components/projectcard'
import { Element } from 'react-scroll'

export default function Project(){

    return <Element name='project'>
    <div id='project' className="project section">
        <div className="skill-heading">
            <h1>My Projects</h1>
            <p className='small-body-font'>Take a look at my finished projects</p>
        </div>
        <div className="project-list">
            <ProjectCard title="Piiyuuush"/>
        </div>
    </div>
    </Element>
}