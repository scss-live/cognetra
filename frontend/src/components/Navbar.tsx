import React from 'react';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/logo.jpg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BsNavbar bg="light" expand="lg" className="mb-3">
    <Container>
      <BsNavbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Digital Marketing Agency" height="40" />
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar" />
      <BsNavbar.Collapse id="basic-navbar">
        <Nav className="mx-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          <Nav.Link onClick={() => navigate('/services')}>Services</Nav.Link>
          <Nav.Link onClick={() => navigate('/blog')}>Blog</Nav.Link>
          <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
          <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </Container>
  </BsNavbar>
  
  );
};

export default Navbar;
