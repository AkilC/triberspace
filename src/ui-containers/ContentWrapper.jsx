import * as React from "react";
import { getOverrideProps } from "../ui-components/utils";
import { Flex } from "@aws-amplify/ui-react";
export default function ContentWrapper(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="column"
      width="100%"
      height="calc(100vh - 64px)"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="auto"
      position="relative"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "ContentWrapper")}
      {...rest}
    ></Flex>
  );
}
