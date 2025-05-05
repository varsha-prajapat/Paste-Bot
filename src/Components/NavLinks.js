import React from "react";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavLinks = () => {
  return (
    <Nav className="w-50 p-1 me-3 d-flex flex-row  justify-content-between">
      <Nav.Item>
        <NavLink to='/'
          className={({ isActive }) =>
            isActive ?
              "  text-decoration-none text-secondary"
              :
              "text-decoration-none text-light"}>
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/pastes'
          className={({ isActive }) =>
            isActive ?
              "text-decoration-none  text-secondary"
              :
              "text-decoration-none text-light"}>
          ALL
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/favourite'
          className={({ isActive }) =>
            isActive ? "text-decoration-none text-secondary"
              :
              "text-decoration-none text-light"}>
          Fav
        </NavLink>
      </Nav.Item>
    </Nav>
  )
}
export default NavLinks



