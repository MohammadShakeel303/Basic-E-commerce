import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import {auth} from "./firebase";
const Login = () => {
    const login = event => {
        event.preventDefault(); // this stop the refresh1

    // do the login logic..
// auth.signInWithEmailAndPassword()
    };
const register = (event) => {
    event.preventDefault();
};

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg"
          alt=" "
        />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton ">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
