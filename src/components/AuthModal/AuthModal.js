import { Modal } from "@/components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { Text, Flex } from "@chakra-ui/react";
import { Input } from "../Input";
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
              <Input
                type="text"
                placeholder="Username"
                name="username"
                sx={inputStyles}
                value={""}
                onChange={(e) => console.log(e)}
              />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                sx={inputStyles}
                value={""}
                onChange={(e) => console.log(e)}
              />
              <Text fontSize={13} textStyle="secondary" margin={"0 10px"}>
                Forget your{" "}
                <Text
                  as="span"
                  color={"blue.600"}
                  fontWeight={700}
                  textStyle="primary"
                  cursor={"pointer"}
                  textDecoration={"underline"}
                >
                  username
                </Text>{" "}
                or{" "}
                <Text
                  as="span"
                  color={"blue.600"}
                  fontWeight={700}
                  textStyle="primary"
                  cursor={"pointer"}
                  textDecoration={"underline"}
                >
                  password
                </Text>{" "}
                ?
              </Text>
              <Button sx={buttonStyles} textStyle="secondary" title="Log In" />
              <Text fontSize={13} textStyle="secondary" margin={"0 10px"}>
                New Reddit?{" "}
                <Text
                  as="span"
                  color={"blue.600"}
                  fontWeight={700}
                  textStyle="primary"
                  cursor={"pointer"}
                >
                  SignUp
                </Text>
              </Text>
            </Flex>
          </Flex>
        </>
      </Modal>
    </>
  );
}

export default AuthModal;
