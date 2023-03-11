import { Text } from "@chakra-ui/react";
import { FormikErrorStyles } from "./FormikStyle";

const FormikErrorText = (props) => {
  let { fieldName, errorObj, touchedObj } = props;

  return (
    <>
      {errorObj[fieldName] && touchedObj[fieldName] && (
        <Text as={"p"} sx={FormikErrorStyles}>
          {errorObj[fieldName]}
        </Text>
      )}
    </>
  );
};

export default FormikErrorText;
