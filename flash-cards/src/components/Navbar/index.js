import React from "react"
import { Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import "./style.css"


function header(){
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Navbar.Brand  className="brand" href="#home">FFC</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navLink">Sign up</Nav.Link>
          <Nav.Link className="navLink">|</Nav.Link>
          <Nav.Link className="navLink">Log In</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
          <div className="fas fa-plus">
          <div className="mr-2 navLink">
            Create
            </div>
          </div>
          </Nav.Link>
          <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-0 searchBar" />
          <Button className="searchBtn"><span class="fas fa-search"></span></Button>
        </Form>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
        </div>
    )
}

export default header;