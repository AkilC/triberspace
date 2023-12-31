import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ListItem = ({ text, state, className, onClick }) => {
  return (
    <div className={`list-item ${className}`} onClick={onClick}>
      <div className={`lorem-5 state-1-${state}`}>{text}</div>
    </div>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["inactive", "active"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
