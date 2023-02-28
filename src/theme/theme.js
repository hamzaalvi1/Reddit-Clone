import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

const colors = {
  brand: {
    100: "#FF3c00",
  },
};

const fonts = {
  heading: "IBM Plex Sans, sans-serif",
  text: "IBM Plex Sans, sans-serif",
  body: "Open Sans, sans-serif",
};

const styles = {
  global: () => ({
    body: {
      bg: "gray.200",
    },
  }),
};
const textStyles = {
  primary: {
    fontFamily: "Open Sans, sans-serif",
  },
  secondary: {
    fontFamily: "IBM Plex Sans, sans-serif",
  },
};
const components = {
  Button,
};

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  textStyles,
});
