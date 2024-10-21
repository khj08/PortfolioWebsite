import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_of4g21i', 'template_mibu62s', form.current, {
        publicKey: 'kwrKfQQ-cV75UlJaO',
      })
      e.target.reset()
  };
  return (
    <div className="section contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
       
        <div className="contact__container container grid">

            <div className="contact__content">

                <div className="contact__info">

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <a href="mailto:katyhjaime@gmail.com" className="contact__button" target="_blank">katyhjaime@gmail.com</a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <a href="https://api.whatsapp.com/send?phone=+51924217370&text=Hello, more information!" className="contact__button" target="_blank">Escribir al +51 ...</a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/katherine-hjaime08/" className="contact__button" target="_blank">Katherine Huamanyauri Jaime</a>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Contact;