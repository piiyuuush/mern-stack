import './navbar.css'
import Button from './Button'
import { Link } from "react-scroll";

export default function Navbar(){
    return <>
        <div className="navbar section">
            <Link to="home" className="logo-font" smooth={true} offset={-69} duration={300}>Piiyuuush</Link>
            <div className="links">
                <div className="navlinks link-font">
                    <Link to="home"  smooth={true} offset={-69} duration={300}>Home</Link>
                    <Link to="about" smooth={true} offset={-69} duration={300}>About</Link>
                    <Link to="skill" smooth={true} offset={-69} duration={300}>Skills</Link>
                    <Link to="project" smooth={true} offset={-69} duration={300}>Projects</Link>
                </div>
                <Link to="contact" smooth duration={300}><Button text="contact me" type="active"/></Link>
            </div>
        </div>
    </>
}