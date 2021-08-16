import { ChakraProvider } from "@chakra-ui/react";
import MainLayOut from "../components/mainLayout";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import theme from "../theme/theme";
import Fonts from "../components/fonts";
import Script from "next/script";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const options = {
    whatsapp: "+52(314)118-47-10", // WhatsApp number
    call_to_action: "Contacta con nosotros", // Call to action
    position: "right", // Position may be 'right' or 'left'
  };
  const proto = "http";
  const host = "getbutton.io";
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayOut>
        <Component {...pageProps} />
        <Script
          src="https://static.getbutton.io/widget/bundle.js"
          onLoad={() => {
            WhWidgetSendButton.init(host, proto, options);
          }}
        />
      </MainLayOut>
    </ChakraProvider>
  );
}
