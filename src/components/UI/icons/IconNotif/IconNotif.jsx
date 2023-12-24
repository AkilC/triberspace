/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconNotif = ({ color = "#444444", className }) => {
  return (
    <svg
      className={`icon-notif ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.0002 5.81836C13.2002 5.81836 10.9093 8.10927 10.9093 10.9093C10.9093 13.5565 9.58563 15.9493 7.49836 17.6802C6.45472 18.5456 5.81836 19.7675 5.81836 21.0911H26.182C26.182 19.7675 25.5711 18.5456 24.502 17.6802C22.4147 15.9493 21.0911 13.5565 21.0911 10.9093C21.0911 8.10927 18.8256 5.81836 16.0002 5.81836ZM13.4547 23.6365C13.4547 25.0365 14.6002 26.182 16.0002 26.182C17.4002 26.182 18.5456 25.0365 18.5456 23.6365H13.4547Z"
        fill={color}
      />
    </svg>
  );
};

IconNotif.propTypes = {
  color: PropTypes.string,
};
