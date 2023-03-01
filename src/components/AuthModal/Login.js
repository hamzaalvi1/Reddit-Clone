import { Button } from "../Button";
import { Input } from "../Input";
import { Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { AuthConstants } from "@/config/constants";

function Login(props) {
  const dispatch = useDispatch();
  const { inputStyles, buttonStyles } = props;
  const redirectSignUp = () =>
    dispatch(isModalOpen({ view: AuthConstants.SIGNUP, open: true }));
  return (
    <>
      <Input
        type="text"
        placeholder="Username"
        name="username"
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
          onClick={redirectSignUp}
          cursor={"pointer"}
        >
          SignUp
        </Text>
      </Text>
    </>
  );
}

export default Login;
