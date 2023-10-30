import React from 'react';
import "./contact.css"

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h1>Get In Touch With Me</h1>
            <div className="contact-form-container">
                <div className="contact-form">
                    <form action="http://localhost:3001/submit-form" method="POST" className='form'>
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="sender-name"
                                placeholder="Enter Your Name"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="sender-email"
                                placeholder="Enter Your Email"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                cols="60"
                                rows="10"
                                placeholder="Enter Your Message"
                                name="message"
                                className="input-field"
                                required
                            ></textarea>
                        </div>
                        <button
                            target="blank"
                            type="submit"
                            value="Submit"
                            id="submit-btn"
                            className="submit-btn"
                        >Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};