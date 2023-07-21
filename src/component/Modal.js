import ReactModal from 'react-modal';

const MyModal = ({ closeModal }) => {
    return (
        <>
            <ReactModal
                isOpen={closeModal}
                contentLabel="Example Modal"
                onRequestClose={() => closeModal(false)}
            >
                <div style={{ backgroundColor: 'red', width: '500px' }}>
                    This is the content of the pop-up.
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
