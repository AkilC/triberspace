/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icons = ({ color = "white", className }) => {
  return (
    <svg
      className={`icons ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.0002 5.81836C13.2002 5.81836 10.9093 8.66927 10.9093 12.182C10.9093 15.6947 13.2002 18.5456 16.0002 18.5456C18.8002 18.5456 21.0911 15.6947 21.0911 12.182C21.0911 8.66927 18.8002 5.81836 16.0002 5.81836ZM10.6802 18.5456C7.982 18.6729 5.81836 20.8875 5.81836 23.6365V26.182H26.182V23.6365C26.182 20.8875 24.0438 18.6729 21.3202 18.5456C19.9456 20.0984 18.062 21.0911 16.0002 21.0911C13.9384 21.0911 12.0547 20.0984 10.6802 18.5456Z"
        fill={color}
      />
    </svg>
  );
};

Icons.propTypes = {
  color: PropTypes.string,
};
