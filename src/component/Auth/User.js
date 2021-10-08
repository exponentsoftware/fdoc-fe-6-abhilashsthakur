import React from "react";
import Login from "./login/Login";
import Register from "./Register/Register";
import { ChakraProvider } from "@chakra-ui/react";

function User() {
  return (
    <ChakraProvider>
      <div className="container mt-sm-5">
        <div className="row">
          <div className="col-sm">
            <Login />
          </div>
          <div className="col-sm">
            <Register />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default User;
