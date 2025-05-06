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
    <footer className="m-0 p-0 footer fixed-bottom  ">
      {
        windows <= 500 && <Container fluid
          className="w-100 p-1 bg-dark d-flex flex-row justify-content-around">
          <NavLink to='/'
            className={({ isActive }) =>
              isActive ?
                " p-2 m-1 d-flex flex-row  text-decoration-none text-dark bg-light  rounded-pill"
                :
                "p-2 m-1 d-flex flex-row   text-decoration-none text-light"}>
            <BiSolidHomeAlt2 size={20} />
            Home
          </NavLink>
          <NavLink to='/pastes'
            className={({ isActive }) =>
              isActive ?
                " p-2 m-1 d-flex flex-row text-decoration-none  bg-light text-dark rounded-pill"
                :
                "p-2 m-1   d-flex flex-row text-decoration-none text-light"}>
            <BiClipboard size={20} />
            ALL
          </NavLink>
          <NavLink to='/favourite'
            className={({ isActive }) =>
              isActive ?
                " p-2 m-1 d-flex flex-row text-decoration-none text-dark bg-light  rounded-pill "
                :
                "p-2 m-1 d-flex flex-row  text-decoration-none text-light"}>
            <BiSolidStar size={20} />
            Fav
          </NavLink>
        </Container>
      }
    </footer>
  );
}
export default Footers