import React from "react";

import { Input } from "@/components/Input";
import { Flex } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

import { searchBarStyles } from "../HeaderStyles";

function SearchBar() {
  return (
    <Flex flexGrow={1} maxWidth={"670px"}>
      <Input
        placeholder="Search Reddit"
        sx={searchBarStyles}
        InputLeftElements={() => (
          <FiSearch  color="gray" fontSize={"18px"}/>
        )}
        value={""}
        onChange={() => {}}
        className={"search-input"}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
      />
    </Flex>
  );
}

export default SearchBar;
