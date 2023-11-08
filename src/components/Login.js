import React, { useState } from 'react';
import axios from 'axios';
import "../forms.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data.success) {
        setMessage('Login successful!');
        // Storing the token in local storage
        localStorage.setItem('token', response.data.token);
        // Redirect or update UI state here if needed
      } else {
        setMessage(response.data.error || 'Login failed.');
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred during login.');
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="div">
          <div className="frame">
            <div className="text-wrapper"><a href="/">Your Logo</a></div>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="frame-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Log in</div>
                </div>
                <div className="frame-3">
                  <div className="w-100 mb-1">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="exampleFormControlInput1" 
                      placeholder="Email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="w-100 mb-1">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="Enter your password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="recovery">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me?
                      </label>
                    </div>
                    <div className="text-wrapper-4">Forgot Password?</div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <button type="submit" className="overlap-group">
                      <div className="text-wrapper-7">Login</div>
                    </button>
                  </div>
                </div>
                <p className="don-t-have-an">
                  <span className="span">Don’t have an Account?</span>
                  <span className="text-wrapper-8">&nbsp;&nbsp;Register</span>
                </p>
              </div>
            </form>
            {message && <div className="message">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};