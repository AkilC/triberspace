// ProfileContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ContentWrapper';
import TribeOverview from "../../ui-components/TribeOverview";
import ChatContent from "../../ui-components/ChatContent";
import ShopPageContent from "../../ui-components/ShopPageContent"
import CalendarContent from '../../ui-components/CalendarContent';
import TribeMenu from './TribeMenu';

const ProfileContainer = ({ tribeTab, setTribeTab }) => {
  const handleTabClick = (tabName) => {
    setTribeTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"} alignItems={"center"} gap={"12px"}>
      <TribeMenu width={"100%"} onTabClick={handleTabClick} tribeTab={tribeTab}/>
      {tribeTab === 'Overview' && <TribeOverview width={"100%"} />}
      {tribeTab === 'Schedule' && <CalendarContent width={"100%"} />}
      {tribeTab === 'Chat' && <ChatContent width={"100%"} />}
      {tribeTab === 'Shop' && <ShopPageContent width={"100%"} />}
    </ContentWrapper>
  );
};

export default ProfileContainer;
