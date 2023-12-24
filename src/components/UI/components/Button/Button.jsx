/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ property1, className, divClassName, text = "Lorem" }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      <div
        className={`lorem-3 ${
          ["primary-CTA-small", "primary-CTA", "secondary-CTA-small", "secondary-CTA"].includes(property1)
            ? divClassName
            : undefined
        }`}
      >
        {property1 === "side-menu-button" && <>Get Premium</>}

        {["primary-CTA-small", "primary-CTA", "secondary-CTA-small", "secondary-CTA"].includes(property1) && (
          <>{text}</>
        )}
      </div>
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf([
    "primary-CTA-small",
    "side-menu-button",
    "secondary-CTA-small",
    "primary-CTA",
    "secondary-CTA",
  ]),
  text: PropTypes.string,
};
