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
        className="w-100 d-flex justify-content-center"
        bg="dark" variant="dark">
        <Container
          className={windows > 500 ? 'text-light  d-flex flex-row' : 'text-light  d-flex flex-row justify-content-center'}>
          <Navbar.Brand>
            <div className='p-1 d-flex flex-row   ms-1  '>
              <img src={P} height={35} width={25} alt="icon" />
              <h2>Paste-Bot</h2>
            </div>
          </Navbar.Brand>
          {windows > 500 && <NavLinks />}
        </Container>
      </Navbar>
    </Container>

  )
}

export default Navbars