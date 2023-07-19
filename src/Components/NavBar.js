import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

export class NavBar extends Component {
  static propTypes = {}
  render() {
    return (
      <div>
          <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
            <Container fluid>
              <Navbar.Brand to="/">NewsApp</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auTo my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                  <LinkContainer to="/business"><Nav.Link>Business</Nav.Link></LinkContainer>
                  <LinkContainer to="/entertainment"><Nav.Link>Entertainment</Nav.Link></LinkContainer>
                  <LinkContainer to="/general"><Nav.Link>General</Nav.Link></LinkContainer>
                  <LinkContainer to="/technology"><Nav.Link>Technology</Nav.Link></LinkContainer>
                  <LinkContainer to="/sports"><Nav.Link>Sports</Nav.Link></LinkContainer>
                  <LinkContainer to="/science"><Nav.Link>Science</Nav.Link></LinkContainer>
                  <LinkContainer to="/health"><Nav.Link>Health</Nav.Link></LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
        );
      
}
}
export default NavBar;