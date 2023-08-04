import { FilterRounded } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';

let nextId = 0;
const data = [{
    "id": 1,
    "text": "Devpulse"
}, {
    "id": 2,
    "text": "Linklinks"
}, {
    "id": 3,
    "text": "Centizu"
}, {
    "id": 4,
    "text": "Dynabox"
}, {
    "id": 5,
    "text": "Avaveo"
}, {
    "id": 6,
    "text": "Demivee"
}, {
    "id": 7,
    "text": "Jayo"
}, {
    "id": 8,
    "text": "Blognation"
}, {
    "id": 9,
    "text": "Podcat"
}, {
    "id": 10,
    "text": "Layo"
}]

export default function Test() {

    // const [name, setName] = useState('');
    // const [artists, setArtists] = useState([]);

    const [isopen, setIsopen] = useState(false);
    const [filteredData, setFilteredData] = useState([])

    function filteredData1(e) {
        const filterData = data.filter((el) => {
            setIsopen(true)
            //if no input the return the original
            if (e.target.value === '') {
                setFilteredData({ el })
                return el;
            }
            //return the item which contains the user input
            else {
                return el.text.toLowerCase().includes(e.target.value)
            }

        })
        setFilteredData(filterData);
        console.log(filteredData);
    }

    return (

        <>
        {/* code for Search code */}
            <div className="main">
                <h1>React Search</h1>
                <div className="search">
                    <input
                        onChange={filteredData1}
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>

                {isopen ? <ul>
                    {filteredData.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul> : <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>}
            </div>
                        {/* code for add delete items */}
            {/* <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>Add</button>


            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}
                        <button onClick={() => {setArtists(artists.filter(a =>a.id !== artist.id));}}>
                            Delete
                        </button>
                    </li>

                ))}
            </ul> */}
        </>

    )
}
