import React from 'react'
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap'

function Navbarr() {
  return (
    
    <Navbar  expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand >Harpreet Bhangu</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' />
        <Nav className='me-auto'>
          <Nav.Link href='/'>Login</Nav.Link>
          <Nav.Link href='link'>Link</Nav.Link>
          <NavDropdown title="lex">
            <NavDropdown.Item>Male</NavDropdown.Item>
            <NavDropdown.Item>Female</NavDropdown.Item>
            <NavDropdown.Item>Third</NavDropdown.Item>
          </NavDropdown>
        </Nav>
       
      </Container>
    </Navbar>
    
  )
}

export default Navbarr