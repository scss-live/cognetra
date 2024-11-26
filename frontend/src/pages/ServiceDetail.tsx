import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
    FaBullhorn, FaLightbulb, FaCode, FaRegChartBar,
    FaUsers, FaPalette, FaMobile, FaChartLine,
    FaUserTie, FaShieldAlt, FaIndustry, FaNetworkWired,
    FaHandshake, FaGraduationCap, FaCogs, FaHeadset
} from 'react-icons/fa';

interface ServiceDetail {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    longDescription: string;
    benefits: string[];
    process: {
        title: string;
        description: string;
    }[];
    deliverables: string[];
}

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const services: Record<string, ServiceDetail> = {
        '1': {
            id: 1,
            title: 'Digital Marketing',
            description: 'Strategic digital marketing solutions to amplify your brand presence and drive growth.',
            icon: <FaBullhorn size={40} />,
            longDescription: 'Our digital marketing services are designed to help businesses thrive in the digital age. We combine data-driven strategies with creative excellence to deliver measurable results.',
            benefits: [
                'Increased online visibility and brand awareness',
                'Higher quality leads and conversions',
                'Improved ROI on marketing spend',
                'Better audience engagement and retention',
                'Data-driven insights for continuous improvement'
            ],
            process: [
                {
                    title: 'Discovery & Analysis',
                    description: 'We analyze your current digital presence, competitors, and target audience to develop a customized strategy.'
                },
                {
                    title: 'Strategy Development',
                    description: 'Creating a comprehensive digital marketing plan aligned with your business goals.'
                },
                {
                    title: 'Implementation',
                    description: 'Executing the strategy across various digital channels while monitoring performance.'
                },
                {
                    title: 'Optimization',
                    description: 'Continuous monitoring and optimization of campaigns for maximum ROI.'
                }
            ],
            deliverables: [
                'Monthly performance reports',
                'Campaign analytics and insights',
                'Content calendar and strategy',
                'SEO recommendations and implementation',
                'Social media management and growth'
            ]
        },
        '5': {
            id: 5,
            title: 'HR & Manpower Solutions',
            description: 'Comprehensive HR services and manpower solutions for businesses of all sizes.',
            icon: <FaUserTie size={40} />,
            longDescription: 'Our HR & Manpower Solutions help businesses optimize their human resources operations and find the right talent to drive growth.',
            benefits: [
                'Access to qualified talent pool',
                'Reduced recruitment time and costs',
                'Improved employee retention',
                'Enhanced HR processes and compliance',
                'Professional development programs'
            ],
            process: [
                {
                    title: 'Needs Assessment',
                    description: 'Understanding your organization\'s HR requirements and challenges.'
                },
                {
                    title: 'Strategy Planning',
                    description: 'Developing customized HR solutions and recruitment strategies.'
                },
                {
                    title: 'Implementation',
                    description: 'Executing HR programs and recruitment campaigns.'
                },
                {
                    title: 'Monitoring & Support',
                    description: 'Ongoing support and optimization of HR processes.'
                }
            ],
            deliverables: [
                'Talent acquisition and management',
                'HR policy development and implementation',
                'Performance management systems',
                'Training and development programs',
                'HR compliance and documentation'
            ]
        },
        '6': {
            id: 6,
            title: 'Security Services',
            description: 'End-to-end security solutions for physical and digital assets.',
            icon: <FaShieldAlt size={40} />,
            longDescription: 'Our comprehensive security services protect your business assets, both physical and digital, ensuring peace of mind and regulatory compliance.',
            benefits: [
                'Enhanced protection of assets and data',
                'Reduced security risks and vulnerabilities',
                'Compliance with security regulations',
                'Real-time monitoring and threat detection',
                'Rapid incident response capabilities'
            ],
            process: [
                {
                    title: 'Security Assessment',
                    description: 'Comprehensive evaluation of current security measures and identification of vulnerabilities.'
                },
                {
                    title: 'Solution Design',
                    description: 'Development of tailored security protocols and systems based on assessment findings.'
                },
                {
                    title: 'Implementation',
                    description: 'Deployment of security measures, including both physical and cybersecurity solutions.'
                },
                {
                    title: 'Monitoring & Maintenance',
                    description: 'Continuous security monitoring and regular system updates to maintain optimal protection.'
                }
            ],
            deliverables: [
                'Security system implementation',
                'Access control systems',
                'Cybersecurity measures',
                'Security staff training',
                'Regular security audits and reports'
            ]
        },
        '7': {
            id: 7,
            title: 'Industrial Solutions',
            description: 'Specialized solutions for manufacturing and industrial sectors.',
            icon: <FaIndustry size={40} />,
            longDescription: 'Our industrial solutions streamline manufacturing processes, optimize operations, and enhance productivity through cutting-edge technology and proven methodologies.',
            benefits: [
                'Increased operational efficiency',
                'Reduced production costs',
                'Improved quality control',
                'Enhanced workplace safety',
                'Optimized resource utilization'
            ],
            process: [
                {
                    title: 'Industrial Assessment',
                    description: 'Thorough analysis of current industrial processes and identification of improvement areas.'
                },
                {
                    title: 'Solution Engineering',
                    description: 'Design of customized industrial solutions and automation systems.'
                },
                {
                    title: 'Implementation',
                    description: 'Deployment of industrial solutions with minimal disruption to operations.'
                },
                {
                    title: 'Optimization',
                    description: 'Continuous monitoring and refinement of implemented solutions.'
                }
            ],
            deliverables: [
                'Process automation systems',
                'Quality control protocols',
                'Industrial IoT integration',
                'Performance monitoring tools',
                'Staff training and documentation'
            ]
        },
        '13': {
            id: 13,
            title: 'Business Consulting',
            description: 'Strategic guidance for business growth and optimization.',
            icon: <FaHandshake size={40} />,
            longDescription: 'Our business consulting services provide expert guidance to help organizations optimize their operations, drive growth, and achieve their strategic objectives.',
            benefits: [
                'Improved business efficiency',
                'Strategic growth planning',
                'Enhanced decision-making',
                'Risk mitigation strategies',
                'Competitive advantage development'
            ],
            process: [
                {
                    title: 'Business Analysis',
                    description: 'In-depth analysis of current business operations and market position.'
                },
                {
                    title: 'Strategy Development',
                    description: 'Creation of customized strategies aligned with business objectives.'
                },
                {
                    title: 'Implementation Support',
                    description: 'Guidance and support throughout strategy implementation.'
                },
                {
                    title: 'Performance Monitoring',
                    description: 'Tracking and measuring the impact of implemented strategies.'
                }
            ],
            deliverables: [
                'Strategic business plan',
                'Process optimization recommendations',
                'Risk assessment reports',
                'Performance metrics dashboard',
                'Implementation roadmap'
            ]
        },
        '15': {
            id: 15,
            title: 'Digital Transformation',
            description: 'Guide your organization through digital evolution.',
            icon: <FaCogs size={40} />,
            longDescription: 'We help organizations embrace digital technologies and modernize their operations to stay competitive in the digital age.',
            benefits: [
                'Enhanced operational efficiency',
                'Improved customer experience',
                'Increased agility and innovation',
                'Better data-driven decisions',
                'Competitive advantage in digital space'
            ],
            process: [
                {
                    title: 'Digital Assessment',
                    description: 'Evaluation of current digital maturity and transformation opportunities.'
                },
                {
                    title: 'Transformation Strategy',
                    description: 'Development of comprehensive digital transformation roadmap.'
                },
                {
                    title: 'Technology Implementation',
                    description: 'Integration of digital solutions and technologies.'
                },
                {
                    title: 'Change Management',
                    description: 'Supporting organizational adaptation to digital changes.'
                }
            ],
            deliverables: [
                'Digital transformation roadmap',
                'Technology implementation plan',
                'Change management strategy',
                'Digital capability assessment',
                'Training and support documentation'
            ]
        }
        // More services can be added following the same pattern
    };

    const service = services[id || '1'];

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <>
            <Helmet>
                <title>{service.title} | Our Services</title>
                <meta name="description" content={service.description} />
            </Helmet>

            <div className="service-detail-hero py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className="mx-auto text-center text-white">
                            <div className="service-icon-wrapper mx-auto mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                {service.icon}
                            </div>
                            <h1 className="display-4 fw-bold mb-4">{service.title}</h1>
                            <p className="lead mb-0">{service.description}</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <div className="mb-5">
                                <h2 className="h3 mb-4">Overview</h2>
                                <p className="lead">{service.longDescription}</p>
                            </div>

                            <div className="mb-5">
                                <h2 className="h3 mb-4">Benefits</h2>
                                <ul className="benefit-list">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-5">
                                <h2 className="h3 mb-4">Our Process</h2>
                                <Row>
                                    {service.process.map((step, index) => (
                                        <Col md={6} key={index} className="mb-4">
                                            <Card className="h-100 border-0 shadow-sm">
                                                <Card.Body>
                                                    <h3 className="h5 mb-3">{step.title}</h3>
                                                    <p className="mb-0">{step.description}</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            <div className="mb-5">
                                <h2 className="h3 mb-4">What You Get</h2>
                                <ul className="deliverable-list">
                                    {service.deliverables.map((deliverable, index) => (
                                        <li key={index}>{deliverable}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ServiceDetail;
