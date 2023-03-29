import { Flex, Image,Box } from "@chakra-ui/react";

import { styles } from "./HeaderStyles";

import { useSelector } from "react-redux";

import { AuthButtons } from "./AuthButtons";
import { SearchBar } from "./SearchBar";
import { AuthModal } from "../AuthModal";
import { MainMenu } from "../Menu";
import { LoginFeatures } from "../LoginFeatures";

function Header() {
  const { isAuthenticated } = useSelector(({ auth }) => auth);
  return (
    <Flex
      align={"center"}
      justifyContent={"space-between"}
      sx={styles}
      p={"0px 20px"}
      as={"header"}
    >
      <Flex align={"center"}>
        <Image
          src="/assets/images/redditFace.png"
          h={"30px"}
          mr={2}
          alt="logo"
        />
        <Image
          src="/assets/images/redditText.png"
          h={"20px"}
          display={{ base: "none", md: "unset" }}
          alt="logo-name"
        />
      </Flex>
      <SearchBar />
      <Box as="div" display={"flex"}>
        {" "}
        {isAuthenticated ? <LoginFeatures /> : <AuthButtons />}
        <MainMenu />
      </Box>

      <AuthModal />
    </Flex>
  );
}

export default Header;
