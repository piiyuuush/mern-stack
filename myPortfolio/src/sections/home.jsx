import './home.css'
import Button from "../components/Button";
import Image from '../assets/hero.png';
import x from '../assets/x.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import {Link, Element } from 'react-scroll';

export default function Hero(){
    return <Element name='home'>
    <div id='Home' className="hero section">
        <div className="hero-text">
            <div className="display-font">Im Piyush Bhandari, a Computer Engineer</div>
            <div className="body-font">Computer Engineering Student specializing in modern web development, UI/UX design, and performance-driven software solutions.</div>
            <div className="btnbox">
                <Link to="about" smooth={true} offset={-69} duration={300}><Button text="about me" type="active"/></Link>
                <Link to="project" smooth={true} offset={-69} duration={300}><Button text="Projects" type="inactive"/></Link>
            </div>
        </div>
        <div className="hero-illustration">
            <img src={Image} className='hero-image' alt="hero" />
            <div className="socials">
                <div className="strips"></div>
                <a href="https://x.com/piiyuuush" target='blank'><img src={x} className='social-logo' alt="hero" /></a>
                <a href="https://www.instagram.com/piiyuuush/"><img src={instagram} className='social-logo' alt="hero" /></a>
                <img src={youtube} className='social-logo' alt="hero" />
                <a href="https://www.linkedin.com/in/piiyuuush/"><img src={linkedin} className='social-logo' alt="hero" /></a>
                <div className="strips"></div>
            </div>
        </div>
    </div>
    </Element>;
}