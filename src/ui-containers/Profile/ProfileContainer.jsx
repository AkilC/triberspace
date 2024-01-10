// ProfileContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ContentWrapper';
import ProfileContent from "../../ui-components/ProfileContent";

const ProfileContainer = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"}>
      <ProfileContent width={"100%"}/>
    </ContentWrapper>
  );
};

export default ProfileContainer;
