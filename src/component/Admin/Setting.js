import React, { useState } from 'react';
import './Admin.css';
import Modal from 'react-modal';

const records = [
    { id: '1', firstname: 'Malik', lastname: 'Mushtaq1', position: 'Frontend Engineer', email: 'saadmushtaq@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
    { id: '2', firstname: 'Faisal', lastname: 'Mushtaq2', position: 'Frontend Engineer2', email: 'saadmushtaq2@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
    { id: '3', firstname: 'Munir', lastname: 'Mushtaq3', position: 'Frontend Engineer3', email: 'saadmushtaq2@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
]

export default function Setting() {

    const [isOpen, setIsOpen] = useState(false);
    const [allRecords, setallRecords] = useState(records);
    const [updateState, setUpdateState] = useState([]);
    const [isfilterData, setisfilterData] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    function handledelete(id) {
        console.log(id);
        setallRecords(allRecords.filter(a => a.id !== id))
    }

    function handleEdit(data) {
        setUpdateState(data);
        setIsOpen(true);
    }

    function Edit({ current }) {

    }
    function filterData(e) {
        setisfilterData(true);
        const searchData = records.filter((el) => {
            //if no input the return the original
            if (e.target.value === '') {
                setisfilterData(false);
                return el;
            }
            //return the item which contains the user input
            else {
                return el.firstname.toLowerCase().includes(e.target.value);

            }

        })
        setFilteredData(searchData);
        console.log(filteredData);
    }

    return (
        <div className='overall'>
            <p>Setting</p>
            <input
                onChange={filterData}
                className='searchbarInput2'
                // type="search"
                placeholder="Search Here"
                label="Search"
            />
            <table className='tables'>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Total Hrs.</th>
                    <th>Daily Average Hrs</th>
                    <th>Actions</th>
                </tr>
                {isfilterData ?
                    filteredData.map((current, index) => (
                        updateState === current.id ? <Edit current={current} allRecords={allRecords} /> :
                            <tr>
                                <td>{current.firstname} {current.lastname}</td>
                                <td>{current.position}</td>
                                <td>{current.email}</td>
                                <td>{current.totalhrs}</td>
                                <td>{current.dailyaveragehrs}</td>
                                <td>
                                    <button className='deletebutton' onClick={() => handledelete(current.id)}>Delete</button>
                                    <button className='editbutton' onClick={() => handleEdit(current)}>Edit</button>
                                </td>
                            </tr>
                    )) :

                    allRecords.map((current, index) => (
                        updateState === current.id ? <Edit current={current} allRecords={allRecords} /> :
                            <tr>
                                <td>{current.firstname} {current.lastname}</td>
                                <td>{current.position}</td>
                                <td>{current.email}</td>
                                <td>{current.totalhrs}</td>
                                <td>{current.dailyaveragehrs}</td>
                                <td>
                                    <button className='deletebutton' onClick={() => handledelete(current.id)}>Delete</button>
                                    <button className='editbutton' onClick={() => handleEdit(current)}>Edit</button>
                                </td>
                            </tr>
                    ))

                }

            </table>



            {/* Popup for Edit data */}
            <div className='popup'>
                <Modal
                    isOpen={isOpen}
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
                    <input type='text' name='firstname' value={updateState.firstname} onChange={handleInput} ></input>
                    <input type='text' id='lastname' name='lastname' value={updateState.lastname} onChange={handleInput} ></input>
                    <input type='text' id='position' name='position' value={updateState.position} onChange={handleInput} ></input>
                    <input type='text' id='email' name='email' value={updateState.email} onChange={handleInput} ></input>
                    <div>
                        <button className='buttonP' id='cancelBtn' onClick={() => setIsOpen(false)}>Cancel</button>
                        <button className='buttonP' onClick={savetData}>Save</button>
                    </div>

                </Modal>
            </div >
        </div>
    )
    function handleInput(e) {
        const { name, value } = e.target;

        setUpdateState({
            ...updateState,
            [name]: value
        });
    }
    function savetData() {
        const index = allRecords.findIndex((record) => record.id === updateState.id);
        allRecords[index] = updateState;
        setIsOpen(false);
    }
}
