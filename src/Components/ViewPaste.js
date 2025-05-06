import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BiSolidCircle, BiCopy } from 'react-icons/bi';
import { Container, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste_bot.paste_bot);
  const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <Container
      className=' vw-50  mt-4  d-flex flex-column align-items-center'>
      <Row className=' w-100  mt-2' >
        <Col className='p-0 '>
          <input
            className=' bg-light w-100 p-1 rounded border border-dark '
            type="text"
            value={paste.title}
            disabled
          />
        </Col>
      </Row>
      <Row
        className=' w-100 bg-dark  d-flex justify-content-center rounded m-2  '>
        <Row className=' w-100 rounded '>
          <Col className=' d-flex justify-content-end'>
            <BiCopy
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("copied to clipboard");
              }} className='text-light ' /></Col>

        </Row>
        <Row className=' p-2 mb-2'>
          <textarea
            className='bg-light rounded'
            value={paste.content}
            rows={15}
            disabled

          />
        </Row>
      </Row>
    </Container>
  )
}

export default ViewPaste