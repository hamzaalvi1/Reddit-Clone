
export const Button = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "14px",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "12px",
    },
    md: {
      fontSize: "14px",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    },
    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
