import { Layout } from "@/components/Layout";

import { store } from "@/store";
import { Provider } from "react-redux";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "../theme/theme";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
