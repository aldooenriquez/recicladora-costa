import { ChakraProvider } from "@chakra-ui/react";
import MainLayOut from "../components/mainLayout";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainLayOut>
        <Component {...pageProps} />
      </MainLayOut>
    </ChakraProvider>
  );
}
