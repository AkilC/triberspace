import PropTypes from "prop-types";
import React from "react";
import { ListItem } from "../ListItem";
import "./style.css";

export const Tabs = ({
  className,
  listItemText,
  listItemText1,
  listItemState,
  listItemState1,
  onEventsClick,
  onWorldsClick,
}) => {
  return (
    <div className={`tabs ${className}`}>
      <ListItem
        className="list-item-instance"
        state={listItemState}
        text={listItemText}
        onClick={onEventsClick}
      />
      <ListItem
        className="list-item-instance"
        state={listItemState1}
        text={listItemText1}
        onClick={onWorldsClick}
      />
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  listItemText: PropTypes.string,
  listItemText1: PropTypes.string,
  listItemState: PropTypes.string,
  listItemState1: PropTypes.string,
  onEventsClick: PropTypes.func.isRequired,
  onWorldsClick: PropTypes.func.isRequired,
};
