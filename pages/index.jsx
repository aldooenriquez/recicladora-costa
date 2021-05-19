import { Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Spacer } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import CountUp from "react-countup";
import { Divider } from "@chakra-ui/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Box } from "@chakra-ui/layout";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white">
        {/* Banner */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h="85vh"
          bgColor="white"
          p="15px"
          bgImage="url('/assets/banner.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
        >
          <VStack
            w={["100%", "100%", "50%", "50%"]}
            h={["50%", "50%", "100%", "100%"]}
            spacing={4}
            justifyContent={["flex-end", "flex-end", "center", "center"]}
            pb="30px"
          >
            <Text fontSize="3xl" color="black" align="center" fontWeight="bold">
              Por el futuro del medio ambiente
            </Text>
            <NextLink href="/contacto" passHref>
              <Button as="a" colorScheme="green" color="white" variant="solid">
                CONACTA CON NOSOTROS
              </Button>
            </NextLink>
          </VStack>
        </Flex>
        {/* Descripcion corta */}
        <Flex flexDir="row" h="auto" p="30px" bgColor="green.500" w="100%">
          <Spacer />
          <VStack
            w={["95%", "80%", "70%", "60%"]}
            h="auto"
            justify="center"
            spacing={4}
          >
            <Text
              fontSize={["12px", "14px", "16px", "18px"]}
              color="white"
              align="center"
              w="100%"
            >
              ¿Quíenes somos?
            </Text>
            <Text
              fontSize={["16px", "18px", "20px", "22px"]}
              color="white"
              align="center"
              fontWeight="bold"
            >
              Especializada en la gestion integral y recolección de residuos
              sólidos urbanos, residuos de manejo especial, acopio de materiales
              reciclables, destrucción de papelería fiscal y renta de
              contenedores. Brindamos servicio a empresas pequeñas, medianas y
              grandes de diversos sectores, así como a individuos.
            </Text>
            <NextLink href="/nosotros" passHref>
              <Button
                as="a"
                colorScheme="green"
                variant="outline"
                bgColor="white"
                p="15px"
              >
                CONOCE MAS DE NOSOTROS
              </Button>
            </NextLink>
          </VStack>
          <Spacer />
        </Flex>
        {/*  Estadisticas */}
        <Flex flexDir="row" w="100%" h="auto" p="50px 20px">
          <Center w="100%" h={["auto", "auto", "300px", "300px"]}>
            <VStack spacing={8}>
              <Text fontSize="2xl" align="center">
                Nuestros numeros
              </Text>
              <Grid
                w="100%"
                h="auto"
                gridTemplateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(4, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gridTemplateRows={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "1fr",
                  "1fr",
                ]}
                gridRowGap="30px"
                gridColumnGap="10px"
              >
                <VStack
                  gridColumn="1"
                  gridRow="1"
                  align="center"
                  justify="center"
                >
                  <Center fontWeight="bold" fontSize="4xl">
                    <CountUp start={0} end={1500} duration={7.5} delay={10} />
                  </Center>
                  <Text fontSize="16px">Cosa a describir 1</Text>
                </VStack>
                <VStack
                  gridColumn={["1", "1", "2", "2"]}
                  gridRow={["2", "2", "1", "1"]}
                  align="center"
                  justify="center"
                >
                  <Center fontWeight="bold" fontSize="4xl">
                    <CountUp start={0} end={3000} duration={15} delay={10} />
                  </Center>
                  <Text fontSize="16px">Cosa a describir 2</Text>
                </VStack>
                <VStack
                  gridColumn={["2", "2", "3", "3"]}
                  gridRow="1"
                  align="center"
                  justify="center"
                >
                  <Center fontWeight="bold" fontSize="4xl">
                    <CountUp start={0} end={800} duration={4} delay={10} />
                  </Center>
                  <Text fontSize="16px">Cosa a describir 3</Text>
                </VStack>
                <VStack
                  gridColumn={["2", "2", "4", "4"]}
                  gridRow={["2", "2", "1", "1"]}
                  align="center"
                  justify="center"
                >
                  <Center fontWeight="bold" fontSize="4xl">
                    <CountUp start={0} end={2000} duration={10} delay={10} />
                  </Center>
                  <Text fontSize="16px">Cosa a describir 4</Text>
                </VStack>
              </Grid>
            </VStack>
          </Center>
        </Flex>
        <Divider variant="dashed" />
        {/* Servicios */}
        <Flex flexDir="column">
          <Center w="100%" h="auto">
            <Text fontSize="2xl" align="center" pt="20px">
              En que podemos ayudarte...
            </Text>
          </Center>
          <Flex flexDir={["column", "column", "row", "row"]} w="100%" h="auto">
            <VStack w="100%" align="center" pt="40px">
              <Image
                src="/assets/plantaReciclaje.jpg"
                w="250px"
                h="180px"
                overflow="hidden"
                borderRadius="10%"
              />
              <Text w="80%" align="left" fontSize="20px" fontWeight="black">
                Recolección de distintos desechos
              </Text>
              <Text w="80%" align="justify" fontSize="14px">
                No te preocupes mas por que hacer con tus desechos, nosotros los
                recogemos directamente en donde esten.
              </Text>
              <NextLink href="/servicios" passHref>
                <Text
                  as="a"
                  w="80%"
                  align="left"
                  fontSize="14px"
                  color="green.500"
                  fontWeight="bold"
                >
                  Aprende como lo logramos &gt;
                </Text>
              </NextLink>
            </VStack>
            <VStack w="100%" align="center" pt="40px">
              <Image
                src="/assets/contenedor.jpg"
                w="250px"
                h="180px"
                overflow="hidden"
                borderRadius="10%"
              />
              <Text w="80%" align="left" fontSize="20px" fontWeight="black">
                Renta de contenedores
              </Text>
              <Text w="80%" align="justify" fontSize="14px">
                ¿No tienes donde almacenar los desechos que genera tu empresa?
                Nosotros te proporcionamos el contenedor que mas se adecue a tus
                necesidades.
              </Text>
              <NextLink href="/servicios" passHref>
                <Text
                  as="a"
                  w="80%"
                  align="left"
                  fontSize="14px"
                  color="green.500"
                  fontWeight="bold"
                >
                  Conoce los tamaños disponibles &gt;
                </Text>
              </NextLink>
            </VStack>
            <VStack w="100%" align="center" pt="40px" pb="20px">
              <Image
                src="/assets/venta.jpg"
                w="250px"
                h="180px"
                overflow="hidden"
                borderRadius="10%"
              />
              <Text w="80%" align="left" fontSize="20px" fontWeight="black">
                Venta de materiales reciclables
              </Text>
              <Text w="80%" align="justify" fontSize="14px">
                Si eres una empresa que trabajas materiales reciclables con
                nosotros puedes comprar estos materiales y asi agilizar tus
                procesos de obtencion.
              </Text>
              <NextLink href="/servicios" passHref>
                <Text
                  as="a"
                  w="80%"
                  align="left"
                  fontSize="14px"
                  color="green.500"
                  fontWeight="bold"
                >
                  Explora nuestros materiales disponibles &gt;
                </Text>
              </NextLink>
            </VStack>
          </Flex>
        </Flex>
        {/* Testimonios */}
        <Flex flexDir="column" w="100%" h="auto">
          <Center w="100%" h="auto">
            <Text fontSize="2xl" align="center" pt="20px">
              Nuestros clientes
            </Text>
          </Center>
          <Box w="100%" h="auto">
            <Swiper
              id="testimonios"
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide key={`slide-0`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image
                    src="/assets/logoCS1.jpg"
                    w="200px"
                    h="200px"
                    overflow="hidden"
                    borderRadius="100%"
                  />
                  <Text fontSize="20px" fontWeight="bold">
                    Reserva la Cofradia
                  </Text>
                  <Text fontSize="16px" w="70%" align="justify">
                    "Dolore laborum consequat id ex veniam nostrud veniam
                    incididunt nostrud quis cillum cupidatat commodo. Cillum
                    veniam esse aliqua enim quis labore laborum ut in aliquip
                    pariatur pariatur."
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-1`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image
                    src="/assets/logoCS1.jpg"
                    w="200px"
                    h="200px"
                    overflow="hidden"
                    borderRadius="100%"
                  />
                  <Text fontSize="20px" fontWeight="bold">
                    Reserva la Cofradia
                  </Text>
                  <Text fontSize="16px" w="70%" align="justify">
                    "Dolore laborum consequat id ex veniam nostrud veniam
                    incididunt nostrud quis cillum cupidatat commodo. Cillum
                    veniam esse aliqua enim quis labore laborum ut in aliquip
                    pariatur pariatur."
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-2`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image
                    src="/assets/logoCS1.jpg"
                    w="200px"
                    h="200px"
                    overflow="hidden"
                    borderRadius="100%"
                  />
                  <Text fontSize="20px" fontWeight="bold">
                    Reserva la Cofradia
                  </Text>
                  <Text fontSize="16px" w="70%" align="justify">
                    "Dolore laborum consequat id ex veniam nostrud veniam
                    incididunt nostrud quis cillum cupidatat commodo. Cillum
                    veniam esse aliqua enim quis labore laborum ut in aliquip
                    pariatur pariatur."
                  </Text>
                </VStack>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
