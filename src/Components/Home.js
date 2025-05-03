import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../Store/PasteSlice';
import { BiCopy } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [title, settitle] = useState('');
  const [value, setvalue] = useState('');
  const [searchParams, setsearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allpaste = useSelector((state) => state.paste_bot.paste_bot);
  useEffect(() => {
    if (pasteId) {
      const p = allpaste.find((paste) => paste._id === pasteId);
      settitle(p.title);
      setvalue(p.content);
    }
  }, [pasteId])
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createAt: new Date().toLocaleDateString(),
      fav: false,

    }
    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));

    }
    else {
      dispatch(addToPaste(paste));

    }
    settitle('');
    setvalue('');
    setsearchParams({});

  }
  return (
    <Container className=' vw-50 mt-4 mb-2  d-flex flex-column align-items-center'>
      <Row className=' w-100 mt-2 mb-2 ' >
        <Col className='w-100 p-0  mb-2   d-flex  justify-content-between '>
          <input
            className=' w-50 p-1 me-2 rounded  '
            type="text"
            placeholder='Enter title here...'
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <button
            onClick={createPaste}
            type="button"
            className='btn btn-primary'>
            {
              pasteId ? "Update Paste" : "Create My Paste"
            }
          </button>
        </Col>
      </Row>
      <Row className=' w-100  bg-dark  d-flex justify-content-center rounded '>
        <Row className='w-100 p-0 m-0 d-flex justify-content-center '>
          <Row className=' rounded '>
            <Col className='d-flex justify-content-end'>
              <BiCopy
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("copied to clipboard");
                }} className='text-light mb-2 ' /></Col>

          </Row>
          <Row className='w-100 mb-2'>
            <textarea
              className='w-100 p-2 rounded'
              value={value}
              placeholder='Enter Content here'
              onChange={(e) => setvalue(e.target.value)}
              rows={15}
            />
          </Row>
        </Row>
      </Row>
    </Container>
  )
}

export default Home