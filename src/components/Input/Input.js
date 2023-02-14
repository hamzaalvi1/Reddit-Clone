import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

function InputField(props) {
  const {
    inputGroupStyles,
    InputRightElements,
    InputLeftElements,
    placeholder,
    type = "text",
    onChange,
    value = "",
    name,
    variant = "filled",
    inputStyles,
    ...rest
  } = props;

  return (
    <InputGroup sx={inputGroupStyles}>
      {InputLeftElements && (
        <InputLeftElement children={<InputLeftElements />} />
      )}
      <Input
        type={type}
        onChange={onChange}
        value={value}
        variant={variant}
        placeholder={placeholder}
        name={name}
        sx={inputStyles}
        {...rest}
      />
      {InputRightElements && (
        <InputRightElement children={<InputRightElements />} />
      )}
    </InputGroup>
  );
}

export default InputField;
