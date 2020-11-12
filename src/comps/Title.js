import React from 'react';
import { Nav, NavDropdown,Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';


const Title = () => {
  return (
    <div className="title">
      <Navbar bg="dark" expand="lg" variant="dark">
       
        <Navbar.Brand href="#home">Menu Mania</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className={"mr-auto"}> 
            <Nav.Link href="#home"> Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            
            <FormControl type="text" placeholder="Search" size="lg" className="mr-sm-2"/>
            <FaSearch
              color = "white"
              className = "icons"
              size = "1em"
            />
          
          </Form>

        </Navbar.Collapse>

      </Navbar>

    </div>
  )
}

export default Title;