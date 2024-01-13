import * as React from "react";
import { useState, useEffect } from "react";
import { getOverrideProps } from "../ui-components/utils";
import NavbarAuthenticated from "../ui-components/NavbarAuthenticated";
import SidebarContainer from "./Sidebar/SidebarContainer";
import { Flex } from "@aws-amplify/ui-react";
import HomeContainer from "./Home/HomeContainer";
import MarketContainer from "./Market/MarketContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import AvatarContainer from "./Avatar/AvatarContainer";
import CalendarContainer from "./Calendar/CalendarContainer";
import TribeContainer from "./Tribes/TribeContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Dashboard(props) {
  const { overrides, ...rest } = props;

  // Initialize state from local storage or default to specific tabs
  const [homeTab, setHomeTab] = useState(sessionStorage.getItem('homeTab') || 'Events');
  const [marketTab, setMarketTab] = useState(sessionStorage.getItem('marketTab') || 'Discover');
  const [tribeTab, setTribeTab] = useState(sessionStorage.getItem('tribeTab') || 'Overview');
  const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || 'Home');

  /* useEffect(() => {
    // Update local storage when state changes
    sessionStorage.setItem('homeTab', homeTab);
    sessionStorage.setItem('marketTab', marketTab);
    sessionStorage.setItem('tribeTab', tribeTab);
    sessionStorage.setItem('activeTab', activeTab);
  }, [homeTab, marketTab, tribeTab, activeTab]);

  let mainContent;
  switch (activeTab) {
    case 'Home':
      mainContent = <HomeContainer homeTab={homeTab} setHomeTab={setHomeTab}/>;
      break;
    case 'Market':
      mainContent = <MarketContainer marketTab={marketTab} setMarketTab={setMarketTab}/>;
      break;
    case 'Profile':
      mainContent = <ProfileContainer/>;
      break;
    case 'Avatar':
      mainContent = <AvatarContainer />;
      break;
    case 'Calendar':
      mainContent = <CalendarContainer />;
      break;
    case 'tribe1':
      mainContent = <TribeContainer tribeTab={tribeTab} setTribeTab={setTribeTab} />;
      break;
    default:
      mainContent = <HomeContainer />;
  } */

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
        <NavbarAuthenticated
          display="flex"
          gap="10px"
          direction="column"
          width="unset"
          height="64px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(59,58,58,1)"
          padding="17px 35px 17px 35px"
          backgroundColor="rgba(31,31,31,1)"
          {...getOverrideProps(overrides, "Navbar-Authenticated")}
        ></NavbarAuthenticated>
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
          <SidebarContainer activeTab={activeTab} onTabChange={setActiveTab} height="100%"/>
          <Routes>
              <Route path="/*" element={<HomeContainer />} />
              <Route path="/market/*" element={<MarketContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/avatar" element={<AvatarContainer />} />
              <Route path="/calendar" element={<CalendarContainer />} />
              <Route path="/tribe/:tribeId/*" element={<TribeContainer />} />
          </Routes>
          {/* {mainContent} */}
        </Flex>
      </Flex>
  );
}
