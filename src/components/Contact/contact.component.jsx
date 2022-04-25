import { Component } from "react";
import emailjs from '@emailjs/browser';
import './contact.component.styles.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            from_name: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    sendEmail = async (event) => {
        await emailjs.sendForm('service_67wpruf', 'template_dnnk79f', event.target, 'g3ZAOEI3lioZaSi8c');
        alert("Message sent successfully!");
    }

    render () {
        return (
            <div className="contact">
                <h2>Contact Form</h2>
                <form className="form" onSubmit={this.sendEmail}>
                    <div className="form-element">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder="Enter your name here..." onChange={this.handleChange}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="from_name">Email:</label>
                        <input type="email" name="from_name" placeholder="Enter your email address here..." onChange={this.handleChange}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" placeholder="Enter your message here..." onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-element btn-div">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;