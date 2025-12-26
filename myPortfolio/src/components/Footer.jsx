import "./footer.css"
import x from '../assets/x.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';
import Contact from "./contact";
import { Link } from "react-scroll";

export default function Footer(){
    return <div className="footer section">
        <div>
            <h4>social Links</h4>
            <div className="social-icons">
                <a href="https://x.com/piiyuuush" target='blank'><img src={x} className='social-logo' alt="hero" /></a>
                <a href="https://www.instagram.com/piiyuuush/" target='blank'><img src={instagram} className='social-logo' alt="hero" /></a>
                <img src={youtube} className='social-logo' alt="hero" />
                <a href="https://www.linkedin.com/in/piiyuuush/" target='blank'><img src={linkedin} className='social-logo' alt="hero" /></a>
            </div>
            <p className="small-body-font">pibaspam@gmail.com</p>
        </div>
        <div>
            <h4>Quick Links</h4>
            <ul className="quick-links">
                <li><Link to="home"  smooth={true} offset={-69} duration={300}>Home</Link></li>
                <li><Link to="about" smooth={true} offset={-69} duration={300}>About</Link></li>
                <li><Link to="skill" smooth={true} offset={-69} duration={300}>Skills</Link></li>
                <li><Link to="project" smooth={true} offset={-69} duration={300}>Projects</Link></li>
            </ul>
        </div>
        <div>
           <h4>Explore resources</h4>
           <ul className="quick-links">
                <li>Will</li>
                <li>update</li>
                <li>this</li>
                <li>later</li>
            </ul>
        </div>
        <div>
            <h4>Contact me</h4>
            <Contact/>
        </div>
    </div>

}