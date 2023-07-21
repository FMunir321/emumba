import React, { useState } from 'react'
import ReactModal from 'react-modal';
import './Admin.css';
import Modal from '../Modal';

export default function ChangePassword() {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    const [signInUser, setsignInUser] = useState({
        Username: '',
        Pincode: ''
    });

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setsignInUser({ ...signInUser, [name]: value });
        if (signInUser.Pincode.length > 3) {

            alert('pincode must be 4 digit')
        }
        console.log(signInUser.Pincode);
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Model</button>

            {isOpen && <Modal closeModal={closeModal} />}



            <div className='App'>
                <p>Sign In As Admin</p>
                <div>
                    <h3>Change Password</h3>
                    <div className='inputBox'>
                        <input type='number' placeholder="Password" onChange={handleInput} name='ConfirmPassword' id='ConfirmPassword'></input>
                    </div>
                    <div className='inputBox'>
                        <input type='number' placeholder="Confirm Password" onChange={handleInput} name='ConfirmPassword' id='ConfirmPassword'></input>
                    </div>
                </div>
            </div>
        </>
    )
}
