import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../assets/arrow-forward.svg';
import './navbar.component.styles.css';

class NavBar extends Component {
    render () {
        return (
            <nav className="nav">
                <div className="nav-div-1">
                    <h1 className="nav-div-h1"><Link className="link" to="/">Anand</Link></h1>
                    <hr />
                    <ul className="nav-div-ul">
                        <li className="nav-div-ul-li"><Link className="link" to="/">Skills</Link></li>
                        <li className="nav-div-ul-li"><Link className="link" to="/projects">Projects</Link></li>
                    </ul>
                </div>
                <div className="nav-div-2">
                    <ul className="nav-div-ul">
                        <li className="nav-div-ul-li"><Link id="arrow-link" className="link" to="/contact"><span>Contact</span><Arrow className="arrow"/></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;