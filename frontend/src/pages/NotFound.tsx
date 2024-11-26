import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>404 Not Found - Cognetra</title>
                <meta name="description" content="Page not found" />
            </Helmet>

            <Container className="py-5 text-center">
                <Row>
                    <Col md={6} className="mx-auto">
                        <h1 className="display-1">404</h1>
                        <h2 className="mb-4">Page Not Found</h2>
                        <p className="lead mb-4">
                            The page you are looking for might have been removed, had its name changed,
                            or is temporarily unavailable.
                        </p>
                        <Button 
                            variant="primary" 
                            size="lg"
                            onClick={() => navigate('/')}
                        >
                            Return Home
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NotFound;
