// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axiosWithAuth from '../utils/axiosWithAuth';
// import url from '../components/URL';

// const initialFormValues = { 
//     email: '',
//     password: ''
// }
// const errorValues ={
//     error:'',
// }
// const Login = () => {
//     const { push } = useHistory();
//     const [formValues, setFormValues] = useState(initialFormValues);
//     const [error, setError] = useState(errorValues);

//     const handleChange = (e) => {
//         setFormValues({
//             ...formValues,
//             [e.target.name]:e.target.value
//         });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axiosWithAuth().post(`${url}api/auth/login`, formValues)
//           .then(res => {
//             localStorage.setItem('token', res.data.token);
//             console.log(res);
//             push('/');
//           })
//           .catch(err => {
//             setError({
//               error: err.response.data.message          });
//           })
//       }

//     return(
//         <form className='register-wrapper' onSubmit={handleSubmit}>
//             <label>Email:
//                 <input 
//                     value={formValues.email}
//                     name='email'
//                     type='text'
//                     placeholder='Email'
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>Password:
//                 <input 
//                     value={formValues.password}
//                     name='password'
//                     type='password'
//                     placeholder='Password'
//                     onChange={handleChange}
//                 />
//             </label>
//             <button>Log In</button>
//             <p>{error.error}</p>
//         </form>
//     )
// }

// export default Login;