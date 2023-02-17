import { Flex } from "@chakra-ui/react";

import { Button } from "@/components/Button";
import { MdQrCodeScanner } from "react-icons/md";
import { buttonStyles } from "../HeaderStyles";
import { useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";

function AuthButtons(props) {
  const dispatch = useDispatch();
  const handleLogin = () =>
    dispatch(isModalOpen({ open: true, view: "Log In" }));
  return (
    <Flex align={"center"}>
      <Button
        title={"Get App"}
        variant="outline"
        leftIcon={<MdQrCodeScanner style={{ fontSize: "22px" }} />}
        styleProps={buttonStyles}
      />
      <Button
        title={"Log In"}
        styleProps={buttonStyles}
        handleClick={handleLogin}
      />
    </Flex>
  );
}

export default AuthButtons;
