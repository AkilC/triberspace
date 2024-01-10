import React from 'react';
import ListItem from "../../ui-components/ListItem";
import { Flex } from "@aws-amplify/ui-react";

const TribeMenu = ({ tribeTab, onTabClick }) => {
  const tabsData = [
    { name: "Overview", tabKey: 'Overview' },
    { name: "Schedule", tabKey: 'Schedule' },
    { name: "Chat", tabKey: 'Chat' },
    { name: "Shop", tabKey: 'Shop' },
  ];

  return (
    <Flex
      gap="10px"
      direction="column"
      width="100%"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      style={{ borderBottom: '1px solid rgba(59,58,58,1)' }}
      padding="0px 55px 12px 55px"
    >
      <Flex
        gap="36px"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="0px"
      >
        {tabsData.map(({ name, tabKey }) => {
          const isActive = tribeTab === tabKey;
          return (
            <ListItem
              key={tabKey}
              onClick={() => onTabClick(tabKey)}
              state={isActive ? "Active" : "Inactive"}
              style={{ cursor: 'pointer', padding: '0px' }}
              overrides={{
                Lorem: {
                  children: name,
                  fontWeight: isActive ? "600" : "400",
                  textDecoration: isActive ? "underline" : "none"
                }
              }}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default TribeMenu;
