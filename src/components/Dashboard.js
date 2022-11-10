import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import ClientCard from './ClientCard';
import Login from './Login';

const initialClients = [];

export default function Dashboard (props) {

    const [clients, setClients] = useState(initialClients);

    const getClients = () => {
        axios.get('http://localhost:9000/api/accounts')
            .then((res) => {
                //setClients(res.data)
                console.log('hello');
                console.log(res);
            }).catch(err => console.error(err));

    }
    
    useEffect(() => {
        getClients();
    }, [])

    return (
        <div className='clients-list-wrapper'> 
            <div className='title'> Mom's Salon </div>
             <h2 className='dashboard-h2'>Welcome!</h2>
             <Login />
                <div className='client-cards'>
                    {clients.map(client => (
                        <ClientCard key={client.email} details={client} />
                    ))}
                </div>
        </div>
    )
}