import React, { useState } from 'react';
import P from '../image/p.png';
import { Container, Navbar } from 'react-bootstrap';
import NavLinks from './NavLinks';

const Nav = () => {
  const [wd, setwd] = useState(window.innerWidth);
  const handle = () => {
    setwd(window.innerWidth);
  }
  window.addEventListener("resize", () => handle())
  return (
    <Container fluid
      className='vw-100 p-0 mt-0  '>
      <Navbar
        bg="dark" variant="dark">
        <Container
          className={wd > 500 ?
            'text-light  d-flex flex-row'
            :
            'text-light  d-flex flex-row justify-content-center'}>
          <Navbar.Brand>
            <div className='p-1 ms-1 d-flex flex-row'>
              <img src={P} height={35} width={25} alt="icon" />
              <h2>Paste-Bot</h2>
            </div>
          </Navbar.Brand>
          {wd > 500 && <NavLinks />}
        </Container>
      </Navbar>
    </Container>

  )
}

export default Nav