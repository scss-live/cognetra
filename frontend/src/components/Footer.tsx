import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Cognetra</h5>
            <p>Your trusted partner in digital transformation.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><span onClick={() => navigate('/')} className="text-light" style={{ cursor: 'pointer' }}>Home</span></li>
              <li><span onClick={() => navigate('/about')} className="text-light" style={{ cursor: 'pointer' }}>About</span></li>
              <li><span onClick={() => navigate('/services')} className="text-light" style={{ cursor: 'pointer' }}>Services</span></li>
              <li><span onClick={() => navigate('/blog')} className="text-light" style={{ cursor: 'pointer' }}>Blog</span></li>
              <li><span onClick={() => navigate('/contact')} className="text-light" style={{ cursor: 'pointer' }}>Contact</span></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <address>
              <p>123 Business Street<br />
              City, State 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@cognetra.com</p>
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Cognetra. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
