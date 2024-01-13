import React from 'react';
import ContentWrapper from '../ContentWrapper';
import TribeOverview from "../../ui-components/TribeOverview";
import ChatContent from "../../ui-components/ChatContent";
import ShopPageContent from "../../ui-components/ShopPageContent"
import CalendarContent from '../../ui-components/CalendarContent';
import TribeMenu from './TribeMenu';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

const TribeContainer = () => {
  let { tribeId } = useParams(); // Capture the dynamic tribe ID
  let navigate = useNavigate();

  const handleTabClick = (tabName) => {
    // Navigate to the base route for 'Overview', otherwise to the specific tab
    const targetRoute = tabName === "Overview" ? `/tribe/${tribeId}` : `/tribe/${tribeId}/${tabName}`;
    navigate(targetRoute);
  };

  // Determine the active tab based on the current URL path
  const pathSegments = window.location.pathname.split('/');
  const activeTab = pathSegments.length === 3 ? "Overview" : pathSegments.pop();
  console.log(activeTab);

  return (
    <ContentWrapper width={"100%"} alignItems={"center"} gap={"12px"}>
      <TribeMenu width={"100%"} onTabClick={handleTabClick} tribeTab={activeTab}/>
      <Routes>
        <Route index element={<TribeOverview width={"100%"} />} />
        <Route path="Schedule" element={<CalendarContent width={"100%"} />} />
        <Route path="Chat" element={<ChatContent width={"100%"} />} />
        <Route path="Shop" element={<ShopPageContent width={"100%"} />} />
      </Routes>
    </ContentWrapper>
  );
};

export default TribeContainer;
