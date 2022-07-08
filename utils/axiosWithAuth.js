import axios from 'axios';
import url from '../src/components/URL';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return (
        axios.create({
        headers: {
            authorization:token
        },
        baseURL:url
        })
    )
}