import * as React from "react";
import { getOverrideProps } from "../../ui-components/utils";
import { Flex, Text } from "@aws-amplify/ui-react";
import TribeSideButton from "./TribeSideButton";
import CardsPremiumButton from "../../ui-components/CardsPremiumButton";
import SideButton from "./SideButton";
export default function SidebarAuthenticated(props) {
  const { overrides, ...rest } = props;
  const { activeTab, onTabChange, ...otherProps } = props;

  // Handle the logic for tracking the active tab and rendering styles
  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  const tribes = [
    { id: "tribe1", name: "Tribe 1" },
    { id: "tribe2", name: "Tribe 2" },
    { id: "tribe3", name: "Tribe 3" },
    // Add more tribes as needed
  ];
  
  return (
    <Flex
      gap="10px"
      direction="column"
      width="298px"
      height="876px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(59,58,58,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "SidebarAuthenticated")}
      {...rest}
    >
      <Flex
        gap="64px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "ContentWrapper")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Pages")}
        >
          <SideButton
            label="Home"
            iconType="homeStroke"
            activeIconType="HomeFilled"
            active={activeTab === 'Home'}
            onClick={() => onTabChange('Home')}
            width="100%"
          />
          <SideButton
            label="Market"
            iconType="MarketNoFill" // Stroke version of the icon
            activeIconType="MarketFill" // Filled version of the icon for active state
            active={activeTab === 'Market'}
            onClick={() => onTabChange('Market')}
            width="100%"
          />
          <SideButton
            label="Profile"
            iconType="PersonNoFill" // Stroke version of the icon
            activeIconType="PersonFill" // Filled version of the icon for active state
            active={activeTab === 'Profile'}
            onClick={() => onTabChange('Profile')}
            width="100%"
          />
          <SideButton
            label="Avatar"
            iconType="Avatar-NoFill" // Stroke version of the icon
            activeIconType="AvatarFill" // Filled version of the icon for active state
            active={activeTab === 'Avatar'}
            onClick={() => onTabChange('Avatar')}
            width="100%"
          />
          <SideButton
            label="Calendar"
            iconType="CalendarStroke" // Stroke version of the icon
            activeIconType="CalendarFill" // Filled version of the icon for active state
            active={activeTab === 'Calendar'}
            onClick={() => onTabChange('Calendar')}
            width="100%"
          />
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Explore")}
        >
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 187")}
          >
            <Text
              fontFamily="Work Sans"
              fontSize="24px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.11px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="My Tribes"
              {...getOverrideProps(overrides, "My Tribes")}
            ></Text>
            <Flex
              width="20px"
              height="20px"
              {...getOverrideProps(overrides, "Icons")}
            ></Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Categories")}
            >
            {tribes.map((tribe) => (
                <TribeSideButton
                key={tribe.id}
                label={tribe.name}
                active={activeTab === tribe.id}
                width="100%"
                onClick={() => onTabChange(tribe.id)}
                />
            ))}
            </Flex>
            </Flex>
          </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(59,58,58,1)"
        padding="15px 15px 15px 15px"
        {...getOverrideProps(overrides, "BottomSection")}
      >
        <CardsPremiumButton
          display="flex"
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="12px"
          padding="12px 12px 12px 12px"
          backgroundColor="rgba(222,232,237,1)"
          {...getOverrideProps(overrides, "Cards/PremiumButton")}
        ></CardsPremiumButton>
      </Flex>
    </Flex>
  );
}
