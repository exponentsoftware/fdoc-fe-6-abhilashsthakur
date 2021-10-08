import React, { useContext } from "react";
import axios from "axios";
import LoginUI from "./LoginUI";

import { LoginContext } from "../../loginContext";

function Login() {
  const [newUser, setNewUser] = useContext(LoginContext);
  // eslint-disable-next-line
  const [status, setStatus] = useContext(LoginContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = newUser;

    if (username === "" || password === "") {
      alert("All Field are required");
    } else {
      username === "username" || password === "password"
        ? await axios
            .get(`http://localhost:8000/user`, newUser)
            .then((res) => setStatus(res.status))
        : alert("password wrong");
    }
  };
  return <LoginUI handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default Login;
