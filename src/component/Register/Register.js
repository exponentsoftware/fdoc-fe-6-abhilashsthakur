import React,{ useState } from 'react';
import axios from 'axios';
import RegisterUI from './RegisterUI'

import { ChakraProvider } from '@chakra-ui/react';

function Register() {

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    cPassword: ''
  })
  
      
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(newUser);

    const { username, password, cPassword } = newUser;
    
    if (username === "" || password === "" || cPassword === "") {

      alert('All Field are required')

    }

    else {
      (password === cPassword) ? await axios.post(`http://localhost:8000/user`, newUser).then(res=>alert(res.status))
        : alert('password wrong')
    }

  }
  return (
    <ChakraProvider>

      <RegisterUI handleChange={handleChange} handleSubmit={handleSubmit} />
  
    </ChakraProvider>

  );
}

export default Register;