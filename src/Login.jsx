import React from 'react';
import './Login.css';
import logo from './logo.png';


const LoginPage = () => {



 

  return (
    <>
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-container">
        <form className="login-form">
          <h2 className="login-title">Welcome to Muay Turkish Aviation</h2>
          <div className="input-group">
            <label htmlFor="email" className="login-label">Email</label>
            <input
              type="email"
              id="email"
              className="login-input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="login-label">Password</label>
            <input
              type="password"
              id="password"
              className="login-input"
              required
            />
          </div>
          <a href="home"><input type='button' value="Login" className="login-button" /></a>
          
          
        </form>
      </div>
    </>
  );
};

export default LoginPage;
