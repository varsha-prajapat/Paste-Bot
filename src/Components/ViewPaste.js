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
    <Container className=' vw-100 vh-100  d-flex flex-column align-items-center'>
      <Row className=' w-50  m-1 ' >
        <Col className='p-0'>
          <input
            className=' bg-light w-100 p-1 mt-2 rounded  '
            type="text"
            placeholder='Enter title here...'
            value={paste.title}
            disabled
          />
        </Col>
      </Row>
      <Row className=' w-50 bg-dark  d-flex justify-content-center rounded m-2  '>
        <Row className=' w-100 rounded '>
          <Col>
            <BiSolidCircle className='text-danger' />
            <BiSolidCircle className='text-warning' />
            <BiSolidCircle className='text-success' />
          </Col>
          <Col className=' d-flex justify-content-end'>
            <BiCopy
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("copied to clipboard");
              }} className='text-light mt-2' /></Col>

        </Row>
        <Row className=' p-2 mb-2'>
          <textarea
            className='bg-light rounded'
            value={paste.content}
            placeholder='Enter Content here'
            rows={12}
            disabled

          />
        </Row>
      </Row>
    </Container>
  )
}

export default ViewPaste