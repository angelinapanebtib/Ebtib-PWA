// src/pages/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 登录逻辑处理
  };

  return (
    <div className="login-container">
      <h1 className="logo">Ebtib.Health</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="continue-btn">Continue</button>
        <div className="forgot-password">Forgot password</div>
      </form>
      <div className="oauth-buttons">
        <button className="oauth-btn apple">Continue with Apple</button>
        <button className="oauth-btn google">Continue with Google</button>
      </div>
      <p className="terms-text">
        By continuing I agree with the Privacy Policy and Terms & Conditions
      </p>
    </div>
  );
};

export default LoginPage;
