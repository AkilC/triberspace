import * as React from "react";
import { useState } from "react";
import { getOverrideProps } from "../ui-components/utils";
import NavbarAuthenticated from "../ui-components/NavbarAuthenticated";
import SidebarContainer from "./SidebarContainer";
import { Flex } from "@aws-amplify/ui-react";
import HomeContainer from "./HomeContainer";
import MarketContainer from "./MarketContainer";
import ProfileContainer from "./ProfileContainer";
import AvatarContainer from "./AvatarContainer";
import CalendarContainer from "./CalendarContainer";
import TribeContainer from "./TribeContainer";

export default function Dashboard(props) {
  const { overrides, ...rest } = props;
  const [homeTab, setHomeTab] = useState('Events');
  const [activeTab, setActiveTab] = useState('Home');

  let mainContent;
  switch (activeTab) {
    case 'Home':
      mainContent = <HomeContainer homeTab={homeTab} setHomeTab={setHomeTab}/>;
      break;
    case 'Market':
      mainContent = <MarketContainer />;
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
    case 'Tribe':
      mainContent = <TribeContainer />;
      break;
    default:
      mainContent = <HomeContainer />;
  }

  return (
    <Flex
      gap="0"
      direction="column"
      width="1600px"
      height="940px"
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
        <SidebarContainer activeTab={activeTab} onTabChange={setActiveTab} />
        {mainContent}
      </Flex>
    </Flex>
  );
}
