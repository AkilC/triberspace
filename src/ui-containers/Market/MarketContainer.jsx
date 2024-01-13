// MarketContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ContentWrapper';
import DiscoverContent from './DiscoverContent';
import ShopsContent from "./ShopsContent";
import AvatarsContent from './AvatarsContent';
import ClothingContent from './ClothingContent';
import MarketMenu from "./MarketMenu";
import EmotesContent from './EmotesContent';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const MarketContainer = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleTabClick = (tabName) => {
    if (tabName === "Discover") {
      navigate('/market');
    } else {
      navigate(`/market/${tabName}`);
    }
  };

  // Determine the active tab based on the current URL path
  const pathSegments = location.pathname.split('/');
  const activeTab = pathSegments.length === 2 ? "Discover" : pathSegments.pop();

  console.log(activeTab);

  return (
    <ContentWrapper width={"100%"} gap={"32px"}>
      <MarketMenu width={"100%"} onTabClick={handleTabClick} marketTab={activeTab}/>
      <Routes>
        <Route index element={<DiscoverContent width={"100%"} />} />
        <Route path="Stores" element={<ShopsContent width={"100%"} />} />
        <Route path="Avatars" element={<AvatarsContent width={"100%"} />} />
        <Route path="Emotes" element={<EmotesContent width={"100%"} />} />
        <Route path="Clothing" element={<ClothingContent width={"100%"} />} />
        {/* Additional nested routes as needed */}
      </Routes>
    </ContentWrapper>
  );
};

export default MarketContainer;
