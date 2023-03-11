export const styleProps = {
  boxShadow: "2xl",
  maxHeight: "600px",
  maxWidth: "400px",
  width: "100%",
  height: "100%",
  padding: "30px",
  display: "flex",
  justifyContent: "center",
  // alignItems:"center"
};
export const inputStyles = {
  borderRadius: "1.25em",
  height: "45px",
  border: "1px solid #edeff1",
  boxShadow: "none",
  margin: "0 0 0 0",
  fontSize: "13px",

  "::placeholder": {
    color: "gray.500",
    fontSize: "13px",
  },
};

export const buttonStyles = {
  fontSize: "14px",
  fontWeight: 700,
  minHeight: "40px",
  minWidth: "100%",
  fontWeight: "500",
  height: "100%",
  cursor: "pointer",
  margin: "10px 0",
  bg: "brand.100",
  ":hover": {
    bg: "#d93a00",
  },
};
export const OAuthButtonsStyles = {
  fontSize: "14px",
  fontWeight: 700,
  minHeight: "40px",
  minWidth: "100%",
  fontWeight: "500",
  height: "100%",
  cursor: "pointer",
  margin: "0 0 15px",
  position: "relative",
};

export const orTextStyles = {
  fontSize: "16",
  textStyle: "secondary",
  fontWeight: "semibold",
  textAlign: "center",
  color: "gray.600",
  position: "relative",
  ":before": {
    content: "''",
    position: "absolute",
    width: "110px",
    height: "1px",
    background: "gray.300",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  ":after": {
    content: "''",
    position: "absolute",
    width: "110px",
    height: "1px",
    background: "gray.300",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
};
