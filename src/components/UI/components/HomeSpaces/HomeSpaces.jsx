/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cards } from "../Cards";
import "./style.css";

export const HomeSpaces = ({
  className,
  cardsPersonIcon = "https://c.animaapp.com/8TF7hHQo/img/personicon-45.svg",
  cardsImg = "https://c.animaapp.com/8TF7hHQo/img/personicon-45.svg",
  cardsPersonIcon1 = "https://c.animaapp.com/8TF7hHQo/img/personicon-45.svg",
  cardsPersonIcon2 = "https://c.animaapp.com/8TF7hHQo/img/personicon-42.svg",
  cardsPersonIconClassName,
  cardsPersonIcon3 = "https://c.animaapp.com/8TF7hHQo/img/personicon-41.svg",
  cardsPersonIcon4 = "https://c.animaapp.com/8TF7hHQo/img/personicon-41.svg",
  cardsPersonIconClassNameOverride,
  cardsPersonIcon5 = "https://c.animaapp.com/8TF7hHQo/img/personicon-41.svg",
  cardsImgClassName,
  cardsPersonIcon6 = "https://c.animaapp.com/8TF7hHQo/img/personicon-38.svg",
  cardsImgClassNameOverride,
  cardsPersonIcon7 = "https://c.animaapp.com/8TF7hHQo/img/personicon-37.svg",
  cardsPersonIconClassName1,
  cardsPersonIcon8 = "https://c.animaapp.com/8TF7hHQo/img/personicon-37.svg",
  cardsPersonIconClassName2,
  cardsPersonIcon9 = "https://c.animaapp.com/8TF7hHQo/img/personicon-37.svg",
  cardsPersonIconClassName3,
  cardsPersonIcon10 = "https://c.animaapp.com/8TF7hHQo/img/personicon-34.svg",
  cardsPersonIconClassName4,
  cardsPersonIcon11 = "https://c.animaapp.com/8TF7hHQo/img/personicon-46.svg",
}) => {
  return (
    <div className={`home-spaces ${className}`}>
      <div className="tabs">
        <div className="tab">Spaces</div>
        <div className="tab-2">Worlds</div>
      </div>
      <div className="events-page-content">
        <div className="section-wrapper">
          <div className="header-wrapper-3">
            <div className="header">Galleries</div>
          </div>
          <div className="tiles">
            <Cards
              className="cards-instance"
              personIcon="https://c.animaapp.com/8TF7hHQo/img/personicon-48.svg"
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon="https://c.animaapp.com/8TF7hHQo/img/personicon-48.svg"
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon="https://c.animaapp.com/8TF7hHQo/img/personicon-48.svg"
              type="event-tile"
            />
            <Cards className="cards-instance" personIcon={cardsPersonIcon11} type="event-tile" />
          </div>
        </div>
        <div className="section-wrapper">
          <div className="header-wrapper-3">
            <div className="header">Theatres</div>
          </div>
          <div className="tiles">
            <Cards className="cards-instance" personIcon={cardsPersonIcon} type="event-tile" />
            <Cards className="cards-instance" personIcon={cardsImg} type="event-tile" />
            <Cards className="cards-instance" personIcon={cardsPersonIcon1} type="event-tile" />
            <Cards className="cards-instance" personIcon={cardsPersonIcon2} type="event-tile" />
          </div>
        </div>
        <div className="section-wrapper">
          <div className="header-wrapper-3">
            <div className="header">Music</div>
          </div>
          <div className="tiles">
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon3}
              personIconClassName={cardsPersonIconClassName}
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon4}
              personIconClassName={cardsPersonIconClassNameOverride}
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon5}
              personIconClassName={cardsImgClassName}
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon6}
              personIconClassName={cardsImgClassNameOverride}
              type="event-tile"
            />
          </div>
        </div>
        <div className="section-wrapper">
          <div className="header-wrapper-3">
            <div className="header">Plaza</div>
          </div>
          <div className="tiles">
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon7}
              personIconClassName={cardsPersonIconClassName1}
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon8}
              personIconClassName={cardsPersonIconClassName2}
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon9}
              personIconClassName={cardsPersonIconClassName3}
              type="event-tile"
            />
            <Cards
              className="cards-instance"
              personIcon={cardsPersonIcon10}
              personIconClassName={cardsPersonIconClassName4}
              type="event-tile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HomeSpaces.propTypes = {
  cardsPersonIcon: PropTypes.string,
  cardsImg: PropTypes.string,
  cardsPersonIcon1: PropTypes.string,
  cardsPersonIcon2: PropTypes.string,
  cardsPersonIcon3: PropTypes.string,
  cardsPersonIcon4: PropTypes.string,
  cardsPersonIcon5: PropTypes.string,
  cardsPersonIcon6: PropTypes.string,
  cardsPersonIcon7: PropTypes.string,
  cardsPersonIcon8: PropTypes.string,
  cardsPersonIcon9: PropTypes.string,
  cardsPersonIcon10: PropTypes.string,
  cardsPersonIcon11: PropTypes.string,
};
