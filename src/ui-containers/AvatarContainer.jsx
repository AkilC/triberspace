// AvatarContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ui-components/ContentWrapper';
import AvatarContent from '../ui-components/AvatarContent';

const AvatarContainer = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"}>
      <AvatarContent width={"100%"}/>
    </ContentWrapper>
  );
};

export default AvatarContainer;
