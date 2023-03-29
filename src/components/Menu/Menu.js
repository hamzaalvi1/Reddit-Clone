import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function MainMenu(props) {
    const {children,menuItems,} = props 
  return (
    <Menu>
      <MenuButton>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuDivider/>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MainMenu;
