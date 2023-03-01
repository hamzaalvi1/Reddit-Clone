import { Modal } from "@/components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { Text, Flex } from "@chakra-ui/react";
import { Login, SignUp } from "./";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {
  styleProps,
  inputStyles,
  buttonStyles,
  OAuthButtonsStyles,
  orTextStyles,
} from "./AuthModalStyles";
import { AuthConstants } from "@/config/constants";

function AuthModal(props) {
  const { open, view } = useSelector(({ authModal }) => authModal);
  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(isModalOpen({ open: false }));

  return (
    <>
      <Modal
        title={view}
        isOpen={open}
        onClose={handleModalClose}
        styleProps={styleProps}
        isCentered={true}
        blockScrollOnMount={true}
      >
        <>
          <Flex as="div" flexFlow={"column"}>
            <Text fontSize={13} textStyle="secondary">
              By continuing, you agree are setting up a Reddit account and agree
              to our User Agreement and Privacy Policy
            </Text>
            <Flex as={"div"} flexFlow={"column"} margin={"20px 0 0"}>
              <Button
                sx={OAuthButtonsStyles}
                textStyle="secondary"
                variant={"oauth"}
                title="Continue with Google"
                leftIcon={<FcGoogle fontSize={"20px"} />}
              />
              <Button
                sx={OAuthButtonsStyles}
                textStyle="secondary"
                variant={"oauth"}
                title="Continue with Apple"
                leftIcon={<FaApple fontSize={"20px"} />}
              />
            </Flex>
            <Text sx={orTextStyles}>OR</Text>

            <Flex as="div" flexFlow={"column"} margin={"20px 0"}>
              {view == AuthConstants.LOGIN ? (
                <Login inputStyles={inputStyles} buttonStyles={buttonStyles} />
              ) : (
                <SignUp inputStyles={inputStyles} buttonStyles={buttonStyles} />
              )}
            </Flex>
          </Flex>
        </>
      </Modal>
    </>
  );
}

export default AuthModal;
