import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Favourite = () => {
  const pastes = useSelector((state) => state.paste_bot.paste_bot);
  const fav = pastes.filter((paste) => paste.fav === true);
  const nav = useNavigate();
  function View(id) {
    nav(`/pastes/${id}`)
  }
  return (
    <Container
      className='vw-100  p-3 mt-3 mb-4  d-flex flex-column align-items-center'>
      {fav.length > 0 &&
        fav.map((favs) =>
          <Row
            className=' w-100 m-2  p-2  rounded bg-danger bg-opacity-25  border border-danger'
            key={favs._id}>
            <Col>
              <h6 className='text-light'> {favs.title}</h6>
            </Col>
            <Col className='text-light  d-flex justify-content-end '>
              <FaEye onClick={() => View(favs._id)} size={25} />
            </Col>
          </Row>)
      }
      {
        fav.length === 0 &&
        <h2
          className=' w-50  p-2  text-light text-center rounded bg-danger bg-opacity-25   border border-danger' >
          No Favourites</h2>
      }
    </Container>
  )
}

export default Favourite