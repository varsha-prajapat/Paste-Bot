import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import P from '../image/p.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { TfiAlignRight, TfiClose } from 'react-icons/tfi';
import { TifiClose } from 'react-icons/tfi';

const Navbars = () => {
  const [openmenu, setmenu] = useState(false);
  return (
    <Container fluid
      className='vw-100 p-0 mb-2  d-flex justify-content-center '>
      <Navbar
        className="w-100 mt-0 d-flex justify-content-center bg-warning"
        bg="dark" variant="dark" expand="sm">
        <Container fluid
          className='w-100 bg-primary  text-light  d-flex  mt-3 bg-dark  '>
          <Navbar.Brand>
            <div className=' text-light d-flex ms-1 '>
              <img src={P} height={30} width={30} alt="icon" />
              <h5>Paste-Bot</h5>
            </div>
          </Navbar.Brand>
          <Nav className="p-1 mb-2  w-50 align-self-end d-flex flex-row  justify-content-between">
            <Nav.Item>
              <NavLink to='/'
                className={({ isActive }) =>
                  isActive ? "text-decoration-none text-secondary " : "text-decoration-none text-light"}>
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/pastes'
                className={({ isActive }) =>
                  isActive ? "text-decoration-none  text-secondary" : "text-decoration-none text-light"}>
                ALL
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/favourite'
                className={({ isActive }) =>
                  isActive ? "text-decoration-none text-secondary" : "text-decoration-none text-light"}>
                Fav
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Container>

  )
}

export default Navbars