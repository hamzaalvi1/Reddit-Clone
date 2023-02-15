import { Button } from "@chakra-ui/react";
function UIButton(props) {
  const {
    title,
    handleClick,
    variant = "solid",
    rightIcon,
    leftIcon,
    isLoading = false,
    styleProps,
    className,
    ...rest
  } = props;

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      isLoading={isLoading}
      sx={styleProps}
      className={className}
      {...rest}
    >
      {title}
    </Button>
  );
}

export default UIButton;
