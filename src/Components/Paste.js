import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import { changefav, removeFromPaste, resetAllPaste } from '../Store/PasteSlice';
import { FaStar, FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { BiFile, BiTrash, BiCalendar, BiCopy, BiReset, BiLogoWhatsapp } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { ImSad2 } from "react-icons/im";

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
    <Container
      className='vw-100 p-3 mb-4 d-flex  flex-column align-items-center '>
      <Row className='w-100 ps-3 pe-3 '>
        <Col className='p-0 m-2 d-flex '>
          <input type="search"
            className='w-100 me-2 p-2 rounded-pill '
            placeholder='Search here'
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <button onClick={() => dispatch(resetAllPaste())}
            className=' btn btn-danger d-flex justify-content-center align-items-center rounded  text-light'>
            <BiReset size={20} />
            Reset
          </button>
        </Col>
      </Row>
      <div className=' w-100 mt-1 p-2'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) =>
              <Row
                className='vw-50  m-3 mb-4 p-2  d-flex  bg-primary bg-opacity-25 rounded '
                key={paste._id}>
                <Col className='text-light'>
                  <h3 >
                    <FaStar
                      className={paste.fav ? " me-2 text-warning " : "me-2 text-dark "}
                      size={50}
                      onClick={(e) => changecolor(paste._id)} />
                    {paste.title}
                  </h3>
                  <div>
                    {paste.content.slice(0, 10)}
                  </div>
                </Col>
                <Col >
                  <div className='m-2 d-flex justify-content-between '>
                    <FaEdit onClick={() => nav(`/?pasteId=${paste?._id}`)} className=" text-light" size={50} />
                    <BiFile onClick={() => View(paste._id)} className='text-light' size={50} />
                    <BiTrash onClick={() => handleDelete(paste._id)} className='text-light' size={50} />
                    <BiCopy className="text-light" size={50} onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copied to clipboard");
                    }} height={20} width={10} />
                    < BiLogoWhatsapp
                      onClick={() => window.open(`https://wa.me/?text=${paste.title}%0A${paste.content}`, '_blank')}
                      className="text-light" size={50} />
                  </div>
                  <div className='text-center text-light'>
                    <BiCalendar className='me-2' />
                    {paste.createAt}
                  </div>
                </Col>
              </Row>
          )
        }
      </div>
      { //No search result Found
        filteredData.length === 0 && searchTerm !== '' &&
        <h4 className='text-light'>
          Not Found
        </h4>
      }
      {  //No Paste are there
        filteredData.length === 0 && searchTerm === "" &&
        <Row
          className='w-50 p-1 text-light bg-primary bg-opacity-25 rounded'>
          <h2
            className=' w-100 gap-2 d-flex flex-row justify-content-center'>
            No Paste
            <ImSad2 className='text-warning' />
          </h2>
        </Row>
      }
    </Container>
  )
}

export default Paste