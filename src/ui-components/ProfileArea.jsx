/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function ProfileArea(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="22px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileArea")}
      {...rest}
    >
      <Flex
        width="100px"
        height="unset"
        {...getOverrideProps(overrides, "Button38588741")}
      ></Flex>
      <Flex
        width="100px"
        height="unset"
        {...getOverrideProps(overrides, "Button38588742")}
      ></Flex>
    </Flex>
  );
}
