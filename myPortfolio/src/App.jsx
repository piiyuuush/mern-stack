import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Edu from "./sections/Edu";
import Skill from "./sections/skill";
import Project from "./sections/Project";
import Footer from "./components/Footer";

import './app.css';

export default function App(){
    return <>
    <div className="wip">Currently work in progress. Use a desktop to view the site</div>
    <Navbar/>
    <div className="main">
        <Home />
        <About/>
        <Edu/>
        <Skill/>
        <Project/>
        <Footer/>
    </div>
    </>;
}