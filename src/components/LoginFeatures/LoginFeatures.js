import React from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { loginFeatureStyles } from "../Header/HeaderStyles";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { GrAdd } from "react-icons/gr";

function LoginFeatures(props) {
  const loginFeaturesArr = [
    { icon: BsArrowUpRightCircle, onClick: () => console.log("Clicked") },
    { icon: IoFilterCircleOutline, onClick: () => console.log("Clicked") },
    { icon: IoVideocamOutline, onClick: () => console.log("Clicked") },
    { icon: BsChatDots, onClick: () => console.log("Clicked") },
    { icon: GrAdd, onClick: () => console.log("Clicked") },
    { icon: IoNotificationsOutline, onClick: () => console.log("Clicked") },
  ];

  return (
    <Flex as="div" alignItems={"center"}>
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        {loginFeaturesArr.slice(0, 3).map((feature, idx) => (
          <Flex key={idx} onClick={feature.onClick} sx={loginFeatureStyles}>
            <Icon as={feature.icon} fontSize={"20px"} />
          </Flex>
        ))}
      </Box>
      <Box as={"div"} display={"flex"} ml={1.5}>
        {loginFeaturesArr.slice(3).map((feature, idx) => (
          <Flex key={idx} onClick={feature.onClick} sx={loginFeatureStyles}>
            <Icon as={feature.icon} fontSize={"20px"} />
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}

export default LoginFeatures;
