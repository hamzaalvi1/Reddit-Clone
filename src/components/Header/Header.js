import { Flex, Image } from "@chakra-ui/react";

import { styles } from "./HeaderStyles";

import { AuthButtons } from "./AuthButtons"
import { SearchBar } from "./SearchBar";
import { AuthModal } from "../AuthModal";

function Header() {
 
  return (
    <Flex align={"center"} justifyContent={"space-between"} sx={styles} p={"0px 20px"} as={"header"}>
      <Flex align={"center"} >
        <Image src="/assets/images/redditFace.png" h={"30px"} mr={2} />
        <Image
          src="/assets/images/redditText.png"
          h={"20px"}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchBar/>
      <AuthButtons/>
      <AuthModal/>
    </Flex>
  );
}

export default Header;
