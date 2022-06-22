import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: "Lato, sans-serif;",
          body: "Lato, sans-serif;",
        },
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
