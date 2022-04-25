import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "../Skills/skills.component";
import Projects from '../Projects/projects.component';
import Contact from '../Contact/contact.component';
import ProfileImage from '../../assets/prof.jpg';
import './index.component.styles.css';
import Certifications from "../Certifications/certifications.component";

class Index extends Component {
    render () {
        return (
            <div className='index-div'>
                <div className="sidebar">
                    <div className="sidebar-div-1">
                        <img alt='Profile' src={ProfileImage} className="profile-image" />
                        <h2 align="center">Anand Kalyanaraman</h2>
                    </div>
                    <div className="sidebar-div-2">
                        <Link className="link-page" to="/">Skills</Link>
                        <Link className="link-page" to="/projects">Projects</Link>
                        <Link className="link-page" to="/certifications">Certifications</Link>
                        <Link className="link-page" to="/contact">Contact</Link>
                    </div>
                </div>
                <hr className="hr-sep"/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        )
    }
}

export default Index;