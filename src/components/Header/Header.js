import { Flex, Image } from "@chakra-ui/react";
import { Input } from "../Input";
import { styles, searchBarStyles } from "./HeaderStyles";
import { Search2Icon } from "@chakra-ui/icons";

function Header() {
  const LeftIcon = () => (
    <Search2Icon color={"gray.400"} pointerEvents="none" />
  );
  return (
    <Flex align={"center"} sx={styles} p={"0px 20px"} as={"header"}>
      <Flex align={"center"}>
        <Image src="/assets/images/redditFace.png" h={"30px"} mr={2} />
        <Image
          src="/assets/images/redditText.png"
          h={"20px"}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Flex flexGrow={1}>
        <Input
          placeholder="Search Reddit"
          sx={searchBarStyles}
          InputLeftElements={LeftIcon}
          value={""}
          onChange={() => {}}
          className={"search-input"}
          _hover={{bg:"white",border:"1px solid", borderColor:"blue.500"}}
        />
      </Flex>
    </Flex>
  );
}

export default Header;
