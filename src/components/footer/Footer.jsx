import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__list">
                <h1 className="footer__title">Katherine</h1>
                <div className="footer__social">
                    <a href="https://www.instagram.com/katy_hj08/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/katherine-hjaime08/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/khj08" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div> 
            </div>
            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>                     

        </div>
        <span className="footer__copy">&#169; Copyright © 2024 Katherine HJ. All rights reserved. Site credit.
            </span>
    </footer>
  )
}

export default Footer