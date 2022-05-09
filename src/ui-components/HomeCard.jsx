/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="253px"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Image
        width="320px"
        height="160px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="174px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="210px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price:$"}${home?.price}${"/nigtht"}`}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
