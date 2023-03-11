import { Button } from "../Button";
import { Input } from "../Input";
import { Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";
import { AuthConstants } from "@/config/constants";
import { Formik } from "formik";
import { FormikErrorText } from "../FormikErrorText";
import * as Yup from "yup";

function Login(props) {
  const dispatch = useDispatch();
  const { inputStyles, buttonStyles } = props;

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Field is required"),
    password: Yup.string()
      .min(6, "Password is less than 6 digits")
      .required("Field is required"),
  });

  const redirectSignUp = () => {
    dispatch(isModalOpen({ view: AuthConstants.SIGNUP, open: true }));
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values, "values");
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
              <Box as="div" marginBottom={"15px"}>
                <Input
                  type="password"
                  isInvalid={errors.password && touched.password}
                  errorBorderColor="red.300"
                  placeholder="Password"
                  name="password"
                  sx={inputStyles}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoCompleteTag={"new-password"}
                />
                <FormikErrorText
                  fieldName="password"
                  errorObj={errors}
                  touchedObj={touched}
                />
              </Box>

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
                </Text>
                ?
              </Text>
              <Button
                type="submit"
                sx={buttonStyles}
                textStyle="secondary"
                title="Log In"
              />
              <Text fontSize={13} textStyle="secondary" margin={"0 10px"}>
                New Reddit?
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
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default Login;
