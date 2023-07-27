import './User.css'
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MyModal from '../Modal';

export default function SigninUser() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    const navigateToDashboard = () => {
        navigate('user/dashboard', { state: 'signInUser' });
    };

    return (
        <div>
            {isOpen && <MyModal closeModal={closeModal} />}

            <button onClick={() => setIsOpen(true)}>Open Model</button>
            <p className='pTag'>Sign In as User</p>
            <form>
                <input type='text' id='username' name='username' placeholder='Username'></input>
                <input type='number' id='pincode ' name='pincode' placeholder='Pincode'></input>
                <button className='loginButton' onClick={navigateToDashboard}>Login</button>
            </form>
            <p className=''>Or Sign in using social platforms</p>
            <p className='para'>Or Are you an admin? <Link to='admin' className='Linkstyle'>SignIn as admin instead?</Link></p>

        </div>

    )
}
