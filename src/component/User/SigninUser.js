import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// import { Password } from '@mui/icons-material';

export default function SigninUser() {
    const navigate = useNavigate();

    const [signInUser, setsignInUser] = useState({
        Username: '',
        Pincode: ''
    });
    const [Pincode, setPincode] = useState();
    const [pincodeErr, setPincodeErr] = useState(true);

    function loginHandle() {
        console.log('login');
        navigate('user/dashboard')
    }

    // function usernameHandler(e) {
    //   let Item = e.target.value;
    //   console.log(Item);
    //   setUsername(Item);
    //   console.log(Username);

    // }
    // function passwordHandler(e) {
    //   let Item = e.target.value;
    //   if(Item.length > 4){
    //     alert('pincode must be 4 digit')
    //   }
    //   setPincode(Item);
    //   console.log(Pincode);
    // }

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
            <b className='color1'>Sign In as User</b>

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

            <p>Or Are you an admin? <strong style={{ color: '#30B88F' }}>SignIn as admin instead?</strong></p>

        </div>
    )
}
