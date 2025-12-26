import './about.css'
import Button from '../components/Button'
import Image from "../assets/pic2.jpg"
import { Element, Link } from 'react-scroll';

export default function About(){
    return <Element name='about'>
    <div id='about' className="about section">
        <div>
            <h1>About me</h1>
            <p className='small-body-font'>There's a little about me</p>
        </div>
        <div className="about-content">
            <img src={Image} alt="piiyuuush"className='pic1'/>
            <div className="about-text-content">
                <div className="heading">Want to know more about me?</div>
                <p className='text'>I’m Piyush Bhandari, a 21-year-old Computer Engineering student focused on web development and design. I work across front-end and full-stack development, with strong interests in core computer science areas such as cloud computing, data structures, and operating systems. I emphasize clean architecture, version control, and performance optimization, and I aim to actively contribute to impactful projects and the open-source community.</p>
                <div className="btnbox">
                    <Button text="Download CV" type="active"/>
                    <Link to="project" smooth={true} offset={-69} duration={300}><Button text="Projects" type="inactive"/></Link>
                </div>
            </div>
        </div>
    </div>
    </Element>
}