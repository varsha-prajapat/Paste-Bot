import React, { useState } from 'react';
import P from '../image/p.png';
import { Container, Navbar } from 'react-bootstrap';
import NavLinks from './NavLinks';

const Navbars = () => {
  const [windows, setwindow] = useState(window.innerWidth);
  const handle = () => {
    setwindow(window.innerWidth);
  }
  window.addEventListener("resize", () => handle())
  return (
    <Container fluid
      className='vw-100 p-0 mt-0  d-flex  justify-content-center '>
      <Navbar
        className="w-100  d-flex justify-content-center"
        bg="dark" variant="dark" expand="sm">
        <Container
          className='text-light  d-flex '>
          <Navbar.Brand>
            <div className='d-flex ms-1 '>
              <img src={P} height={30} width={30} alt="icon" />
              <h5>Paste-Bot</h5>
            </div>
          </Navbar.Brand>
          {windows > 500 && <NavLinks />}
        </Container>
      </Navbar>
    </Container>

  )
}

export default Navbars