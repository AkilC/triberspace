import React from "react";
import "../forms.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="div">
          <div className="frame">
            <div className="text-wrapper">Your Logo</div>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form">
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Log in</div>
              </div>
              <div className="frame-3">
                <div class="w-100 mb-3" >
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                  </div>
                  <div class="w-100 mb-3" >
                    <label for="exampleFormControlInput2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                  </div>
                <div className="recovery">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember me?
                    </label>
                  </div>
                  <div className="text-wrapper-4">Forgot Password ?</div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper-7">Login</div>
                  </div>
                </div>
              </div>
              <p className="don-t-have-an">
                <span className="span">Don’t have an Account?</span>
                <span className="text-wrapper-8">&nbsp;&nbsp;Register</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



