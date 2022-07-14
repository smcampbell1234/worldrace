import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GiEarthAmerica } from 'react-icons/gi';
import {useUserContext} from "../context/user_context";
import { useAuth0 } from '@auth0/auth0-react';
// import {useUserContext} from '../context/user_context'

const Login = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();

  const {myUser,setMyUser} = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setMyUser({
        name,
        email,
      })
      let userStr = `{"name":"${name}", "email":"${email}"}`
      // set local storage
      localStorage.setItem("user",userStr)
      // protect this
      navigate("/map");
    }
    // else form show form error
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>World Race</h2>
      <h3>Habit Tracker</h3>
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
    // <div>
    //   <h2>World Race</h2>
    //   <h3>Habit Tracker</h3>
    //   <div><GiEarthAmerica className="login-icon" /></div>
    //   <button onClick={loginWithRedirect}>Login / sign up</button>
    // </div>
  )
}

export default Login;