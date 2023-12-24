/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HomeSpaces } from "../HomeSpaces";
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
          <HomeSpaces
            cardsImg="https://c.animaapp.com/8TF7hHQo/img/personicon-46.svg"
            cardsImgClassName="home-spaces-4"
            cardsImgClassNameOverride="home-spaces-5"
            cardsPersonIcon="https://c.animaapp.com/8TF7hHQo/img/personicon-46.svg"
            cardsPersonIcon1="https://c.animaapp.com/8TF7hHQo/img/personicon-46.svg"
            cardsPersonIcon10="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon11="https://c.animaapp.com/8TF7hHQo/img/personicon-48.svg"
            cardsPersonIcon2="https://c.animaapp.com/8TF7hHQo/img/personicon-46.svg"
            cardsPersonIcon3="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon4="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon5="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon6="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon7="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon8="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIcon9="https://c.animaapp.com/8TF7hHQo/img/personicon-16@2x.png"
            cardsPersonIconClassName="home-spaces-2"
            cardsPersonIconClassName1="home-spaces-6"
            cardsPersonIconClassName2="home-spaces-7"
            cardsPersonIconClassName3="home-spaces-8"
            cardsPersonIconClassName4="home-spaces-9"
            cardsPersonIconClassNameOverride="home-spaces-3"
            className="home-spaces-instance"
          />
        </div>
      </div>
    </div>
  );
};
