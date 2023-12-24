/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNotif } from "../../icons/IconNotif";
import { Icons } from "../../icons/Icons";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import "./style.css";

export const IconSet = ({ className, visible = true }) => {
  return (
    <div className={`icon-set ${className}`}>
      {visible && (
        <ConcreteComponentNode
          divClassName="icons-3"
          divClassNameOverride="icons-3"
          frameClassName="design-component-instance-node"
          icon="main-menu"
          iconMainMenuClassName="icons-instance"
          rectangleClassName="icons-2"
          rectangleClassNameOverride="icons-2"
        />
      )}

      <IconNotif className="icon-instance-node" color="white" />
      <Icons className="icon-instance-node" color="white" />
    </div>
  );
};

IconSet.propTypes = {
  visible: PropTypes.bool,
};
