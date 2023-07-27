import React from 'react'

import { useState } from 'react';

let nextId = 0;

export default function Test() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
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
            </ul>
        </>

    )
}
