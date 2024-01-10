// CalendarContainer.jsx
import React, { useContext } from 'react';
import ContentWrapper from '../ContentWrapper';
import CalendarContent from '../../ui-components/CalendarContent';

const CalendarContainer = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ContentWrapper width={"100%"}>
      <CalendarContent width={"100%"}/>
    </ContentWrapper>
  );
};

export default CalendarContainer;
