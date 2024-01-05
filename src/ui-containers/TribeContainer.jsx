// ProfileContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ui-components/ContentWrapper';
import TribeOverview from "../ui-components/TribeOverview";

const ProfileContainer = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"}>
      <TribeOverview width={"100%"}/>
    </ContentWrapper>
  );
};

export default ProfileContainer;
