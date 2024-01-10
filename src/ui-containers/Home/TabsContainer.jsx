import React, { useState } from 'react';
import Tabs from '../../ui-components/Tabs';

const TabsContainer = ({ homeTab, onTabClick }) => {
  // Prepare override props for the Tabs component
  const tabsOverrides = {
    "List Item38586432": {
      onClick: () => onTabClick('Events'), // Set the onClick handler
      state: homeTab === 'Events' ? 'Active' : 'Inactive', // Set the state based on the active tab
      style: { cursor: 'pointer' },
      overrides: {
        Lorem: { // This key should match the key used in your ListItem for the Text component
          children: "Events",
          // You can add other styling here if necessary
        },
      },
    },
    "List Item38586433": {
      onClick: () => onTabClick('Worlds'), // Set the onClick handler
      state: homeTab === 'Worlds' ? 'Active' : 'Inactive', // Set the state based on the active tab
      style: { cursor: 'pointer' },
      overrides: {
        Lorem: { // This key should match the key used in your ListItem for the Text component
          children: "Worlds",
          // You can add other styling here if necessary
        },
      },
    }
  };

  return <Tabs overrides={tabsOverrides} />;
};

export default TabsContainer;
