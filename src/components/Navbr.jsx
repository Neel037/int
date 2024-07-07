import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbr = ({ categories, onSelectCategory }) => {
  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Product Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index} onClick={() => onSelectCategory(category)}>
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbr;
