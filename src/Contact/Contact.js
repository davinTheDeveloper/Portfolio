import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div id="contact">
        <div className="titleContainer" >
            <div className="title">Thanks for visiting!</div>
            </div>
            <div className="contactBox">
            <div className="contactContainer">
            <div className="contactLinks">
                <li className="emailLink">
                    <a href='mailto:davinthedeveloper@gmail.com' target="_blank" rel="noreferrer noopener"> </a>
                </li>
            </div>
            </div>
        </div>
        </div>


    );

};

export default Contact;