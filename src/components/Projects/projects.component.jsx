import { Component } from "react";
import { ReactComponent as ProjectsImage } from "../../assets/code-white.svg";
import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";
import Project3 from "../../assets/project-3.PNG";
import './projects.component.styles.css';

class Projects extends Component {
    render () {
        return (
            <div className="projects">
                <ProjectsImage className="projects-image"/>
                <h2>Projects I've Built</h2>
                <div className="div-align">
                    <div className="div-align-div">
                        <a className="a-proj" href="https://github.com/Anand1721/Notes-App" target="_blank" rel="noopener noreferrer"><img id="proj1" src={Project1} alt='' name='proj1' /></a>
                        <label htmlFor="proj1">Online Notes</label>
                    </div>
                    <div className="div-align-div">
                        <a className="a-proj" href="https://github.com/Anand1721/WeatherApp" target="_blank" rel="noopener noreferrer"><img id="proj2" src={Project2} alt='' name='proj2' /></a>
                        <label htmlFor="proj2">Weather App</label>
                    </div>
                </div>
                <div className="div-align">
                    <div className="div-align-div">
                        <a className="a-proj" href="https://github.com/Anand1721/StudentPortal" target="_blank" rel="noopener noreferrer"><img id="proj3" src={Project3} alt='' name='proj3' /></a>
                        <label htmlFor="proj3">Online Student Portal</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;