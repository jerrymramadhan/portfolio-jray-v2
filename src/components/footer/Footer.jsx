import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">JRay.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualifications</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/jerrmdhn/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://open.spotify.com/user/yfk56z0oognxh7p5ddwnb8lde" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-spotify"></i>
                    </a>
                    <a href="https://twitter.com/renjermrh" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                 Created by JRay. | &#169; 2024 
                </span>
            </div>
        </footer>
    );
};

export default Footer;