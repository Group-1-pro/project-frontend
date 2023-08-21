import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footerContainer">
                    <div className="sec aboutus">
                        <h2>About Us</h2>
                        <p>
                            WanderHands is a Jordanian online website that offers the spirit of volunteerism transcends borders! Engaging in volunteer work abroad offers a unique and rewarding opportunity to immerse yourself in diverse cultures while making a positive impact on communities worldwide. Our platform connects you with transformative volunteering experiences in different countries, fostering cross-cultural understanding and global citizenship.
                        </p>
                    </div>
                    <div className="sec quickLink">
                        <h2>Quick Link</h2>
                        <ul>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/help">Help</Link></li>
                            <li><Link href="/terms-and-conditions">Term & Conditions</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contact Us</h2>
                        <ul className="info">
                            <li>
                                <span>
                                    <i className="fad fa-map-marker-alt"></i>
                                </span>
                                <span>
                                    Amman, Jordan
                                </span>
                            </li>
                            <li>
                                <span><i className="fad fa-phone"></i></span>
                                <p>
                                    <a href="tel:+962778503808">+962788888888</a> <br />
                                </p>
                            </li>
                            <li>
                                <span><i className="fad fa-envelope"></i></span>
                                <p>
                                    <a href="mailto:esmailjawabreh@gmail.com">WanderHands@gmail.com</a>
                                </p>
                            </li>
                        </ul>
                        <div className="footerWrapper">
                            <div className="social-icons">
                                <a className="social-icon mail" href="mailto:esmailjawabreh@gmail.com" target="_blank" rel="author">
                                    <i className="fa-sharp fa-solid fa-envelope"></i>
                                </a>
                                <a className="social-icon instagram" href="https://www.instagram.com/esmail.sudgi/" target="_blank" rel="author">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="social-icon github" href="https://github.com/Esmail-Jawabreh" target="_blank" rel="author">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="footerLogo">
                            <Link href="/">
                                <img src="/lesspading-removebg-preview.png" alt="Wander Hands Logo" />
                            </Link>

                        </h1>
                    </div>
                </div>
            </footer>
            <div className="copyrightText">
                <p>Copyright &copy; 2023 Wander Hands. All Rights Reserved.</p>
            </div>
        </div>
    );
}
