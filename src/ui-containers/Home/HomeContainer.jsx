// HomeContainer.jsx
import React from 'react';
import ContentWrapper from '../ContentWrapper';
/* import EventsContent from '../ui-components/EventsContent'; // Your custom component for Spaces */
import WorldsContent from "./WorldsContent";
import TabsContainer from './TabsContainer';
import EventsContent from './EventsContent';

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
