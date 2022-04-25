import { Component } from "react";
import CertificationIcon from '../../assets/certificate.png';
import Certificate1 from '../../assets/certificate-c++.jpg';
import Certificate2 from '../../assets/certificate-python.jpg';
import './certifications.component.styles.css';

class Certifications extends Component {
    render () {
        return (
            <div className="certifications">
                <img src={CertificationIcon} alt='' />
                <h2>Certifications</h2>
                <div className="certificate-container">
                    <div className="cert-div">
                        <img src={Certificate1} alt='' name='cert1' />
                        <label htmlFor="cert1">Programming in C++</label>
                    </div>
                    <div className="cert-div">
                        <img src={Certificate2} alt='' name='cert2' />
                        <label htmlFor="cert2">Programming in Python</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Certifications;