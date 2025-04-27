import { isAction } from '@reduxjs/toolkit';
import React from 'react';
import { NavLink } from 'react-router-dom';
import P from '../image/p.png';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navbars = () => {
  return (
    <Container fluid className='vw-100   d-flex justify-content-center '>
      <Navbar className=' w-50 mt-4  rounded  d-flex justify-content-center' bg="dark" variant="dark" expand="sm">
        <Container className='p-0 text-light  d-flex mt-3 bg-dark  '>
          <Navbar.Brand><div className='text-light d-flex ms-1 '>
            <img src={P} height={30} width={30} />
            <h5>Paste-Bot</h5>
          </div></Navbar.Brand>
          <Navbar.Toggle className='mb-2 me-1 ' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="p-1 w-50 ms-auto  d-flex justify-content-evenly">
              <Nav.Item>
                <NavLink to='/'
                  className={({ isActive }) => isActive ? "text-decoration-none text-secondary " : "text-decoration-none text-light"}>
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to='/pastes'
                  className={({ isActive }) => isActive ? "text-decoration-none  text-secondary" : "text-decoration-none text-light"}>
                  ALL
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to='/favourite'
                  className={({ isActive }) => isActive ? "text-decoration-none text-secondary" : "text-decoration-none text-light"}>
                  Fav
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

  )
}

export default Navbars