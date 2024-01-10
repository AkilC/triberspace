import * as React from "react";
import { getOverrideProps } from "../../ui-components/utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import StoreCard from "../../ui-components/StoreCard";
import LargeButton from "../../ui-components/LargeButton";
import Dropdown from "../../ui-components/Dropdown";
import StoreCardCollection from "./StoreCardCollection";
export default function ShopsContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="148px"
      direction="column"
      width="1158px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 0px 24px 0px"
      {...getOverrideProps(overrides, "ShopsContent")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PageContent")}
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
            children="All stores"
            {...getOverrideProps(overrides, "All stores")}
          ></Text>
           <Dropdown
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
            ></Dropdown>
        </Flex>
        <Flex
          gap="16px"
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
          {/* <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792159")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792165")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792171")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792177")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792183")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792189")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792195")}
          ></StoreCard>
          <StoreCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreCard38792201")}
          ></StoreCard> */}
          <StoreCardCollection/>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Coming Soon")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="24px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="28.152000427246094px"
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
          children="More stores coming soon :)"
          {...getOverrideProps(overrides, "More stores coming soon :)")}
        ></Text>
        <LargeButton
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
          borderRadius="36px"
          padding="12px 12px 12px 12px"
          backgroundColor="rgba(222,232,237,1)"
          variation="Primary"
          {...getOverrideProps(overrides, "LargeButton")}
        ></LargeButton>
      </Flex>
    </Flex>
  );
}
