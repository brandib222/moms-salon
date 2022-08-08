import { React, useState } from 'react';
import axios from 'axios';

export default function Login (props) {
    const { isLoggedIn, setIsLoggedIn } = props;


    const [login, setLogin] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // WHERE IS THIS PATH COMING FROM 
        axios.post(`http://localhost:9000/login`, login)
            .then(res => {
                console.log('You did it!', res);
                localStorage.setItem('token', res.data.token);
                props.setIsLoggedIn(localStorage.getItem('token'));
            }).catch(err => {
                console.error(err);
            })
    }
    

    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Please Sign In </h1>
                <label className='email-container'>
                    <input 
                        type='text'
                        name='email'
                        placeholder='enter email'
                        value={login.email}
                        onChange={handleChange}
                    />
                </label>
                <label className='password-container'>
                    <input 
                        type='text'
                        name='password'
                        placeholder='enter password'
                        value={login.password}
                        onChange={handleChange}
                    />
                </label>
                <button className='login-btn'> Login </button>
            </form>
        </div>
    </>)
}