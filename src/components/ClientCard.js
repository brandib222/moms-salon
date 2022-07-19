import React from 'react';

export default function ClientCard ({ details }) {
    if(!details) {
        <h3> Working to fetch your info... </h3>
    }

    return (
        <div className='client-container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
        </div>
    )
};