import React from "react";
import { GroupWrapper } from "./GroupWrapper";

export const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="logo">
          <div className="frame">
            <div className="text-wrapper">Your Logo</div>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form">
            <div className="div">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Log in</div>
              </div>
              <div className="frame-2">
                <GroupWrapper />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <GroupWrapper className="group-21" groupText="Enter your Password" text="Password" />
                    <img className="invisible" alt="Invisible" src="invisible-1.svg" />
                  </div>
                </div>
                <div className="group-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-3">Rememebr me</div>
                  <div className="text-wrapper-4">Forgot Password ?</div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <div className="text-wrapper-5">Login</div>
                  </div>
                </div>
              </div>
              <p className="don-y-have-an">
                <span className="span">Don’y have an Account ?</span>
                <span className="text-wrapper-6">&nbsp;&nbsp;Register</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
