import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export function NavProduct() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="Navproduct">
        <Container>
          <Navbar.Brand href="/EBook">Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Music">Music</Nav.Link>
            <Nav.Link href="/Videos">Videos</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}
export default NavProduct;        