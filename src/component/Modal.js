import ReactModal from 'react-modal';

const MyModal = ({ closeModal }) => {
    return (
        <>
            <ReactModal
                isOpen={closeModal}
                contentLabel="Example Modal"
                onRequestClose={() => closeModal(false)}
            >
                <div className='App'>
                    <p>Sign In As Admin</p>
                    <div>
                        <h3>Change Password</h3>
                        <div className='inputBox'>
                            <input type='number' placeholder="Password" name='ConfirmPassword' id='ConfirmPassword'></input>
                        </div>
                        <div className='inputBox'>
                            <input type='number' placeholder="Confirm Password"  name='ConfirmPassword' id='ConfirmPassword'></input>
                        </div>
                    </div>
                </div>
            </ReactModal>
            <button onClick={closeModal}>close modal</button>
        </>
    )
}

export default MyModal;
















// import React from 'react'

// export default function Modal( closeModal ) {
//     return (
//         <div>Modale123
//             <button onClick={closeModal}>close Model</button>
//         </div>

//     )
// }
