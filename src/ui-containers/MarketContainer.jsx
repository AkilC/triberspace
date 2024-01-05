// MarketContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ui-components/ContentWrapper';
import DiscoverContent from '../ui-components/DiscoverContent'; // Your custom component for Spaces
import ShopsContent from "../ui-components/ShopsContent";
import TabsContainer from './TabsContainer';
import SubMenu from "../ui-components/SubMenu"

const MarketContainer = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"}>
      <SubMenu width={"100%"}/>
      <DiscoverContent width={"100%"}/>
    </ContentWrapper>
  );
};

export default MarketContainer;
