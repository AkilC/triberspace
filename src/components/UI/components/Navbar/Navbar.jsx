/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconSet } from "../IconSet";
import "./style.css";

export const Navbar = ({
  state,
  className,
  searchBar = "https://c.animaapp.com/8TF7hHQo/img/search-bar-3.svg",
  TP = "https://c.animaapp.com/8TF7hHQo/img/tp-2.svg",
}) => {
  return (
    <div className={`navbar ${state} ${className}`}>
      <div className="content">
        <div className="content-bar">
          <img
            className="logo"
            alt="Logo"
            src={
              state === "unauthenticated"
                ? "https://c.animaapp.com/8TF7hHQo/img/logo-2@2x.png"
                : "https://c.animaapp.com/8TF7hHQo/img/logo-3@2x.png"
            }
          />
          <div className="text">triber.space</div>
        </div>
        <img className="search-bar" alt="Search bar" src={searchBar} />
        <div className="div">
          {state === "authenticated" && (
            <>
              <div className="TP-wrapper">
                <img className="TP" alt="Tp" src={TP} />
                <div className="text-wrapper">60 TP</div>
              </div>
              <IconSet className="icon-set-instance" visible={false} />
            </>
          )}

          {state === "unauthenticated" && (
            <div className="profile-area">
              <button className="lorem-wrapper">
                <div className="lorem">Log In</div>
              </button>
              <button className="div-wrapper">
                <div className="lorem-2">Sign Up</div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  state: PropTypes.oneOf(["authenticated", "unauthenticated"]),
  searchBar: PropTypes.string,
  TP: PropTypes.string,
};
