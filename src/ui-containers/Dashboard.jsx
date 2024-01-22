import * as React from "react";
import { useState } from "react";
import { getOverrideProps } from "../ui-components/utils";
import SidebarContainer from "./Sidebar/SidebarContainer";
import { Flex } from "@aws-amplify/ui-react";
import HomeContainer from "./Home/HomeContainer";
import MarketContainer from "./Market/MarketContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import AvatarContainer from "./Avatar/AvatarContainer";
import CalendarContainer from "./Calendar/CalendarContainer";
import TribeContainer from "./Tribes/TribeContainer";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Dashboard(props) {
  const { isAuth, overrides, ...rest } = props;

  // Initialize state from local storage or default to specific tabs
  const [activeTab, setActiveTab] = useState(
    sessionStorage.getItem("activeTab") || "Home"
  );// Initialize state from local storage or default to specific tabs
  const [homeTab, setHomeTab] = useState(sessionStorage.getItem('homeTab') || 'Events');
  const [marketTab, setMarketTab] = useState(sessionStorage.getItem('marketTab') || 'Discover');
  const [tribeTab, setTribeTab] = useState(sessionStorage.getItem('tribeTab') || 'Overview');
  //const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || 'Home');

  return (
    <Flex
      gap="0"
      direction="column"
      width="1600px"
      height="100%"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Dashboard")}
      {...rest}
    >
      <Navbar width="100%" isAuth={isAuth}/>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Main Content")}
      >
        <SidebarContainer
          activeTab={activeTab}
          onTabChange={setActiveTab}
          height="100%"
        />
        <Routes>
          <Route path="/*" element={<HomeContainer />} />
          <Route path="market/*" element={<MarketContainer />} />
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="avatar" element={<AvatarContainer />} />
          <Route path="calendar" element={<CalendarContainer />} />
          <Route path="tribe/:tribeId/*" element={<TribeContainer />} />
        </Routes>
        <Outlet />
      </Flex>
    </Flex>
  );
}
