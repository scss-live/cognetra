import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">About Us</h5>
                        <p>
                            We are a leading digital marketing agency helping businesses grow their online presence
                            through innovative strategies and proven solutions.
                        </p>
                        <div className="social-links">
                            <a href="https://facebook.com" className="text-light me-3">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-light me-3">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-light me-3">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-light">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/about" className="text-light text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="text-light text-decoration-none">
                                    Services
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blog" className="text-light text-decoration-none">
                                    Blog
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="text-light text-decoration-none">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                123 Marketing Street, Digital City
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                +1 234 567 890
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope me-2"></i>
                                info@digitalagency.com
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Digital Marketing Agency. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link to="/privacy-policy" className="text-light text-decoration-none me-3">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-light text-decoration-none">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
