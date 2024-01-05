import PropTypes from "prop-types";
import React, { useState } from "react";
import { Cards } from "../Cards";
import { Tabs } from "../Tabs";
import "./style.css";
import EventCard from "../../../../ui-components/EventCard";
import '@aws-amplify/ui-react/styles.css'

export const Home = ({
  content,
  className,
  cardsPersonIcon = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsImg = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIcon1 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIcon2 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIconClassName,
  cardsPersonIcon3 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIconClassNameOverride,
  cardsPersonIcon4 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsImgClassName,
  cardsPersonIcon5 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsImgClassNameOverride,
  cardsPersonIcon6 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIconClassName1,
  cardsPersonIcon7 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIconClassName2,
  cardsPersonIcon8 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIconClassName3,
  cardsPersonIcon9 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  cardsPersonIconClassName4,
  cardsPersonIcon10 = "https://c.animaapp.com/BWnJGvur/img/personicon-31@2x.png",
  tabsListItemState,
  tabsListItemState1,
  cardsPersonIcon11 = "https://c.animaapp.com/BWnJGvur/img/personicon-40.svg",
}) => {
  const [activeTab, setActiveTab] = useState("Events");
  return (
    <div className={`home ${activeTab} ${className}`}>
      <Tabs
        className="instance-node-2"
        listItemState={activeTab === "Events" ? "active" : "inactive"}
        listItemState1={activeTab === "worlds" ? "active" : "inactive"}
        listItemText="Events"
        listItemText1="Worlds"
        onEventsClick={() => setActiveTab("Events")}
        onWorldsClick={() => setActiveTab("worlds")}
      />
      {activeTab === "Events" && (
        <div className="events-page-content">
          {/* <div className="section-wrapper">
            <div className="header-wrapper-3">
              <div className="header">Happening now</div>
            </div>
            <div className="div-2">
              <Cards
                className="instance-node-2"
                personIcon="https://c.animaapp.com/BWnJGvur/img/personicon-36.svg"
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon="https://c.animaapp.com/BWnJGvur/img/personicon-36.svg"
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon="https://c.animaapp.com/BWnJGvur/img/personicon-36.svg"
                type="event-tile"
              />
              <Cards className="instance-node-2" personIcon={cardsPersonIcon11} type="event-tile" />
            </div>
          </div> */}
          <div className="section-wrapper">
            <div className="header-wrapper-3">
              <div className="header">Watch Parties</div>
            </div>
            <div className="div-2">
              <EventCard
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsImg}
                personIconClassName="cards-2"
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon1}
                personIconClassName="cards-3"
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon2}
                personIconClassName="cards-4"
                type="event-tile"
              />
            </div>
          </div>
          <div className="section-wrapper">
            <div className="header-wrapper-3">
              <div className="header">Listening Parties</div>
            </div>
            <div className="div-2">
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon3}
                personIconClassName={cardsPersonIconClassName}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon4}
                personIconClassName={cardsPersonIconClassNameOverride}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon5}
                personIconClassName={cardsImgClassName}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon6}
                personIconClassName={cardsImgClassNameOverride}
                type="event-tile"
              />
            </div>
          </div>
          <div className="section-wrapper">
            <div className="header-wrapper-3">
              <div className="header">Art Exhibits</div>
            </div>
            <div className="div-2">
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon7}
                personIconClassName={cardsPersonIconClassName1}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon8}
                personIconClassName={cardsPersonIconClassName2}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon9}
                personIconClassName={cardsPersonIconClassName3}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon10}
                personIconClassName={cardsPersonIconClassName4}
                type="event-tile"
              />
            </div>
          </div>
          <div className="section-wrapper">
            <div className="header-wrapper-3">
              <div className="header">Panel Talks</div>
            </div>
            <div className="div-2">
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon7}
                personIconClassName={cardsPersonIconClassName1}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon8}
                personIconClassName={cardsPersonIconClassName2}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon9}
                personIconClassName={cardsPersonIconClassName3}
                type="event-tile"
              />
              <Cards
                className="instance-node-2"
                personIcon={cardsPersonIcon10}
                personIconClassName={cardsPersonIconClassName4}
                type="event-tile"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "worlds" && (
        <>
          <div className="header-and-sort">
            <div className="text-wrapper-14">All worlds</div>
            <div className="sort">
              <div className="text-wrapper-15">Sort by</div>
              <img className="vector" alt="Vector" src="https://c.animaapp.com/BWnJGvur/img/vector-11.svg" />
            </div>
          </div>
          <div className="div-2">
            <Cards
              className="instance-node-2"
              person="https://c.animaapp.com/BWnJGvur/img/person-2.svg"
              type="world-tile"
            />
            <Cards
              className="instance-node-2"
              person="https://c.animaapp.com/BWnJGvur/img/person-2.svg"
              type="world-tile"
            />
            <Cards
              className="instance-node-2"
              person="https://c.animaapp.com/BWnJGvur/img/person-2.svg"
              type="world-tile"
            />
            <Cards
              className="instance-node-2"
              person="https://c.animaapp.com/BWnJGvur/img/person-5.svg"
              type="world-tile"
            />
            <Cards
              className="instance-node-2"
              person="https://c.animaapp.com/BWnJGvur/img/person-5.svg"
              type="world-tile"
            />
            <Cards
              className="instance-node-2"
              person="https://c.animaapp.com/BWnJGvur/img/person-5.svg"
              type="world-tile"
            />
          </div>
        </>
      )}
    </div>
  );
};

Home.propTypes = {
  content: PropTypes.oneOf(["worlds", "Events"]),
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
  tabsListItemState: PropTypes.string,
  tabsListItemState1: PropTypes.string,
  cardsPersonIcon11: PropTypes.string,
};
