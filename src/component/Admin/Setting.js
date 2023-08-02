import React, { useState } from 'react';
import './Admin.css';
import Modal from 'react-modal';

const records = [
    { id: '1', name: 'Saad Mushtaq', position: 'Frontend Engineer', email: 'saadmushtaq@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
    { id: '2', name: 'Saad Mushtaq2', position: 'Frontend Engineer2', email: 'saadmushtaq2@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
    { id: '3', name: 'Saad Mushtaq3', position: 'Frontend Engineer3', email: 'saadmushtaq2@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
]

export default function Setting() {

    // const [record, setRecord] = useState(records);
    const [isOpen, setIsOpen] = useState(false);
    const [allRecords, setallRecords] = useState(records);
    // console.log(allRecords);

    function handledelete(id){
        console.log(id);
        setallRecords(allRecords.filter(a => a.id !== id))
    }
    return (
        <div className='overall'>
            <p>Setting</p>
            <input className='searchbarInput2' type="search" placeholder="Search Here" />
            <table className='tables'>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Total Hrs.</th>
                    <th>Daily Average Hrs</th>
                    <th>Actions</th>
                </tr>

                {
                    allRecords.map((data, index) => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.position}</td>
                            <td>{data.email}</td>
                            <td>{data.totalhrs}</td>
                            <td>{data.dailyaveragehrs}</td>
                            <td>
                                <button className='deletebutton' onClick={() =>  handledelete(data.id) }>Delete</button>
                                <button className='editbutton' onClick={() => setIsOpen(true)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }


            </table>
            <div className='popup'>
                <Modal
                    isOpen={isOpen}
                    contentLabel="Example Modal"
                    onRequestClose={() => isOpen(false)}
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
                    <button className='closeButton' onClick={() => setIsOpen(false)}>x</button>
                    <h3>Edit Info</h3>
                    <input type='text' id='username' name='username' placeholder='Username'></input>
                    <input type='text' id='username' name='username' placeholder='Username'></input>
                    <input type='text' id='username' name='username' placeholder='Username'></input>
                    <input type='text' id='username' name='username' placeholder='Username'></input>
                    <div>
                        <button className='buttonP' id='cancelBtn' onClick={() => setIsOpen(false)}>Cancel</button>
                        <button className='buttonP'>Save</button>
                    </div>

                </Modal>
            </div >
        </div>
    )
}
