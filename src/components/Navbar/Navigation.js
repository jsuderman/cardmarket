import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button   } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">CardMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Cart</Nav.Link>
              <NavDropdown title="Sneakers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Adidas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Under Armour</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Comic/Game Cards</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      
    )
  }
}

