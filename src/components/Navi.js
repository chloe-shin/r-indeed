import React from 'react'
import {Nav, Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from "react-router-dom"



export default function Navi() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <Link className= "nav-link" to = "/">Home</Link>
     <Link className= "nav-link" to = "/dashboard">Dashboard</Link>
     <Link className= "nav-link" to = "/companypage">Company page</Link>

      <NavDropdown title="Candidates" id="collasible-nav-dropdown">
       <Link className= "dropdown-item" to = "/candidates">Current Candidates</Link>
       <Link className= "dropdown-item" to = "/candidates">New Candidates</Link>  
      </NavDropdown>
    </Nav>
    <Nav>
      <Link className = "nav-link active" eventkey="2" to = "/login">
        Log In
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
