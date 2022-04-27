import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "../Skills/skills.component";
import Projects from '../Projects/projects.component';
import Contact from '../Contact/contact.component';
import ProfileImage from '../../assets/prof.jpg';
import './index.component.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
                    <div>
                        <a className="social-media-links" href="https://www.facebook.com/anand.kalyanaraman17" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="social-media-links" href="https://www.instagram.com/anandk_17/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="social-media-links" href="https://github.com/Anand1721" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="social-media-links" href="https://www.linkedin.com/in/anand-kalyanaraman-110b271a4/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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