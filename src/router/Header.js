import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavItem, Container } from "react-bootstrap";
export default () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="mb-5"
      style={{ fontSize: "19px" }}
    >
      <Container>
        <NavLink style={{ fontSize: "19px" }} className="navbar-brand" to="/">
          Zouaoui ilyes Redux CRUD
        </NavLink>
        <Nav className="ml-auto">
          <NavLink className="nav-link" style={{ fontSize: "19px" }} to="/">
            home
          </NavLink>

          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavLink
              className="dropdown-item"
              activeClassName=""
              role="button"
              to="/blogs/create"
              style={{ fontSize: "18px" }}
            >
              create synchrone
            </NavLink>

            <NavLink
              style={{ fontSize: "18px" }}
              className="dropdown-item"
              activeClassName=""
              to="/blogs/create-async"
            >
              create asynchrone
            </NavLink>
            <NavLink
              style={{ fontSize: "18px" }}
              className="dropdown-item"
              activeClassName=""
              to="/blogs"
            >
              show list
            </NavLink>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
