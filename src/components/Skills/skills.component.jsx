import { Component } from "react";
import SkillsImage from "../../assets/skills.png";
import ListImage from "../../assets/list-image.png";
import './skills.component.styles.css';

class Skills extends Component {
    render () {
        return (
            <div className="skills">
                <img src={SkillsImage} alt="Skills" className="skills-image"/>
                <h2>Skills & Technologies</h2>
                <div className="div-align">
                    <div className="div-align-div">
                        <h3>Languages</h3>
                        <ul className="div-align-ul">
                            <div className="align-ul-li"><img src={ListImage} alt=""/><li>C++</li></div>
                            <div className="align-ul-li"><img src={ListImage} alt=""/><li>Python</li></div>
                            <div className="align-ul-li"><img src={ListImage} alt=""/><li>JavaScript</li></div>
                        </ul>
                    </div>
                    <div className="div-align-div">
                        <h3>Technologies</h3>
                        <ul className="div-align-ul">
                            <div className="align-ul-li"><img src={ListImage} alt=""/><li>React JS</li></div>
                            <div className="align-ul-li"><img src={ListImage} alt=""/><li>Node JS</li></div>
                            <div className="align-ul-li"><img src={ListImage} alt=""/><li>MongoDB</li></div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;