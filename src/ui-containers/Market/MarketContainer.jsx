// MarketContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ContentWrapper';
import DiscoverContent from './DiscoverContent';
import ShopsContent from "./ShopsContent";
import AvatarsContent from './AvatarsContent';
import ClothingContent from './ClothingContent';
import MarketMenu from "./MarketMenu";
import EmotesContent from './EmotesContent';

const MarketContainer = ({ marketTab, setMarketTab }) => {
  const handleTabClick = (tabName) => {
    setMarketTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"} gap={"32px"}>
      <MarketMenu width={"100%"} onTabClick={handleTabClick} marketTab={marketTab}/>
      {marketTab === 'Discover' && <DiscoverContent width={"100%"} />}
      {marketTab === 'Stores' && <ShopsContent width={"100%"} />}
      {marketTab === 'Avatars' && <AvatarsContent width={"100%"} />}
      {marketTab === 'Emotes' && <EmotesContent width={"100%"} />}
      {marketTab === 'Clothing' && <ClothingContent width={"100%"} />}
    </ContentWrapper>
  );
};

export default MarketContainer;
