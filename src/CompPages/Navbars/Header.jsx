import React ,{useState,useEffect}from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authExist } from "../../utils/util";

export function Header() {

const [token, setToken] = useState(false)
const userId = localStorage.getItem('userId')
  useEffect(() => {
    console.log('useeff')
    if(authExist()){
      setToken(true)
    }
  },[])
  
  function signOut() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="Headermain">
        <Container>
          <Navbar.Brand href="/"><h2>BookWorm</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Product"><h5>Products</h5></Nav.Link>
              {token && (
                <>
                  <Nav.Link href="/MyShelf"><h5>MyShelf</h5></Nav.Link>
                  <Nav.Link href="/Library"><h5>MyLibrary</h5></Nav.Link>
                  <Nav.Link href="/Account"><h5>MyAccount</h5></Nav.Link>
                  <Nav.Link href={`/cart/${userId}`}><h5>Cart</h5></Nav.Link>
                </>
              )}
              <Nav.Link href="/Aboutus"><h5>About us</h5></Nav.Link>
              <Nav.Link href="/Contactus"><h5>Contact us</h5></Nav.Link>
              <Nav.Link href="/Feedback"><h5>Feedback</h5></Nav.Link>
              {!token && (
                <Nav.Link href="/SignIn" >
                  <h5>Sign In</h5>
                </Nav.Link>
              )}
              {token && (
                <Nav.Link href="/" onClick={() => signOut()} >
                  <h5>Sign Out</h5>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
export default Header;        