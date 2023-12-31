/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Home } from "../Home";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar
        TP="https://c.animaapp.com/8TF7hHQo/img/tp-1.svg"
        className="navbar-instance"
        searchBar="https://c.animaapp.com/8TF7hHQo/img/search-bar-1.svg"
        state="authenticated"
      />
      <div className="main-content">
        <Sidebar
          chevron="https://c.animaapp.com/8TF7hHQo/img/chevron-1.svg"
          className="sidebar-instance"
          userState="authenticated"
        />
        <div className="page">
        <Home
            cardsImg="https://c.animaapp.com/BWnJGvur/img/personicon-40.svg"
            cardsImgClassName="home-5"
            cardsImgClassNameOverride="home-6"
            cardsPersonIcon="https://c.animaapp.com/BWnJGvur/img/personicon-40.svg"
            cardsPersonIcon1="https://c.animaapp.com/BWnJGvur/img/personicon-40.svg"
            cardsPersonIcon10="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon11="https://c.animaapp.com/BWnJGvur/img/personicon-36.svg"
            cardsPersonIcon2="https://c.animaapp.com/BWnJGvur/img/personicon-40.svg"
            cardsPersonIcon3="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon4="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon5="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon6="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon7="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon8="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIcon9="https://c.animaapp.com/BWnJGvur/img/personicon-48@2x.png"
            cardsPersonIconClassName="home-3"
            cardsPersonIconClassName1="home-7"
            cardsPersonIconClassName2="home-8"
            cardsPersonIconClassName3="home-9"
            cardsPersonIconClassName4="home-10"
            cardsPersonIconClassNameOverride="home-4"
            className="home-instance"
            content="spaces"
            tabsListItemState="inactive"
            tabsListItemState1="active"
          />
        </div>
      </div>
    </div>
  );
};
