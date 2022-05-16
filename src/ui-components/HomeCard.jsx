/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Homecard(props) {
  const { home, overrides, ...rest } = props;
  const rectangleOneOneSixFourOnClick = useNavigateAction({
    type: "url",
    url: home?.status,
  });
  const tELEWORKOnClick = useNavigateAction({
    type: "url",
    url: home?.location,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="10px"
      padding="23px 23px 23px 23px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Homecard")}
    >
      <View
        width="160px"
        height="43px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <View
          width="160px"
          height="43px"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(45,103,160,1)"
          onClick={() => {
            rectangleOneOneSixFourOnClick();
          }}
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></View>
        <Flex
          gap="16px"
          position="absolute"
          top="10px"
          left="34px"
          direction="column"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "status")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.09px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ONLINE"
            {...getOverrideProps(overrides, "ONLINE")}
          ></Text>
        </Flex>
      </View>
      <Flex
        gap="8px"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.address}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "location")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(35,47,62,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="TELEWORK"
          onClick={() => {
            tELEWORKOnClick();
          }}
          {...getOverrideProps(overrides, "TELEWORK")}
        ></Text>
      </Flex>
    </Flex>
  );
}
