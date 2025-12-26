import './skill.css'
import Card from '../components/card'
import { Element } from 'react-scroll';

export default function Skill(){

    let programmingLanguages = ["Javascript", "Python", "C/C++", "Java", "mySQL", "HTML/CSS"];
    let devTool = ["Github", "VS Code", "Command Line", "AutoCad"];
    let skills = ["Database and Management", "Cloud computing","Version Control", "Data Structure", "Analysis of Algorithm", "Mathematics and science"];




    return <Element name='skill'>
    <div id='skill' className="skill section">
        <div className="skill-heading">
            <h1>My Skills</h1>
            <p className='small-body-font'>There's a little about my skill</p>
        </div>
        <div className="skill-wrapper">
            <Card title="Programming Languages" list={programmingLanguages}></Card>
            <Card title="Development Tools" list={devTool}></Card>
            <Card title="Conceptual Skills" list={skills}></Card>
        </div>
    </div>
    </Element>
}