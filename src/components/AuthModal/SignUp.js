import { Formik } from "formik";

import { Button } from "../Button";
import { Input } from "../Input";
import { useToast, Text, Box } from "@chakra-ui/react";
import { FormikErrorText } from "../FormikErrorText";

import { useDispatch } from "react-redux";
import { createUser } from "@/store/Slices/AuthSlice";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";

import { AuthConstants } from "@/config/constants";
import { SignUpSchema } from "./ValidationSchema";

function SignUp(props) {
  const { inputStyles, buttonStyles } = props;
  const toast = useToast();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const redirectLogin = () =>
    dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));

  const handleSignUp = (values, formHandlers) => {
    const { setSubmitting, resetForm } = formHandlers;
    dispatch(createUser({ values, toast, setSubmitting, resetForm }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSignUp(values, { setSubmitting, resetForm });
      }}
    >
      {(formikProps) => {
        const {
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        } = formikProps;

        return (
          <form onSubmit={handleSubmit}>
            <Box as="div" marginBottom={"15px"}>
              <Input
                isInvalid={errors.email && touched.email}
                errorBorderColor={"red.300"}
                type="email"
                placeholder="Email"
                name="email"
                sx={inputStyles}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormikErrorText
                fieldName={"email"}
                errorObj={errors}
                touchedObj={touched}
              />
            </Box>
            <Box as="div" marginBottom={"15px"}>
              <Input
                isInvalid={errors.password && touched.password}
                errorBorderColor={"red.300"}
                type="password"
                placeholder="Password"
                name="password"
                sx={inputStyles}
                autoComplete = {"new-password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormikErrorText
                fieldName={"password"}
                errorObj={errors}
                touchedObj={touched}
              />
            </Box>
            <Box as="div" marginBottom={"15px"}>
              <Input
                isInvalid={errors.confirmPassword && touched.confirmPassword}
                errorBorderColor={"red.300"}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                sx={inputStyles}
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete = {"new-password"}

              />
              <FormikErrorText
                fieldName={"confirmPassword"}
                errorObj={errors}
                touchedObj={touched}
              />
            </Box>
            <Button
              sx={buttonStyles}
              textStyle="secondary"
              title="Continue"
              loading={isSubmitting}
              type="submit"
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
          </form>
        );
      }}
    </Formik>
  );
}

export default SignUp;
