import * as React from "react";
import { getOverrideProps } from "../../ui-components/utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import ShopCardSmall from "../../ui-components/ShopCardSmall";
import ShopCardCollection from "./ShopCardCollection";
import Dropdown from "../../ui-components/Dropdown";
export default function EmotesContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1230px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 0px 24px 0px"
      {...getOverrideProps(overrides, "EmotesContent")}
      {...rest}
    >
      <Flex
        gap="840px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header and Sort")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.2px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Emotes"
          {...getOverrideProps(overrides, "Emotes")}
        ></Text>
        <Dropdown/>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Tile Wrapper")}
      >
        {/* <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204725")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204735")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204755")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204775")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204745")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204765")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204785")}
        ></ShopCardSmall>
        <ShopCardSmall
          display="flex"
          gap="16px"
          direction="column"
          width="288px"
          height="210px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "ShopCard-Small39204795")}
        ></ShopCardSmall> */}
        <ShopCardCollection/>
      </Flex>
    </Flex>
  );
}
