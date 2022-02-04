import React from 'react';
import Auth from '../../utils/auth';
import {Navbar,Nav,Container} from "react-bootstrap";





function NavigateBar(props) {

  if(Auth.loggedIn()){
    return (
      <div>
        <Navbar bg="success" expand="lg" className='navbar' variant="light">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/drinks">Drinks</Nav.Link>
        <Nav.Link href="/form">Add Menu</Nav.Link>
        <Nav.Link href="/" onClick={Auth.logout}>Logout</Nav.Link>   
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }else {
    return (
      <div>
        <Navbar bg="success" expand="lg" variant="light" className='navbar'>
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* <Link to="/Dashboard"> Dashboard </Link> */}
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/drinks">Drinks</Nav.Link>
      <Nav.Link href="/signup">Sign up</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
  
}

export default NavigateBar;