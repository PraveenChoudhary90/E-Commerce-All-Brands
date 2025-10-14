import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';


function Admindashboard() {

     const navigate = useNavigate();

    const Logout = ()=>{
        localStorage.clear();
        navigate("/")
    }
  return (
    <>
    <div id="admin">
        <div id="admin1">
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="addproduct">Admin Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="addproduct">Add Product</Nav.Link>
            <Nav.Link  as={Link} to="#">Features</Nav.Link>
            <Nav.Link as={Link} to="#">Pricing</Nav.Link>
          </Nav>
            <button onClick={()=>{Logout()}}>Logout</button>
        </Container>
      </Navbar>
      </div>
      <div id="admin2">
        <Outlet/>
      </div>
      </div>

    </>
  )
}

export default Admindashboard;