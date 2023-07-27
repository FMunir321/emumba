import React from 'react'
const records = [
    { name: 'Saad Mushtaq', position: 'Frontend Engineer', email: 'saadmushtaq@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
    { name: 'Saad Mushtaq2', position: 'Frontend Engineer2', email: 'saadmushtaq2@gmail.com', totalhrs: '160', dailyaveragehrs: '8.00' },
]

export default function Setting() {
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
                    records.map((data) => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.position}</td>
                            <td>{data.email}</td>
                            <td>{data.totalhrs}</td>
                            <td>{data.dailyaveragehrs}</td>
                            <td>
                                <button className='deletebutton'>Delete</button>
                                <button className='editbutton'>Edit</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
