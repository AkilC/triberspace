// HomeContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from './ContentWrapper';
import EventsContent from '../ui-components/EventsContent'; // Your custom component for Spaces
import WorldsContent from "../ui-components/WorldsContent";
import TabsContainer from './TabsContainer';

const HomeContainer = ({ homeTab, setHomeTab }) => {
  const handleTabClick = (tabName) => {
    setHomeTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"} height={"calc(100vh - 64px)"}>
      <TabsContainer onTabClick={handleTabClick} homeTab={homeTab} />
      {homeTab === 'Events' && <EventsContent width={"100%"} />}
      {homeTab === 'Worlds' && <WorldsContent width={"100%"}/>}
    </ContentWrapper>
  );
};

export default HomeContainer;
