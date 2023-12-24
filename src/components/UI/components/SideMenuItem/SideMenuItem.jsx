/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SideMenuItem = ({ state, option, className }) => {
  return (
    <div className={`side-menu-item ${state} ${className}`}>
      <img
        className={`img state-${state} ${option}`}
        alt="Home"
        src={
          option === "home" && state === "active"
            ? "https://c.animaapp.com/8TF7hHQo/img/-home--4@2x.png"
            : option === "market" && state === "inactive"
            ? "https://c.animaapp.com/8TF7hHQo/img/-cart--5@2x.png"
            : state === "active" && option === "market"
            ? "https://c.animaapp.com/8TF7hHQo/img/-cart--2@2x.png"
            : option === "profile" && state === "inactive"
            ? "https://c.animaapp.com/8TF7hHQo/img/profile-5.svg"
            : option === "profile" && state === "active"
            ? "https://c.animaapp.com/8TF7hHQo/img/profile-2.svg"
            : option === "avatar" && state === "inactive"
            ? "https://c.animaapp.com/8TF7hHQo/img/-male--4.svg"
            : state === "active" && option === "avatar"
            ? "https://c.animaapp.com/8TF7hHQo/img/-male--2.svg"
            : option === "calendar" && state === "inactive"
            ? "https://c.animaapp.com/8TF7hHQo/img/-calendar--4@2x.png"
            : state === "active" && option === "calendar"
            ? "https://c.animaapp.com/8TF7hHQo/img/-calendar--2@2x.png"
            : "https://c.animaapp.com/8TF7hHQo/img/-home--5@2x.png"
        }
      />
      <div className="home-2">
        {option === "home" && <>Home</>}

        {option === "market" && <>Market</>}

        {option === "profile" && <>Profile</>}

        {option === "avatar" && <>Avatar</>}

        {option === "calendar" && <>Calendar</>}
      </div>
    </div>
  );
};

SideMenuItem.propTypes = {
  state: PropTypes.oneOf(["inactive", "active"]),
  option: PropTypes.oneOf(["calendar", "market", "profile", "avatar", "home"]),
};
