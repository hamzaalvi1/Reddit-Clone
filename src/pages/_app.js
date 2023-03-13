import { Layout } from "@/components/Layout";

import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Fonts } from "@/theme/Fonts";
import { theme } from "../theme/theme";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <CSSReset />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
