import React from "react";
import "../forms.css";

export const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <div className="logo">
                    <div className="frame">
                        <div className="text-wrapper"><a href="/">Your Logo</a></div>
                    </div>
                </div>
                <div className="form-wrapper">
                    <div className="sign-up">
                        <div className="content">
                            <div className="sign-up-copy">
                                <div className="div">Sign up</div>
                            </div>
                            <div className="w-100 mb-1" >
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                            <div className="w-100 mb-1" >
                                <label for="exampleFormControlInput2" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <div className="w-100 mb-1" >
                                <label for="exampleFormControlInput2" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Confirm your password" />
                            </div>
                            <div className="input">
                                <div className="overlap-wrapper">
                                    <div className="overlap">
                                        <div className="text-wrapper-2">Register</div>
                                    </div>
                                </div>
                            </div>
                            <p className="already-have-an">
                                <span className="span">Already have an Account ?</span>
                                <span className="text-wrapper-3">&nbsp;&nbsp;Log in</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
