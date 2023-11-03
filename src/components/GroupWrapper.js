import PropTypes from "prop-types";
import React from "react";
import { Group } from "./Group";

export const GroupWrapper = ({ className, text = "Email", groupText = "email" }) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <div className="email">{text}</div>
      <Group className="group-20" text={groupText} />
    </div>
  );
};

GroupWrapper.propTypes = {
  text: PropTypes.string,
  groupText: PropTypes.string,
};
