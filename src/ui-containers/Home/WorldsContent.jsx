import * as React from "react";
import { getOverrideProps } from "../../ui-components/utils";
import { Flex, Text } from "@aws-amplify/ui-react";
import WorldCardCollection from "../../ui-components/WorldCardCollection";
export default function WorldsContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "WorldsContent")}
      {...rest}
    >
      <Flex
        gap="auto"
        direction="row"
        width="100%"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header and Sort")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="32px"
          fontWeight="600"
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
          children="All worlds"
          {...getOverrideProps(overrides, "All worlds")}
        ></Text>
        {/* <Dropdown
          display="flex"
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(150,150,150,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          state="Closed"
          {...getOverrideProps(overrides, "Dropdown")}
        ></Dropdown> */}
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="100%"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        wrap="wrap"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 42")}
      >
        <WorldCardCollection/>
      </Flex>
    </Flex>
  );
}
