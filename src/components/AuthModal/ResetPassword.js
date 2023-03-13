import { Button } from "../Button";
import { Input } from "../Input";
import { Image } from "@chakra-ui/react";
import { Text, Box, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { resetPassword } from "@/store/Slices/AuthSlice";
import { AuthConstants } from "@/config/constants";
import { Formik } from "formik";
import { FormikErrorText } from "../FormikErrorText";
import { ResetPasswordSchema } from "./ValidationSchema";

function ResetPassword(props) {
  const dispatch = useDispatch();
  const toast = useToast();
  const { inputStyles, buttonStyles } = props;

  const initialValues = {
    email: "",
  };

  const redirectSignUp = () => {
    dispatch(isModalOpen({ view: AuthConstants.SIGNUP, open: true }));
  };
  const redirectLogin = () => {
    dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));
  };

  const handleLogin = (values, formHandlers) => {
    const { setSubmitting, resetForm } = formHandlers;
    dispatch(resetPassword({ values, toast, setSubmitting, resetForm }));
  };

  return (
    <>
      <Image
        src={"/assets/images/redditFace.png"}
        alt="reddit-face"
        width={"40px"}
        height={"40px"}
        margin={"10px 0"}
      />
      <Text as={"p"} fontSize={13} textStyle="secondary" marginBottom={5}>
        Tell us the username and email address associated with your Reddit
        account, and we’ll send you an email with a link to reset your password.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleLogin(values, { setSubmitting, resetForm });
        }}
      >
        {(formikProps) => {
          const {
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            isSubmitting,
          } = formikProps;
          return (
            <form onSubmit={handleSubmit} autoComplete="off">
              <Box as="div" marginBottom={"15px"}>
                <Input
                  isInvalid={errors.email && touched.email}
                  errorBorderColor="red.300"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  sx={inputStyles}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoCompleteTag={"new-password"}
                />
                <FormikErrorText
                  fieldName="email"
                  errorObj={errors}
                  touchedObj={touched}
                />
              </Box>

              <Button
                type="submit"
                sx={buttonStyles}
                textStyle="secondary"
                title="Reset Password"
                loading={isSubmitting}
              />
              <Text
                fontSize={13}
                textStyle="secondary"
                margin={"0 10px"}
                textAlign={"center"}
              >
                <Text
                  as="span"
                  color={"blue.600"}
                  fontWeight={700}
                  textStyle="primary"
                  onClick={redirectSignUp}
                  cursor={"pointer"}
                >
                  {" "}
                  SignUp
                </Text>{" "}
                -
                <Text
                  as="span"
                  color={"blue.600"}
                  fontWeight={700}
                  textStyle="primary"
                  onClick={redirectLogin}
                  cursor={"pointer"}
                >
                  {" "}
                  Login
                </Text>
              </Text>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default ResetPassword;
