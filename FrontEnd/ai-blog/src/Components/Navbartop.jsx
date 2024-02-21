import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default function Navbartop() {

const [search, setSearch] = useState("");
const navigate = useNavigate();

console.log(search)

  return (<>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
    <Link className='nav-link' to="/"> <Navbar.Brand href="/"><img src="logo2.png" className='w-25 toplogo' alt="" /></Navbar.Brand></Link>
     
      <Nav className="me-auto">
      <Link className='nav-link' to="/">Homepage</Link>
        <Nav.Link href="#features">Categorie</Nav.Link>
        <Link className='nav-link' to="/allUsers">Utenti</Link>
        
      </Nav><Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success"  onClick={() => navigate("/search/" +  search) }>Cerca articolo </Button>
          </Form>
    </Container>
  </Navbar>




  </>

  )
}
