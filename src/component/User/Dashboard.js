import React from 'react';
import { useNavigate, route, useLocation } from 'react-router-dom';
import './User.css';

export default function Dashboard() {
  const location = useLocation();
  console.log(location.state);
  const userData = location.state.signInUser;


  return (
    <div className='Aligement'>
      {/* <img src={person} alt="Italian Trulli"></img> */}
      <p className='para'>Hi! {userData.Username}</p>
      <div>
        <button className='DahboardButton'>PUNCH ATTENDANCE</button>
        <button className='DahboardButton'>APPLY FOR LEAVE</button>
        <button className='DahboardButton'>WATCH PREVIOUS RECORD</button>
      </div>
    </div>
  )
}
