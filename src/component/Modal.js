import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Modal.css';
import './User/User.css';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const MyModal = ({ closeModal }) => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [Iserror, setIserror] = useState(false);

    const onSubmit = (data) => {
        if (data.Password != data.ConfirmPassword) {
            setIserror(true);
        }
        else {
            setIserror(false);
            closeModal(false);
        }

    }


    return (
        <>
            <ReactModal
                isOpen={closeModal}
                contentLabel="Example Modal"
                onRequestClose={() => closeModal(false)}
            >
                <div className='App modalBGColr' id='root'>
                    <CloseIcon onClick={closeModal} className='iconTopRight' />
                    <p>Change Password</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='Password' id='Password' {...register('Password')} placeholder='Password'></input>
                        <input type='Password' id='ConfirmPassword' {...register('ConfirmPassword')} placeholder='ConfirmPassword'></input>

                        {Iserror && <span>This field is required</span>}
                        <div style={{ margin: '42px' }}>
                            <button className='Cancelbutton' onClick={()=> {closeModal(false)}}>Cancel</button>
                            <button className='savebutton' type='submit'>Save</button>
                        </div>
                    </form>

                </div>
            </ReactModal>
        </>
    )
}

export default MyModal;
