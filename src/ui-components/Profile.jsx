/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1302px"
      height="876px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "Profile")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="row"
        width="1200px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TopBar")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Icons")}
        ></Flex>
      </Flex>
      <Flex
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfileSettingsContent")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileSettings")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="700"
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
            children="Profile Settings"
            {...getOverrideProps(overrides, "Profile Settings")}
          ></Text>
          <Flex
            gap="22px"
            direction="column"
            width="650px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "FieldsWrapper")}
          >
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "NameWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Name:"
                {...getOverrideProps(overrides, "Name:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "NameField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "UsernameWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Username:"
                {...getOverrideProps(overrides, "Username:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "UsernameField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "EmailWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Email:"
                {...getOverrideProps(overrides, "Email:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "EmailField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "BirthdateWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Birthdate: "
                {...getOverrideProps(overrides, "Birthdate:")}
              ></Text>
              <View
                width="297px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "BirthdateField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "GenderWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Gender: "
                {...getOverrideProps(overrides, "Gender:")}
              ></Text>
              <View
                width="298px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "GenderField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "LocationWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Location: "
                {...getOverrideProps(overrides, "Location:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "LocationField")}
              ></View>
            </Flex>
          </Flex>
        </Flex>
        <Icon
          width="unset"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1230, height: 1 }}
          paths={[
            {
              d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM1230 1C1230.55 1 1231 0.552285 1231 0C1231 -0.552285 1230.55 -1 1230 -1L1230 1ZM0 1L1230 1L1230 -1L0 -1L0 1Z",
              stroke: "rgba(59,58,58,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Divider38582218")}
        ></Icon>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PermissionsSettings")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="700"
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
            children="Privacy & Permissions"
            {...getOverrideProps(overrides, "Privacy & Permissions")}
          ></Text>
          <Flex
            gap="22px"
            direction="column"
            width="650px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "PermissionsFields")}
          >
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "AccountWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Account Type:"
                {...getOverrideProps(overrides, "Account Type:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "AccountField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CameraWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Camera:"
                {...getOverrideProps(overrides, "Camera:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "CameraField")}
              ></View>
            </Flex>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "MicrophoneWrapper")}
            >
              <Text
                fontFamily="Work Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.07px"
                width="175px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Microphone:"
                {...getOverrideProps(overrides, "Microphone:")}
              ></Text>
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "MicrophoneField")}
              ></View>
            </Flex>
          </Flex>
        </Flex>
        <Icon
          width="unset"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1230, height: 1 }}
          paths={[
            {
              d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM1230 1C1230.55 1 1231 0.552285 1231 0C1231 -0.552285 1230.55 -1 1230 -1L1230 1ZM0 1L1230 1L1230 -1L0 -1L0 1Z",
              stroke: "rgba(59,58,58,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Divider38582231")}
        ></Icon>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PaymentSettings")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="700"
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
            children="Payment & Subscriptions"
            {...getOverrideProps(overrides, "Payment & Subscriptions")}
          ></Text>
          <Flex
            gap="22px"
            direction="column"
            width="583px"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "PaymentMethodsWrapper")}
          >
            <Text
              fontFamily="Work Sans"
              fontSize="20px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Payment Methods:"
              {...getOverrideProps(overrides, "Payment Methods:")}
            ></Text>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "PaymentMethodsFields")}
            >
              <View
                width="88px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 14438582237")}
              ></View>
              <View
                width="88px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 145")}
              ></View>
              <View
                width="88px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 146")}
              ></View>
              <View
                width="88px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 147")}
              ></View>
              <View
                width="88px"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 148")}
              ></View>
            </Flex>
          </Flex>
          <Flex
            gap="22px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "SubscriptionWrapper")}
          >
            <Text
              fontFamily="Work Sans"
              fontSize="20px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Subscription:"
              {...getOverrideProps(overrides, "Subscription:")}
            ></Text>
            <Flex
              gap="22px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CurrentSubscription")}
            >
              <View
                width="unset"
                height="56px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 14438582245")}
              >
                <Text
                  fontFamily="Work Sans"
                  fontSize="24px"
                  fontWeight="400"
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
                  position="absolute"
                  top="calc(50% - 12px - 0px)"
                  left="calc(50% - 131px - 1px)"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="No Active Subscription"
                  {...getOverrideProps(overrides, "No Active Subscription")}
                ></Text>
              </View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
