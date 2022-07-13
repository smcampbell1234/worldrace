import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GiEarthAmerica } from 'react-icons/gi';

const Login = ({setUser}) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setUser({
        name,
        email,
      })
    }
    // protect this
    navigate("/map");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>World Race</h2>
      <h3>Habbit Tracker</h3>
      <GiEarthAmerica className="login-icon" />
      <h2>Login</h2>
      <label htmlFor="name">name</label>&nbsp;
      <input
        type="text"
        value={name}
        name="name"
        onChange={e => setName(e.target.value)}
        />
        <br />
        <br />
      <label htmlFor="email">email</label>&nbsp;
      <input
        type="text"
        value={email}
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;