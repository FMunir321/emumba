//import './../User/User.css;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    function clickhandler() {
        navigate('/dashboard', { state: 'Saad Mushtaq' });
    }

    return (
        <div>
            <p className='pTag'>Sign In as Admin</p>
            <form>
                <input type='text' id='username' name='username' placeholder='Username'></input>
                <input type='number' id='pincode ' name='pincode' placeholder='Pincode'></input>
                <button className='loginButton' onClick={() =>  clickhandler() }>Login</button>
            </form>
            <p className=''>Or Sign in using social platforms</p>
            <p className='para'>Or Are you an admin? <Link to='/' className='Linkstyle'>SignIn as user instead?</Link></p>

        </div>
    )
}
