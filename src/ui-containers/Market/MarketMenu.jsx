import React from 'react';
import ListItem from "../../ui-components/ListItem";
import { Flex, Text } from "@aws-amplify/ui-react";

const MarketMenu = ({ marketTab, onTabClick }) => {
  const tabsData = [
    { name: "Discover", tabKey: 'Discover' },
    { name: "Stores", tabKey: 'Stores' },
    { name: "Avatars", tabKey: 'Avatars' },
    { name: "Emotes", tabKey: 'Emotes' },
    { name: "Clothing", tabKey: 'Clothing' },
  ];

  return (
    <Flex
      gap="auto"
      direction="row"
      width="100%"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      style={{ borderBottom: '1px solid rgba(59,58,58,1)' }}
      padding="0px 0px 12px 0px"
    >
      <Flex
        gap="300px"
        direction="row"
        width="100px"
        height="22px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="12px 0px 12px 0px"
      ></Flex>
      <Flex
        gap="40px"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="0px"
      >
        {tabsData.map(({ name, tabKey }) => {
          const isActive = marketTab === tabKey;
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
      <Flex
        gap="0"
        direction="row"
        width="100px"
        height="22px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="12px 0px 12px 0px"
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Text
            fontFamily="Work Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="13.225591659545898px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.07px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cart (0)"
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MarketMenu;
