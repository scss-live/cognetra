import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaRocket, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';


const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Digital Marketing Agency | Creative Solutions for Business Growth</title>
                <meta name="description" content="Transform your business with our comprehensive digital marketing solutions. We specialize in SEO, social media, content creation, and brand development." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section" style={{ 
      backgroundImage: `url("https://img.freepik.com/premium-photo/team-work-crm-manager-with-consultant-call-center-helping-talking-networking-online-overlay-woman-insurance-agent-communication-customer-services-sales-technical-support_590464-131081.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' 
    }}>
                <Container style={{}}>
                    <Row className="align-items-center min-vh-100">
                        <Col lg={6} className="hero-content">
                            <h1 className="display-3 fw-bold mb-4">
                                Transform Your Digital Presence
                            </h1>
                            <p className="lead mb-4">
                                Elevate your brand with cutting-edge digital marketing strategies and creative solutions.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/contact" className="btn btn-primary btn-lg me-3">
                                    Get Started
                                </Link>
                                <Link to="/services" className="btn btn-outline-primary btn-lg">
                                    Our Services
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} className="hero-image">
                            <img 
                                src="/images/hero-illustration.png" 
                                alt="Digital Marketing Solutions" 
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="stats-section py-5">
                <Container>
                    <Row className="text-center">
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3>98%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Expert Team</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Years Experience</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Overview */}
            <section className="services-overview py-5">
                <Container>
                    <h2 className="text-center mb-5">Our Core Services</h2>
                    <Row>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="service-card">
                                <div className="service-icon">
                                    <FaRocket />
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>Strategic campaigns that drive results</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="service-card">
                                <div className="service-icon">
                                    <FaChartLine />
                                </div>
                                <h3>SEO Optimization</h3>
                                <p>Boost your online visibility</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="service-card">
                                <div className="service-icon">
                                    <FaUsers />
                                </div>
                                <h3>Social Media</h3>
                                <p>Engage your target audience</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="service-card">
                                <div className="service-icon">
                                    <FaAward />
                                </div>
                                <h3>Brand Strategy</h3>
                                <p>Build a powerful brand identity</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Featured Work */}
            <section className="featured-work py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Featured Projects</h2>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="work-card">
                                <img 
                                    src="/images/project-1.jpg" 
                                    alt="Project 1" 
                                    className="img-fluid"
                                />
                                <div className="work-content">
                                    <h3>E-commerce Growth</h3>
                                    <p>300% increase in online sales</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="work-card">
                                <img 
                                    src="/images/project-2.jpg" 
                                    alt="Project 2" 
                                    className="img-fluid"
                                />
                                <div className="work-content">
                                    <h3>Brand Transformation</h3>
                                    <p>Complete digital makeover</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="work-card">
                                <img 
                                    src="/images/project-3.jpg" 
                                    alt="Project 3" 
                                    className="img-fluid"
                                />
                                <div className="work-content">
                                    <h3>Social Media Success</h3>
                                    <p>1M+ audience reached</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <h2 className="mb-4">Ready to Transform Your Business?</h2>
                            <p className="lead mb-4">
                                Let's create something amazing together
                            </p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Start Your Project
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
