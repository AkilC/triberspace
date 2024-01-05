import * as React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "../ui-components/MyIcon";
import { getOverrideProps, mergeVariantsAndOverrides } from "../ui-components/utils";

export default function SideButton(props) {
  const {
    label, // Text for the button
    iconType, // Type of icon for inactive state
    activeIconType, // Type of icon for active state
    active, // If the button is active
    onClick, // Click handler for the button
    overrides: overridesProp,
    ...rest
  } = props;

  // Choose icon type based on active state
  const icon = active ? activeIconType : iconType;

  // Determine the overrides based on the active state
  const activeOverrides = active
    ? {
        MyIcon: { type: activeIconType },
        Lorem: { fontWeight: "600" },
        SideButton: { backgroundColor: "rgba(76,84,88,1)" },
      }
    : {
        MyIcon: { type: iconType },
      };

  // Merge the active state overrides with any overrides provided through props
  const overrides = mergeVariantsAndOverrides(
    activeOverrides,
    overridesProp || {}
  );

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      padding="8px 12px"
      borderRadius="12px"
      backgroundColor={active ? "rgba(76,84,88,1)" : "rgba(31,31,31,1)"}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      {...rest}
      {...getOverrideProps(overrides, "SideButton")}
    >
      <MyIcon
        display="block"
        type={icon} // Set the icon type based on active state
        {...getOverrideProps(overrides, "MyIcon")}
      />
      <Text
        fontFamily="Work Sans"
        fontSize="24px"
        fontWeight={active ? "600" : "500"} // Make the text bold if active
        color="rgba(255,255,255,1)"
        children={label} // Use the label prop for the button text
        {...getOverrideProps(overrides, "Lorem")}
      />
    </Flex>
  );
}
