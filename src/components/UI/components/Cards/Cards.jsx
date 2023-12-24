/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Cards = ({
  type,
  className,
  personIcon = "https://c.animaapp.com/8TF7hHQo/img/personicon-48.svg",
  personIconClassName,
}) => {
  return (
    <div className={`cards ${type} ${className}`}>
      {["event-tile", "space", "store", "world-tile"].includes(type) && (
        <>
          <div className="image">
            {["event-tile", "store", "world-tile"].includes(type) && <div className="rectangle" />}

            {type === "space" && <>Lorem</>}
          </div>
          <div className="content-wrapper-3">
            {type === "event-tile" && (
              <>
                <div className="title-and-detail">
                  <div className="text-wrapper-3">Event Title</div>
                </div>
                <div className="creator-name-wrapper">
                  <div className="text-wrapper-4">By creator name</div>
                </div>
                <div className="creator-name-wrapper-2">
                  <div className="text-wrapper-4">12/24/23 - 12/28/23</div>
                </div>
              </>
            )}

            {["event-tile", "store"].includes(type) && (
              <div className="current-users">
                <div className="store-name">
                  {type === "store" && <>Store Name</>}

                  {type === "event-tile" && <>80</>}
                </div>
                {type === "event-tile" && (
                  <img className={`img-2 ${personIconClassName}`} alt="Person icon" src={personIcon} />
                )}
              </div>
            )}

            {["space", "world-tile"].includes(type) && (
              <>
                <div className="name-wrapper">
                  {type === "world-tile" && <div className="text-wrapper-3">World Name</div>}
                </div>
                <div className="current-users-2">
                  {type === "world-tile" && (
                    <>
                      <div className="text-wrapper-5">40</div>
                      <img className="img-2" alt="Person" src="https://c.animaapp.com/8TF7hHQo/img/person-1.svg" />
                    </>
                  )}

                  {type === "space" && (
                    <>
                      <div className="title">
                        <div className="text-wrapper-6">Current exhibit name</div>
                        <div className="people-wrapper">
                          <div className="text-wrapper-7">15</div>
                          <img className="person" alt="Person" src="https://c.animaapp.com/8TF7hHQo/img/person.svg" />
                        </div>
                      </div>
                      <div className="text-wrapper-8">On view until 11/30/23</div>
                      <div className="side-menu-item-2">
                        <div className="text-wrapper-9">Enter</div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}

      {type === "space-small" && (
        <>
          <div className="text-wrapper-9">Lorem</div>
          <div className="image-2" />
          <Button className="button-3" property1="secondary-CTA" text="Enter" />
        </>
      )}

      {["shop-card-short", "shop-card-tall"].includes(type) && (
        <div className="content-2">
          <div className="text-wrapper-10">
            <div className="name-wrapper-2">
              <div className="text-wrapper-11">Item name</div>
            </div>
            <div className="text-wrapper-12">Creator name</div>
          </div>
          <div className="price-wrapper">
            <img
              className="TRD-logo"
              alt="Trd logo"
              src={
                type === "shop-card-short"
                  ? "https://c.animaapp.com/8TF7hHQo/img/trd-logo.svg"
                  : "https://c.animaapp.com/8TF7hHQo/img/trd-logo-1.svg"
              }
            />
            <div className="text-wrapper-13">400 ($80)</div>
          </div>
        </div>
      )}
    </div>
  );
};

Cards.propTypes = {
  type: PropTypes.oneOf([
    "event-tile",
    "space",
    "store",
    "space-small",
    "shop-card-short",
    "world-tile",
    "shop-card-tall",
  ]),
  personIcon: PropTypes.string,
};
