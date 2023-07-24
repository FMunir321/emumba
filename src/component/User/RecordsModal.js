import { CenterFocusStrong } from '@mui/icons-material';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const Data = [
  { Date: "03/03/2023", Status: "Present" },
  { Date: "05/03/2023", Status: "Present" },
  { Date: "06/03/2023", Status: "Absent" },
  { Date: "07/03/2023", Status: "Present" },
  { Date: "08/03/2023", Status: "Present" },
  { Date: "09/03/2023", Status: "Present" },
  { Date: "10/03/2023", Status: "Absent" },
  { Date: "11/03/2023", Status: "Present" },
  { Date: "12/03/2023", Status: "Present" },
  { Date: "13/03/2023", Status: "Absent" },
  { Date: "14/03/2023", Status: "Absent" },

];
const RecordsModal = ({ closeModal }) => {

  return (
    <div>
      <Modal
        isOpen={closeModal}
        contentLabel="Example Modal"
        onRequestClose={() => closeModal(false)}
        style={
          {
            overlay: {
              backgroundColor: 'grey'
            },
            content: {
              backgroundColor: '#30B88F',
              border: 'none',
              textAlign: 'Center',
              color: 'white'
            }
          }
        }
      >
        <button className='closeButton' onClick={() => closeModal(false)}>x</button>
        <h3>Attendance Record</h3>
        <p className='paramodal'>Saad Mushtaq</p>
        <input className='searchbarInput' type="search" placeholder="Search by Date" />
        <div className='App'>
        <table >
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
          {Data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Date}</td>
                <td>{val.Status}</td>
              </tr>
            )
          })}
        </table>
        </div>

      </Modal>
    </div >

  )
}


export default RecordsModal;