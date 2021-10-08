import React,{useContext} from 'react';
import axios from 'axios';
import RegisterUI from './RegisterUI';


import { LoginContext } from '../../loginContext';

function Register() {

  const [newUser, setNewUser]=useContext(LoginContext);
  // eslint-disable-next-line 
  const [status,setStatus]=useContext(LoginContext);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, cPassword } = newUser;
    
    if (username === "" || password === "" || cPassword === "") {

      alert('All Field are required')

    }

    else {
      (password === cPassword) ? await axios.post(`http://localhost:8000/user`, newUser).then(res=>setStatus(res.status))
        : alert('password wrong')
    }

  }
  return <RegisterUI handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default Register;