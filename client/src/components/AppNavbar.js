import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <Row className="align-items-center">
              <Col>
                <NavbarBrand href="/">Favorite Anime</NavbarBrand>
              </Col>
              <Col>
                <NavbarToggler onClick={this.toggle} />
              </Col>
              <Col>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="https://github.com/MiguelBio10">Github</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
