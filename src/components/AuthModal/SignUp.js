import { Button } from "../Button";
import { Input } from "../Input";
import { Text, } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useDispatch,useSelector } from "react-redux";
import { getMe } from "@/store/Slices/AuthSlice";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { AuthConstants } from "@/config/constants";

function SignUp(props) {
  const { inputStyles, buttonStyles } = props; 
  const toast = useToast()
  const dispatch = useDispatch();
  const {loading} = useSelector((state)=>state.Authentication)

  const redirectLogin = () =>
    dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));

  const handleSignUp = () => {
    dispatch(getMe({toast}))
  };

  return (
    <>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        sx={inputStyles}
        value={""}
        onChange={(e) => {}}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        sx={inputStyles}
        value={""}
        onChange={(e) => {}}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        sx={inputStyles}
        value={""}
        onChange={(e) => {}}
      />

      <Button
        sx={buttonStyles}
        textStyle="secondary"
        title="Continue"
        loading={loading}
        handleClick={handleSignUp}
      />
      <Text fontSize={13} textStyle="secondary" margin={"0 10px"}>
        Already a redditor?{" "}
        <Text
          as="span"
          color={"blue.600"}
          fontWeight={700}
          textStyle="primary"
          cursor={"pointer"}
          onClick={redirectLogin}
        >
          LogIn
        </Text>
      </Text>
    </>
  );
}

export default SignUp;
