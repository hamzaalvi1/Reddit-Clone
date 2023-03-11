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
    autoCompleteTag,
    ...rest
  } = props;

  return (
    <InputGroup sx={inputGroupStyles}>
      {InputLeftElements && (
        <InputLeftElement>
          <InputLeftElements />
        </InputLeftElement>
      )}
      <Input
        type={type}
        onChange={onChange}
        value={value}
        variant={variant}
        placeholder={placeholder}
        name={name}
        sx={inputStyles}
        autoComplete={autoCompleteTag}
        {...rest}
      />
      {InputRightElements && (
        <InputRightElement>
          <InputRightElements />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default InputField;
