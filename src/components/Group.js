import PropTypes from "prop-types";
import React from "react";

export const Group = ({ className, text = "Enter your user name" }) => {
  return (
    <div className={`group ${className}`}>
      <div className="enter-your-user-name">{text}</div>
    </div>
  );
};

Group.propTypes = {
  text: PropTypes.string,
};