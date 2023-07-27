import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Admin.css';

export default function AdminDashboard() {
  const location = useLocation();
  const userData = location.state;

  const navigate = useNavigate();

  function TodayHandle() {
    navigate('/today');
  }

  function OverallHandle() {
    navigate('/overall');
  }

  return (
    <div className='container'>
      <p>Hi! {userData}</p>
      <button onClick={() => TodayHandle() }>TODAY'S AVAILABILITY</button>
      <button onClick={() => OverallHandle()}>OVERALL STATS</button>
    </div>
  )
}
