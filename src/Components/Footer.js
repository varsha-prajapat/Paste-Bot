import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidHomeAlt2, BiClipboard, BiSolidStar } from 'react-icons/bi';
import { Container } from "react-bootstrap";

const Footers = () => {
  const [windows, setwindow] = useState(window.innerWidth);
  const handle = () => {
    setwindow(window.innerWidth)
  }
  window.addEventListener("resize", () => handle())
  return (
    <footer fixed="bottom" className="positon-relative p-0 m-0">
      {
        windows <= 500 && <Container fluid
          className="w-100  gap-4  p-2 position-absolute bottom-0 bg-dark d-flex flex-row justify-content-center">
          <NavLink to='/'
            className={({ isActive }) =>
              isActive ?
                " p-1 m-1 d-flex flex-row  text-decoration-none text-dark bg-light  rounded "
                :
                "p-1 m-1 d-flex flex-row   text-decoration-none text-light"}>
            <BiSolidHomeAlt2 size={20} />
            Home
          </NavLink>
          <NavLink to='/pastes'
            className={({ isActive }) =>
              isActive ?
                " p-1 m-1 d-flex flex-row text-decoration-none  bg-light text-dark rounded"
                :
                "p-1 m-1   d-flex flex-row text-decoration-none text-light"}>
            <BiClipboard size={20} />
            ALL
          </NavLink>
          <NavLink to='/favourite'
            className={({ isActive }) =>
              isActive ? " p-1 m-1 d-flex flex-row text-decoration-none text-dark bg-light  rounded "
                :
                "p-1 m-1 d-flex flex-row  text-decoration-none text-light"}>
            <BiSolidStar size={20} />
            Fav
          </NavLink>
        </Container>
      }
    </footer>
  );
}
export default Footers