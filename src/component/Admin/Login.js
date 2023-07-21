import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Login() {
    const navigate = useNavigate();

    const [signInUser, setsignInUser] = useState({
        Username: '',
        Pincode: ''
    });
    const [Pincode, setPincode] = useState();
    const [pincodeErr, setPincodeErr] = useState(true);

    function loginHandle() {
        console.log('login');
        navigate('user/dashboard', { state: { signInUser } });
    }

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
        <div className='App marginSinginUserPage'>
            <b className='color1'>Sign In As Admin</b>

            <form action='' onSubmit={loginHandle}>

                <div className='inputBox'>
                    <div style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <FacebookIcon style={{ margin: '10px' }} />
                        <input type='text' onChange={handleInput} placeholder="Username" name='Username' id='username' />
                    </div>
                </div>

                <div className='inputBox'>
                    <input type='number' placeholder="Pincode" onChange={handleInput} name='Pincode' id='Pincode'></input>
                </div>
                <button className='loginButton' type='submit'>LOGIN</button>

            </form>
            <div className='marginset'>Or Sign in using social platforms</div>
            <div>
                <div className='roundCircle'><FacebookIcon style={{ margin: '10px' }} /></div>
                <div className='roundCircle'><TwitterIcon style={{ margin: '10px' }} /></div>
                <div className='roundCircle'> <GoogleIcon style={{ margin: '10px' }} /></div>
                <div className='roundCircle'><LinkedInIcon style={{ margin: '10px' }} /></div>
            </div>

            <p>Or Are you an admin? <Link to='/' className='linkstyle'>SignIn as user instead?</Link></p>

        </div>
    )
}
