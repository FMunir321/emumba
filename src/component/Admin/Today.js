import React from 'react'
import './Admin.css'


const Data = [
    {name:'Saad Mustaq', status:'present'},
    {name:'Bilal Mirza', status:'Absent'},
    {name:'Abeer Faiz', status:'On leave'},
    {name:'Saad Mustaq', status:'present'},

]

export default function Today() {
    return (
        <>
        <div className='today'>
            <p>Today's Availability</p>
            <input className='searchbarInput2' type="search" placeholder="Search Here" />
            <div class="row">
                <div class="column" >
                    <h2>Present</h2>
                    <p>Saad Mushtaq</p>
                    <p>Zahid Butt</p>
                    <p>Ali Ahmad</p>
                </div>
                <div class="column" >
                    <h2>On leave</h2>
                    <p>Husnain Maqsood</p>
                    <p>Abdul Moeez</p>
                    <p>Abeer Faiz</p>
                </div>
                <div class="column">
                    <h2>Absent</h2>
                    <p>Ayaz afzal</p>
                    <p>Zeeshan Sattar</p>
                    <p>Bilal Mirza</p>
                </div>
            </div>

        </div>
        
        </>
    )
}
