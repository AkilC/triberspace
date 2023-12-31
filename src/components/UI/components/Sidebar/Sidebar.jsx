/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons2 } from "../../icons/Icons2";
import { Button } from "../Button";
import { SideMenuItem } from "../SideMenuItem";
import "./style.css";

export const Sidebar = ({
  userState,
  className,
  sideMenuItemState = "inactive",
  chevron = "https://c.animaapp.com/BWnJGvur/img/chevron-1.svg",
}) => {
  return (
    <div className={`sidebar user-state-${userState} ${className}`}>
      {userState === "authenticated" && (
        <>
          <div className="content-wrapper">
            <div className="section">
              <SideMenuItem className="side-menu-item-instance" option="home" state="active" />
              <SideMenuItem className="side-menu-item-instance" option="market" state="inactive" />
              <SideMenuItem className="side-menu-item-instance" option="profile" state="inactive" />
              <SideMenuItem className="side-menu-item-instance" option="avatar" state="inactive" />
              <SideMenuItem className="side-menu-item-instance" option="calendar" state="inactive" />
            </div>
            <div className="section">
              <div className="header-wrapper">
                <div className="text-wrapper-2">My Tribes</div>
                <img className="chevron" alt="Chevron" src={chevron} />
              </div>
              <div className="categories">
                <div className="tribe-item">
                  <div className="tribe-pic" />
                  <div className="lorem-4">V2</div>
                </div>
                <div className="tribe-item">
                  <div className="tribe-pic" />
                  <div className="lorem-4">Beloved.</div>
                </div>
                <div className="tribe-item">
                  <div className="tribe-pic" />
                  <div className="lorem-4">Ajaar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <Button className="button-instance" property1="side-menu-button" />
          </div>
        </>
      )}

      {userState === "unauthenticated" && (
        <div className="content-wrapper-2">
          <div className="section">
            <SideMenuItem className="side-menu-item-instance" option="home" state="active" />
            <SideMenuItem className="side-menu-item-instance" option="market" state="inactive" />
            <SideMenuItem className="side-menu-item-instance" option="profile" state="inactive" />
          </div>
          <div className="no-auth-section">
            <p className="p">Sign in to customize your avatar, join tribes, and earn points.</p>
            <Button className="button-2" divClassName="instance-node" property1="secondary-CTA-small" text="Sign in" />
          </div>
          <div className="section">
            <div className="header-wrapper-2">
              <div className="text-wrapper-2">My Tribes</div>
              <Icons2 className="icons-2-instance" />
            </div>
          </div>
          <div className="no-auth-section">
            <p className="p">You currently have no tribes joined.</p>
          </div>
        </div>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  userState: PropTypes.oneOf(["authenticated", "unauthenticated"]),
  sideMenuItemState: PropTypes.string,
  chevron: PropTypes.string,
};
