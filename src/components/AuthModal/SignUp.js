import { Button } from "../Button";
import { Input } from "../Input";
import { Text } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { AuthConstants } from "@/config/constants";

function SignUp(props) {
  const dispatch = useDispatch();
  const { inputStyles, buttonStyles } = props;
  const redirectLogin = () =>
    dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));

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

      <Button sx={buttonStyles} textStyle="secondary" title="Continue" />
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
