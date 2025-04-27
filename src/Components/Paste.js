import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import { changefav, removeFromPaste, resetAllPaste } from '../Store/PasteSlice';
import { FaStar, FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { BiFile, BiTrash, BiCalendar, BiCopy, BiReset, BiLogoWhatsapp } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste_bot.paste_bot);
  const dispatch = useDispatch();
  const [searchTerm, setsearchTerm] = useState('');
  const nav = useNavigate();
  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const changecolor = (id) => {
    dispatch(changefav(id));
  }
  function handleDelete(id) {
    dispatch(removeFromPaste(id));
  }
  function View(id) {

    nav(`/pastes/${id}`)
  }
  return (
    <Container className='vw-100  d-flex  flex-column align-items-center mt-3 '>
      <Row className='w-50  mt-4 p-0 '>
        <Col className='d-flex justify-content-center  '>
          <input type="search"
            className='w-100 p-2 rounded-pill '
            placeholder='Search here'
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <button onClick={() => dispatch(resetAllPaste())}
            className=' d-flex justify-content-center align-items-center  bg-danger rounded  text-light inline'>
            <BiReset size={20} />Reset</button>
        </Col>
      </Row>
      <div className=' w-50 mt-4 p-4'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) =>
              <Row className='vw-50 m-2 p-2  d-flex  bg-primary bg-opacity-25 rounded ' key={paste._id}>
                <Col className='text-light'>
                  <h3 >
                    <FaStar className={paste.fav ? " me-2 text-warning " : "me-2 text-dark "} size={50} onClick={(e) => changecolor(paste._id)} />

                    {paste.title}
                  </h3>
                  <div>
                    {paste.content.slice(0, 10)}
                  </div>
                </Col>
                <Col >
                  <div className=' p-2  d-flex justify-content-between '>
                    <FaEdit onClick={() => nav(`/?pasteId=${paste?._id}`)} className=" text-light" size={30} />
                    <BiFile onClick={() => View(paste._id)} className='text-light' size={30} />
                    <BiTrash onClick={() => handleDelete(paste._id)} className='text-light' size={30} />
                    <BiCopy className="text-light" size={30} onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copied to clipboard");
                    }} height={20} width={10} />
                    < BiLogoWhatsapp onClick={() => window.open(`https://wa.me/?text=${paste.title}%0A${paste.content}`,'_blank')} className="text-light" size={30} />
                  </div>
                  <div className='text-center p-2 text-light'>
                    <BiCalendar className='me-2' />
                    {paste.createAt}
                  </div>
                </Col>
              </Row>
          )
        }
      </div>
      {
        filteredData.length===0 && searchTerm !=='' &&
        <h4 className='text-light'>
          Not Found
        </h4>
      }

    </Container>
  )
}

export default Paste