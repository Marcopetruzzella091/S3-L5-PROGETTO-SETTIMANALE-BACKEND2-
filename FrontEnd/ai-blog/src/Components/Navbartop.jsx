import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Navbartop() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
    <Link className='nav-link' to="/"> <Navbar.Brand href="/"><img src="logo2.png" className='w-25 toplogo' alt="" /></Navbar.Brand></Link>
     
      <Nav className="me-auto">
      <Link className='nav-link' to="/">Homepage</Link>
        <Nav.Link href="#features">Categorie</Nav.Link>
        <Nav.Link href="#pricing">Utenti</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
