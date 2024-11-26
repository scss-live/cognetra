import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaTrophy, FaUsers, FaHandshake } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Digital Marketing Agency</title>
                <meta
                    name="description"
                    content="Learn about our digital marketing agency's mission, values, and expert team dedicated to growing your business online."
                />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-4">Our Story</h1>
                            <p className="lead mb-4">
                                We're a team of digital marketing experts passionate about helping
                                businesses succeed in the digital world.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="/images/about-hero.jpg"
                                alt="Our Team"
                                className="img-fluid rounded-3 shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h2 className="h1 mb-4">Our Mission</h2>
                            <p className="lead text-muted">
                                To empower businesses with innovative digital solutions that drive
                                growth and create lasting success in the digital landscape.
                            </p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-3">
                                    <FaCheckCircle className="text-primary me-2" />
                                    Delivering exceptional results for our clients
                                </li>
                                <li className="mb-3">
                                    <FaCheckCircle className="text-primary me-2" />
                                    Staying ahead of digital marketing trends
                                </li>
                                <li className="mb-3">
                                    <FaCheckCircle className="text-primary me-2" />
                                    Building long-term partnerships
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="h1 mb-4">Our Values</h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body">
                                            <FaTrophy className="text-primary mb-3" size={30} />
                                            <h3 className="h5">Excellence</h3>
                                            <p className="mb-0">
                                                We strive for excellence in everything we do
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body">
                                            <FaUsers className="text-primary mb-3" size={30} />
                                            <h3 className="h5">Collaboration</h3>
                                            <p className="mb-0">
                                                Working together to achieve common goals
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body">
                                            <FaHandshake className="text-primary mb-3" size={30} />
                                            <h3 className="h5">Integrity</h3>
                                            <p className="mb-0">
                                                Honest and transparent in all our dealings
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body">
                                            <FaCheckCircle className="text-primary mb-3" size={30} />
                                            <h3 className="h5">Innovation</h3>
                                            <p className="mb-0">
                                                Embracing new ideas and technologies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Meet Our Team</h2>
                    <div className="row g-4">
                        {[
                            {
                                name: 'John Doe',
                                position: 'CEO & Founder',
                                image: '/images/team/team-1.jpg',
                            },
                            {
                                name: 'Jane Smith',
                                position: 'Digital Marketing Director',
                                image: '/images/team/team-2.jpg',
                            },
                            {
                                name: 'Mike Johnson',
                                position: 'SEO Specialist',
                                image: '/images/team/team-3.jpg',
                            },
                            {
                                name: 'Sarah Williams',
                                position: 'Content Strategist',
                                image: '/images/team/team-4.jpg',
                            },
                        ].map((member, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="card border-0 shadow-sm">
                                    <img
                                        src={member.image}
                                        className="card-img-top"
                                        alt={member.name}
                                    />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">{member.name}</h3>
                                        <p className="text-muted mb-0">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 mb-4 mb-md-0">
                            <h2 className="display-4 fw-bold text-primary">500+</h2>
                            <p className="text-muted">Happy Clients</p>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-0">
                            <h2 className="display-4 fw-bold text-primary">1000+</h2>
                            <p className="text-muted">Projects Completed</p>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-0">
                            <h2 className="display-4 fw-bold text-primary">50+</h2>
                            <p className="text-muted">Team Members</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-primary">15+</h2>
                            <p className="text-muted">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Ready to Start Your Project?</h2>
                    <p className="lead mb-4">
                        Let's work together to achieve your digital marketing goals
                    </p>
                    <Link to="/contact" className="btn btn-light btn-lg">
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
