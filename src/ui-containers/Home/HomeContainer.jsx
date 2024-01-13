// HomeContainer.jsx
import React from 'react';
import ContentWrapper from '../ContentWrapper';
import WorldsContent from "./WorldsContent";
import TabsContainer from './TabsContainer';
import EventsContent from './EventsContent';
import EventPageContent from './EventPage/EventPageContent';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import WorldPageContent from './WorldPage/WorldPageContent';

const HomeContainer = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleTabClick = (tabName) => {
    // If 'Events' tab is clicked, navigate to the base URL of HomeContainer
    if (tabName === 'Events') {
      navigate('/');
    } else {
      // Otherwise, navigate to the specific nested route
      navigate(`/${tabName.toLowerCase()}`);
    }
  };

  // Determine if we're in nestedPage
  const isDetailedPage = location.pathname.includes('/events/') || location.pathname.includes('/worlds/')

  // Determine the active tab based on the current URL path
  const activeTab = location.pathname.includes('worlds') ? 'Worlds' : 'Events';

  return (
    <ContentWrapper width={"100%"} height={"calc(100vh - 64px)"}>
      {!isDetailedPage && <TabsContainer onTabClick={handleTabClick} homeTab={activeTab} />}
      <Routes>
        <Route index element={<EventsContent width={"100%"} />} />
        <Route path="worlds" element={<WorldsContent width={"100%"} />} />
        <Route path="events/:eventId" element={<EventPageContent width={"100%"}/>} />
        <Route path="worlds/:worldId" element={<WorldPageContent width={"100%"} />} />
        {/* You can add more nested routes here if necessary */}
      </Routes>
    </ContentWrapper>
  );
};

export default HomeContainer;
