import "./FormStyles.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c2t80ke', 'template_nuaefgq', form.current, 'nAqlAvUdqZCA71O2K')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="username"></input>
                <label>Email</label>
                <input type="email" name="email"></input>
                <label>Subject</label>
                <input type="text" name="subject"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here" name="message"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Form;