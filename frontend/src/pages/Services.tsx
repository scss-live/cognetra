import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    FaSearch, FaUsers, FaMegaport, FaRegChartBar,
    FaCode, FaCamera, FaPalette, FaBullhorn, 
    FaChartLine, FaMobile, FaUserTie, FaLock,
    FaGlobe, FaCogs, FaHeadset, FaLightbulb,
    FaShieldAlt, FaIndustry, FaHandshake, FaNetworkWired, 
    FaDatabase, FaRobot, FaGraduationCap
} from 'react-icons/fa';

const Services: React.FC = () => {
    const coreServices = [
        {
            id: 1,
            title: 'Digital Marketing',
            description: 'Strategic digital marketing solutions to amplify your brand presence and drive growth.',
            icon: <FaBullhorn size={40} className="service-icon" />,
            features: [
                'Search Engine Optimization (SEO)',
                'Social Media Marketing',
                'Content Marketing',
                'Pay-Per-Click Advertising'
            ],
            color: '#FF6B6B'
        },
        {
            id: 2,
            title: 'Brand Strategy',
            description: 'Crafting unique brand identities that resonate with your target audience.',
            icon: <FaLightbulb size={40} className="service-icon" />,
            features: [
                'Brand Identity Development',
                'Market Research',
                'Competitive Analysis',
                'Brand Guidelines'
            ],
            color: '#4ECDC4'
        },
        {
            id: 3,
            title: 'Web Development',
            description: 'Creating stunning, responsive websites that drive conversions.',
            icon: <FaCode size={40} className="service-icon" />,
            features: [
                'Custom Website Development',
                'E-commerce Solutions',
                'Web Applications',
                'CMS Development'
            ],
            color: '#45B7D1'
        },
        {
            id: 4,
            title: 'Performance Marketing',
            description: 'Data-driven marketing strategies for measurable business growth.',
            icon: <FaRegChartBar size={40} className="service-icon" />,
            features: [
                'Conversion Rate Optimization',
                'Marketing Analytics',
                'Lead Generation',
                'ROI Tracking'
            ],
            color: '#96CEB4'
        }
    ];

    const businessServices = [
        {
            id: 5,
            title: 'HR & Manpower Solutions',
            description: 'Comprehensive HR services and manpower solutions for businesses of all sizes.',
            icon: <FaUserTie size={40} className="service-icon" />,
            features: ['Recruitment & Staffing', 'HR Consulting', 'Training & Development', 'Performance Management'],
            color: '#85506D'
        },
        {
            id: 6,
            title: 'Security Services',
            description: 'End-to-end security solutions for physical and digital assets.',
            icon: <FaShieldAlt size={40} className="service-icon" />,
            features: ['Cybersecurity', 'Physical Security', 'Access Control', 'Security Audits'],
            color: '#92647B'
        },
        {
            id: 7,
            title: 'Industrial Solutions',
            description: 'Specialized solutions for manufacturing and industrial sectors.',
            icon: <FaIndustry size={40} className="service-icon" />,
            features: ['Process Automation', 'Quality Control', 'Supply Chain Management', 'Industrial IoT'],
            color: '#a0778B'
        },
        {
            id: 8,
            title: 'IT Infrastructure',
            description: 'Robust IT solutions for modern business needs.',
            icon: <FaNetworkWired size={40} className="service-icon" />,
            features: ['Network Setup', 'Cloud Solutions', 'System Integration', 'IT Support'],
            color: '#Bfa380'
        }
    ];

    const specializedServices = [
        {
            id: 9,
            title: 'Social Media Management',
            description: 'Comprehensive social media solutions to build and engage your community.',
            icon: <FaUsers size={40} className="service-icon" />,
            color: '#D4A5A5'
        },
        {
            id: 10,
            title: 'Content Creation',
            description: 'Engaging content that tells your brand story and connects with your audience.',
            icon: <FaPalette size={40} className="service-icon" />,
            color: '#9FA4C4'
        },
        {
            id: 11,
            title: 'Mobile Solutions',
            description: 'Mobile-first strategies and app development for the modern audience.',
            icon: <FaMobile size={40} className="service-icon" />,
            color: '#B3CDD1'
        },
        {
            id: 12,
            title: 'Analytics & Insights',
            description: 'Data-driven insights to optimize your marketing performance.',
            icon: <FaChartLine size={40} className="service-icon" />,
            color: '#FFB6B9'
        }
    ];

    const enterpriseServices = [
        {
            id: 13,
            title: 'Business Consulting',
            description: 'Strategic guidance for business growth and optimization.',
            icon: <FaHandshake size={40} className="service-icon" />,
            features: ['Strategy Development', 'Process Optimization', 'Change Management', 'Risk Assessment'],
            color: '#Af8c9c'
        },
        {
            id: 14,
            title: 'Training & Education',
            description: 'Professional development and training programs.',
            icon: <FaGraduationCap size={40} className="service-icon" />,
            features: ['Corporate Training', 'Skill Development', 'Certification Programs', 'Workshop Facilitation'],
            color: '#Bfa380'
        },
        {
            id: 15,
            title: 'Digital Transformation',
            description: 'Guide your organization through digital evolution.',
            icon: <FaCogs size={40} className="service-icon" />,
            features: ['Technology Assessment', 'Digital Strategy', 'Implementation', 'Change Management'],
            color: '(245,245,245)'
        },
        {
            id: 16,
            title: 'Customer Support',
            description: '24/7 customer support and service solutions.',
            icon: <FaHeadset size={40} className="service-icon" />,
            features: ['Help Desk', 'Technical Support', 'Customer Service', 'Support Training'],
            color: 'rgb(255, 222, 173)'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Services | Comprehensive Business Solutions</title>
                <meta name="description" content="From digital marketing and brand strategy to HR solutions and IT infrastructure - comprehensive business solutions for your success." />
            </Helmet>

            <div className="services-hero bg-success text-white py-5 pt-5">
                <Container>
                    <Row className="align-items-center min-vh-75 pt-5">
                        <Col lg={8} className="mx-auto text-center text-cst">
                            <h1 className="display-4 fw-bold mb-4 ">Transform Your Business</h1>
                            <p className="lead mb-5">Comprehensive solutions for digital excellence and business growth</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="core-services py-5">
                <Container>
                    <h2 className="text-center mb-5">Digital Marketing & Brand Solutions</h2>
                    <Row>
                        {coreServices.map(service => (
                            <Col key={service.id} lg={6} className="mb-4">
                                <Card className="service-card h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="service-icon-wrapper mb-4 p-2 rounded" style={{ backgroundColor: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3 className="h4 mb-3">{service.title}</h3>
                                        <p className="mb-4">{service.description}</p>
                                        <ul className="feature-list">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Link to={`/services/${service.id}`} className="btn btn-outline-primary mt-3">
                                            Learn More
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="business-services py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Business Solutions</h2>
                    <Row>
                        {businessServices.map(service => (
                            <Col key={service.id} lg={6} className="mb-4">
                                <Card className="service-card h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="service-icon-wrapper mb-4 p-2 rounded" style={{ backgroundColor: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3 className="h4 mb-3">{service.title}</h3>
                                        <p className="mb-4">{service.description}</p>
                                        <ul className="feature-list">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Link to={`/services/${service.id}`} className="btn btn-outline-primary mt-3">
                                            Learn More
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="specialized-services py-5">
                <Container>
                    <h2 className="text-center mb-5">Specialized Solutions</h2>
                    <Row>
                        {specializedServices.map(service => (
                            <Col key={service.id} md={6} lg={3} className="mb-4">
                                <Card className="specialized-card h-100 border-0 shadow-sm text-center">
                                    <Card.Body className="p-4">
                                        <div className="service-icon-wrapper mb-3 p-4 rounded " style={{ backgroundColor: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3 className="h5 mb-3">{service.title}</h3>
                                        <p className="mb-0">{service.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="enterprise-services py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Enterprise Solutions</h2>
                    <Row>
                        {enterpriseServices.map(service => (
                            <Col key={service.id} lg={6} className="mb-4">
                                <Card className="service-card h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="service-icon-wrapper mb-4 p-2 rounded" style={{ backgroundColor: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3 className="h4 mb-3">{service.title}</h3>
                                        <p className="mb-4">{service.description}</p>
                                        <ul className="feature-list">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Link to={`/services/${service.id}`} className="btn btn-outline-primary mt-3">
                                            Learn More
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="cta-section py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <h2 className="mb-4">Ready to Transform Your Business?</h2>
                            <p className="lead mb-4">Let's discuss how our comprehensive solutions can help achieve your goals</p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Get Started
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
