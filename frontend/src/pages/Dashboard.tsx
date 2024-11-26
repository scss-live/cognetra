import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <Helmet>
                <title>Dashboard - Cognetra</title>
                <meta name="description" content="Manage your Cognetra account" />
            </Helmet>

            <Container className="py-5">
                <h1 className="mb-4">Dashboard</h1>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Profile</Card.Title>
                                <Card.Text>
                                    Manage your profile information and settings.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Services</Card.Title>
                                <Card.Text>
                                    View and manage your active services.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Analytics</Card.Title>
                                <Card.Text>
                                    View your service performance metrics.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
