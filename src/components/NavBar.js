import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Button from 'react-bootstrap/Button';

export default () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">fcr3.github.io</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about/">About Me</Nav.Link>
        <Nav.Link href="/projects/">Projects</Nav.Link>
        <Nav.Link href="/designs/">Designs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

/**
<header style={{ marginBottom: `1.5rem` }}>
  <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
    <h3 style={{ display: `inline` }}>MySweetSite</h3>
  </Link>
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
</header>
**/

/**
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
**/
