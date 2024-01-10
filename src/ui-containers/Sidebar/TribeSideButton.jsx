import * as React from "react";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import { getOverrideProps, mergeVariantsAndOverrides } from "../../ui-components/utils";

export default function TribeSideButton(props) {
  const {
    label, // Text for the button
    active, // If the button is active
    onClick, // Click handler for the button
    overrides: overridesProp,
    ...rest
  } = props;

  // Define the active state style
  const activeStyle = {
    fontWeight: "600",
    backgroundColor: "rgba(76,84,88,1)"
  };

  // Define the inactive state style
  const inactiveStyle = {
    fontWeight: "500",
    backgroundColor: "rgba(31,31,31,1)"
  };

  // Determine the styles based on the active state
  const styleOverrides = active ? activeStyle : inactiveStyle;

  // Merge the active state styles with any overrides provided through props
  const overrides = mergeVariantsAndOverrides(
    { TribeSideButton: styleOverrides },
    overridesProp || {}
  );

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      padding="8px 12px"
      borderRadius="12px"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      {...rest}
      {...getOverrideProps(overrides, "TribeSideButton")}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Wrapper")}
      >
        <View
          width="28px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="36px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "TribePic")}
        ></View>
      </Flex>
      <Text
        fontFamily="Work Sans"
        fontSize="24px"
        fontWeight={active ? "600" : "500"} // Make the text bold if active
        color="rgba(255,255,255,1)"
        children={label} // Use the label prop for the button text
        {...getOverrideProps(overrides, "Tribe Name")}
      />
    </Flex>
  );
}
