import React, { useState } from "react";
import axios from "axios";
import "../forms.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return; // Early return to prevent the rest of the function from executing
    }
  
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email,
        password,
      });
      if (response.data.success) {
        setMessage("Registration successful!");
      }
    } catch (error) {
      setMessage(error.response.data.error || "Registration failed.");
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="logo">
          <div className="frame">
            <div className="text-wrapper">
              <a href="/">Your Logo</a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="sign-up">
            <div className="content">
              <div className="sign-up-copy">
                <div className="div">Sign up</div>
              </div>
              <div className="w-100 mb-1">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
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
              <div className="w-100 mb-1">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input">
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <button type="submit">Register</button>
                  </div>
                </div>
              </div>
              <p className="already-have-an">
                <span className="span">Already have an Account ?</span>
                <span className="text-wrapper-3">&nbsp;&nbsp;Log in</span>
              </p>
            </div>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};
