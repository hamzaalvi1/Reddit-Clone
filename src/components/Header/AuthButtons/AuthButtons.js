import { Flex } from "@chakra-ui/react";

import { Button } from "@/components/Button";
import { MdQrCodeScanner } from "react-icons/md";
import { buttonStyles } from "../HeaderStyles";

function AuthButtons(props) {
  return (
    <Flex align={"center"}>
      <Button
        title={"Get App"}
        variant="outline"
        leftIcon={<MdQrCodeScanner style={{ fontSize: "22px" }} />}
        styleProps={buttonStyles}
      />
      <Button title={"Log In"} styleProps={buttonStyles} />
    </Flex>
  );
}

export default AuthButtons;
