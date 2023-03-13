import { Modal } from "@/components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { signInWithGoogle } from "@/store/Slices/AuthSlice";
import { Text, Flex, useToast } from "@chakra-ui/react";
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
import ResetPassword from "./ResetPassword";

function AuthModal(props) {
  const [oAuthLoading, setOAuthLoading] = useState({
    google: false,
    apple: false,
  });
  const toast = useToast();
  const { open, view } = useSelector(({ authModal }) => authModal);
  

  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(isModalOpen({ open: false }));
  const handleGoogleLogin = () =>
    dispatch(signInWithGoogle({ setOAuthLoading, toast }));

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
            {view !== AuthConstants.RESETPASSWORD ? (
              <>
                <Text fontSize={13} textStyle="secondary">
                  By continuing, you agree are setting up a Reddit account and
                  agree to our User Agreement and Privacy Policy
                </Text>
                <Flex as={"div"} flexFlow={"column"} margin={"20px 0 0"}>
                  <Button
                    sx={OAuthButtonsStyles}
                    textStyle="secondary"
                    variant={"oauth"}
                    title="Continue with Google"
                    loading={oAuthLoading.google}
                    leftIcon={<FcGoogle fontSize={"20px"} />}
                    handleClick={handleGoogleLogin}
                  />
                  <Button
                    sx={OAuthButtonsStyles}
                    textStyle="secondary"
                    variant={"oauth"}
                    isDisabled={true}
                    title="Continue with Apple"
                    leftIcon={<FaApple fontSize={"20px"} />}
                  />
                </Flex>
                <Text sx={orTextStyles}>OR</Text>
              </>
            ) : null}

            <Flex as="div" flexFlow={"column"} margin={"20px 0"}>
              {view == AuthConstants.LOGIN && (
                <Login inputStyles={inputStyles} buttonStyles={buttonStyles} />
              )}
              {view == AuthConstants.SIGNUP && (
                <SignUp inputStyles={inputStyles} buttonStyles={buttonStyles} />
              )}
              {view == AuthConstants.RESETPASSWORD && (
                <ResetPassword
                  inputStyles={inputStyles}
                  buttonStyles={buttonStyles}
                />
              )}
            </Flex>
          </Flex>
        </>
      </Modal>
    </>
  );
}

export default AuthModal;
