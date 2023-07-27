import { useLocation } from 'react-router-dom';
import './User.css';
import React, { useState } from 'react';
import RecordsModal from './RecordsModal';

export default function Dashboard() {
  const location = useLocation();
  const userData = location.state;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);

  return (
    <div className=''>

      {/* <img src={person} alt="Italian Trulli"></img> */}
      <p className='para'>Hi! {userData}</p>
      <div>
        <button className='DahboardButton'>PUNCH ATTENDANCE</button>
        <button className='DahboardButton'>APPLY FOR LEAVE</button>
        <button className='DahboardButton' onClick={() => setIsOpenModal(true)}>WATCH PREVIOUS RECORD</button>
      </div>
      {isOpenModal && <RecordsModal closeModal={closeModal}/>}
    </div>
  )
}

