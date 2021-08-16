import {
  Center,
  Flex,
  Text,
  VStack,
  Spacer,
  Grid,
  Divider,
  Box,
} from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { IconButton } from "@chakra-ui/button";
import {
  FaArrowAltCircleRight,
  FaTrash,
  FaTree,
  FaWater,
  FaCubes,
} from "react-icons/fa";
import { IoMdWater } from "react-icons/io";
import { Heading, Icon, keyframes } from "@chakra-ui/react";
import SimpleMap from "../components/map";
import credentials from "../credentials";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/toast";
import { usePrefersReducedMotion } from "@chakra-ui/react";
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const zoom = keyframes`
  0% {
    background-size: auto 100%;
  }
  50% {
    background-size: auto 110%;
  }
  100% {
   background-size: auto 120%;
  }
`;

export default function Home() {
  const { handleSubmit, register } = useForm();
  const toast = useToast();
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${zoom} forwards 8s linear`;

  async function onSubmit(data) {
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res.json().then(() => {
        toast({
          title: "¡Gracias por enviarnos tus dudas!",
          description: "Pronto te contactaremos.",
          duration: 9000,
          position: "top-left",
          status: "success",
        });
      });
    } catch {
      toast({
        title: "Ocurrio un error",
        description: "Revise los datos ingresados",
        duration: 9000,
        position: "top-left",
        status: "error",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Inicio</title>
        <link rel="icon" href="/favicon.png" />
        <script async src="../components/messageButton.js"></script>
      </Head>
      <Flex
        flexDir="column"
        w="100%"
        h="auto"
        bgColor="white"
        overflow="hidden"
      >
        {/* Banner */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["80vh", "80vh", "80vh", "78vh"]}
          p="15px"
          bgImage="url('/assets/banner.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          overflow="hidden"
          animation={animation}
        >
          <VStack
            w={["100%", "100%", "100%", "100%"]}
            h={["80%", "100%", "100%", "100%"]}
            spacing={4}
            justifyContent={["flex-end", "flex-end", "center", "center"]}
            pb="30px"
          >
            <Heading
              fontSize={["4xl", "5xl", "5xl", "5xl"]}
              color="white"
              align="center"
              fontWeight="extrabold"
            >
              RECICLAJE Y GESTIÓN INTEGRAL
              <br />
              DE RESIDUOS
            </Heading>
            <Text
              fontSize="xl"
              color="white"
              align="center"
              w={["90%", "50%", "50%", "50%"]}
            >
              Por el futuro del medio ambiente
            </Text>
            <NextLink href="/contacto" passHref>
              <Button
                as="a"
                size="lg"
                colorScheme="green"
                bgColor="green.400"
                color="white"
                variant="solid"
              >
                CONTÁCTANOS
              </Button>
            </NextLink>
          </VStack>
        </Flex>
        {/* Descripcion corta */}
        <Flex
          flexDir="row"
          h={["auto", "500px", "500px", "500px"]}
          p="30px"
          bgColor="green.400"
          w="100%"
        >
          <Spacer />
          <VStack
            w={["95%", "80%", "70%", "60%"]}
            h="auto"
            justify="center"
            spacing={4}
          >
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              color="white"
              align="center"
              w="100%"
              pb="30px"
              fontWeight="bold"
            >
              SOBRE NOSOTROS
            </Text>
            <Text
              fontSize={["lg", "lg", "lg", "lg"]}
              color="white"
              align="center"
              fontWeight="bold"
            >
              Somos una empresa especializada en la recolección de residuos
              sólidos urbanos, residuos de manejo especial, compra y venta de
              materiales reciclables, destrucción de papelería fiscal y renta de
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
                CONOCE MÁS DE NOSOTROS
              </Button>
            </NextLink>
          </VStack>
          <Spacer />
        </Flex>
        {/*  Estadisticas */}
        <Flex flexDir="row" w="100%" h="auto" p="50px 20px">
          <Center w="100%" h={["auto", "auto", "auto", "300px"]}>
            <VStack w="100%" spacing={8}>
              <Text
                fontSize={["3xl", "3xl", "4xl", "4xl"]}
                align="center"
                fontWeight="extrabold"
              >
                BENEFICIO AL MEDIO AMBIENTE
              </Text>
              <Grid
                w="100%"
                h="auto"
                gridTemplateColumns={[
                  "1fr",
                  "1fr",
                  "repeat(2, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gridTemplateRows={[
                  "repeat(4, 1fr)",
                  "repeat(4, 1fr)",
                  "repeat(2, 1fr)",
                  "1fr",
                ]}
                gridRowGap="30px"
                gridColumnGap="10px"
              >
                <VStack
                  gridColumn="1"
                  gridRow="1"
                  justify="center"
                  alignContent="start"
                >
                  <Icon as={FaCubes} fontSize="3xl" color="green.400" />
                  <Center fontWeight="bold" fontSize="6xl">
                    <CountUp
                      start={0}
                      end={233000}
                      duration={8}
                      delay={10}
                      separator={","}
                    />
                  </Center>
                  <Text h="48px" fontSize="16px" textAlign="center">
                    Kilos reciclados de distintos materiales al mes
                  </Text>
                </VStack>
                <VStack
                  gridColumn={["1", "1", "1", "2"]}
                  gridRow={["2", "2", "2", "1"]}
                  justify="center"
                >
                  <Icon as={FaTree} fontSize="3xl" color="green.400" />
                  <Center fontWeight="bold" fontSize="6xl">
                    <CountUp
                      start={0}
                      end={2295}
                      duration={5}
                      delay={10}
                      separator={","}
                    />
                  </Center>
                  <Text h="48px" fontSize="16px" textAlign="center">
                    Árboles que no se talan al mes
                  </Text>
                </VStack>
                <VStack
                  gridColumn={["1", "1", "2", "3"]}
                  gridRow={["3", "3", "1", "1"]}
                  justify="center"
                  alignContent="start"
                >
                  <Icon as={IoMdWater} fontSize="3xl" color="green.400" />
                  <Center fontWeight="bold" fontSize="6xl">
                    <CountUp
                      start={0}
                      end={37274460}
                      duration={10}
                      delay={10}
                      separator={","}
                    />
                  </Center>
                  <Text h="48px" fontSize="16px" textAlign="center">
                    Litros de agua ahorrados al mes
                  </Text>
                </VStack>
                <VStack
                  gridColumn={["1", "1", "2", "4"]}
                  gridRow={["4", "4", "2", "1"]}
                  justify="center"
                >
                  <Icon as={FaTrash} fontSize="3xl" color="green.400" />
                  <Center fontWeight="bold" fontSize="6xl">
                    <CountUp
                      start={0}
                      end={310}
                      duration={2}
                      delay={10}
                      separator={","}
                    />
                  </Center>
                  <Text h="48px" fontSize="16px" textAlign="center">
                    m3 en el relleno sanitario ahorrados
                  </Text>
                </VStack>
              </Grid>
            </VStack>
          </Center>
        </Flex>
        <Divider variant="dashed" />
        {/* Servicios */}
        <Flex flexDir="column" bgColor="green.400" color="white">
          <Center w="100%" h="auto">
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              align="center"
              pt="20px"
              fontWeight="bold"
            >
              SERVICIOS POPULARES
            </Text>
          </Center>
          <Flex flexDir={["column", "column", "row", "row"]} w="100%" h="auto">
            <VStack w="100%" align="center" pt="50px" spacing={3}>
              <a href="/servicios">
                <Image
                  src="/assets/materialReciclable.jpg"
                  w={["150px", "150px", "100px", "150px"]}
                  h={["150px", "150px", "100px", "150px"]}
                  overflow="hidden"
                  borderRadius="100%"
                />
              </a>
              <Text
                w="80%"
                h={["50px", "50px", "100px", "100px"]}
                align="center"
                fontSize={["16px", "16px", "16px", "20px"]}
                fontWeight="black"
              >
                Recolección de materiales reciclables
              </Text>
              <NextLink href="/servicios" passHref>
                <IconButton
                  as="a"
                  fontSize="2xl"
                  bgColor="transparent"
                  color="white"
                  icon={<FaArrowAltCircleRight />}
                />
              </NextLink>
            </VStack>
            <VStack w="100%" align="center" pt="50px" spacing={3}>
              <a href="/servicios">
                <Image
                  src="/assets/residuosGrandes.jpg"
                  w={["150px", "150px", "100px", "150px"]}
                  h={["150px", "150px", "100px", "150px"]}
                  overflow="hidden"
                  borderRadius="100%"
                />
              </a>
              <Text
                w="80%"
                h={["50px", "50px", "100px", "100px"]}
                align="center"
                fontSize={["16px", "16px", "16px", "20px"]}
                fontWeight="black"
              >
                Gestión de residuos
              </Text>
              <NextLink href="/servicios" passHref>
                <IconButton
                  as="a"
                  fontSize="2xl"
                  bgColor="transparent"
                  color="white"
                  icon={<FaArrowAltCircleRight />}
                />
              </NextLink>
            </VStack>
            <VStack w="100%" align="center" pt="50px" spacing={3}>
              <a href="/servicios">
                <Image
                  src="/assets/papelOficina.jpg"
                  w={["150px", "150px", "100px", "150px"]}
                  h={["150px", "150px", "100px", "150px"]}
                  overflow="hidden"
                  borderRadius="100%"
                />
              </a>
              <Text
                w="80%"
                h={["50px", "50px", "100px", "100px"]}
                align="center"
                fontSize={["16px", "16px", "16px", "20px"]}
                fontWeight="black"
              >
                Destrucción de papelería fiscal
              </Text>
              <NextLink href="/servicios" passHref>
                <IconButton
                  as="a"
                  fontSize="2xl"
                  bgColor="transparent"
                  color="white"
                  icon={<FaArrowAltCircleRight />}
                />
              </NextLink>
            </VStack>
            <VStack w="100%" align="center" pt="50px" spacing={3}>
              <a href="/servicios">
                <Image
                  src="/assets/contenedor.jpg"
                  w={["150px", "150px", "100px", "150px"]}
                  h={["150px", "150px", "100px", "150px"]}
                  overflow="hidden"
                  borderRadius="100%"
                />
              </a>
              <Text
                w="80%"
                h={["50px", "50px", "100px", "100px"]}
                align="center"
                fontSize={["16px", "16px", "16px", "20px"]}
                fontWeight="black"
              >
                Renta de contenedores
              </Text>
              <NextLink href="/servicios" passHref>
                <IconButton
                  as="a"
                  fontSize="2xl"
                  bgColor="transparent"
                  color="white"
                  icon={<FaArrowAltCircleRight />}
                />
              </NextLink>
            </VStack>
            <VStack w="100%" align="center" p="50px 0px" spacing={3}>
              <a href="/servicios">
                <Image
                  src="/assets/programas.jpg"
                  w={["150px", "150px", "100px", "150px"]}
                  h={["150px", "150px", "100px", "150px"]}
                  overflow="hidden"
                  borderRadius="100%"
                />
              </a>
              <Text
                w="80%"
                h={["50px", "50px", "100px", "100px"]}
                align="center"
                fontSize={["16px", "16px", "16px", "20px"]}
                fontWeight="black"
              >
                Apoyo en programas de reciclado
              </Text>
              <NextLink href="/servicios" passHref>
                <IconButton
                  as="a"
                  fontSize="2xl"
                  bgColor="transparent"
                  color="white"
                  icon={<FaArrowAltCircleRight />}
                />
              </NextLink>
            </VStack>
          </Flex>
        </Flex>
        {/* Clientes */}
        <Flex flexDir="column" w="100%" h="auto">
          <Center w="100%" h="auto">
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              align="center"
              pt="50px"
              fontWeight="bold"
            >
              EMPRESAS QUE CONFÍAN EN NOSOTROS
            </Text>
          </Center>
          <Box w="100%" h="auto">
            <Swiper
              id="testimonios"
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: "4000", pauseOnMouseEnter: true }}
            >
              <SwiperSlide key={`slide-0`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo1.png" w="200px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    TRACSA CAT
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-1`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo2.GIF" w="150px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    GRUPOMAR
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-2`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo3.png" w="300px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    COCA-COLA
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-3`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo4.jpg" w="200px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    AFFIMEX
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-4`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo5.PNG" w="200px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    LOGISTICA TRAE
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-5`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo6.png" w="400px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    COMERCIAL MEXICANA
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-6`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo7.jpg" w="400px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    TEPEYAC
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-7`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo8.png" w="300px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    CARLS JR
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-8`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo9.png" w="500px" h="150px" />
                  <Text
                    fontSize="20px"
                    fontWeight="bold"
                    justifySelf="flex-end"
                  >
                    COPPEL
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-9`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo10.png" w="200px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    GRUPO CIMA
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-10`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo11.jpg" w="150px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    BELONA
                  </Text>
                </VStack>
              </SwiperSlide>
              <SwiperSlide key={`slide-11`}>
                <VStack align="center" justify="center" p="40px 0px">
                  <Image src="/assets/logo12.png" w="350px" h="150px" />
                  <Text fontSize="20px" fontWeight="bold">
                    OFFICE DEPOT
                  </Text>
                </VStack>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
        {/* Contacto */}
        <Text
          pt="50px"
          fontSize="2xl"
          align="center"
          bgColor="green.400"
          color="white"
        >
          <strong>¿Tienes una duda sobre nosotros?</strong>
          <br />
        </Text>
        <Text
          pb="30px"
          fontSize="xl"
          align="center"
          bgColor="green.400"
          color="white"
        >
          llena los siguientes campos para que nos podamos comunicar contigo o
          puedes visitarnos en la siguiente ubicación:
        </Text>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["auto", "auto", "86vh", "85vh"]}
          bgColor="white"
          placeSelf="center"
        >
          <Center
            h={["50%", "50%", "100%", "100%"]}
            w={["100%", "100%", "50%", "50%"]}
          >
            <Grid
              w="100%"
              h="100%"
              gridTemplateColumns="repeat(2,1fr)"
              gridTemplateRows="repeat(6,1fr)"
              gridTemplateAreas="'nombres apellidos' 'numero numero' 'email email' 'mensaje mensaje' 'mensaje mensaje' 'boton boton'"
              gap="10px"
              p="10px"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl id="Nombre" gridArea="nombres" isRequired>
                <FormLabel>Nombres</FormLabel>
                <Input
                  placeholder="Ingresar nombres"
                  type="text"
                  {...register("firstName", { required: true })}
                />
              </FormControl>
              <FormControl id="Nombre" gridArea="apellidos" isRequired>
                <FormLabel>Apellidos</FormLabel>
                <Input
                  placeholder="Ingresar apellidos"
                  type="text"
                  {...register("lastName", { required: true })}
                />
              </FormControl>
              <FormControl id="Nombre" gridArea="numero" isRequired>
                <FormLabel>Número telefónico</FormLabel>
                <Input
                  placeholder="(123)-4567-890"
                  {...register("phoneNumber", {
                    required: true,
                    maxLength: 20,
                  })}
                />
              </FormControl>
              <FormControl id="Nombre" gridArea="email" isRequired>
                <FormLabel>Correo electrónico</FormLabel>
                <Input
                  type="email"
                  placeholder="alguien@algo.com"
                  {...register("email", { required: true })}
                />
              </FormControl>
              <FormControl id="Nombre" gridArea="mensaje" isRequired>
                <FormLabel>Mensaje:</FormLabel>
                <Textarea
                  placeholder="Platicanos un poco de tus dudas."
                  type="text"
                  {...register("message", { required: true, maxLength: 256 })}
                />
              </FormControl>
              <Button
                gridArea="boton"
                colorScheme="green"
                bgColor="green.400"
                type="submit"
              >
                Enviar
              </Button>
            </Grid>
          </Center>
          <Center
            h={["300px", "300px", "90%", "90%"]}
            w={["100%", "100%", "50%", "50%"]}
            minH="50vh"
            minW="50vw"
            border="1px solid"
            borderRadius="lg"
            m="10px"
            flexDir="column"
            boxShadow="xl"
          >
            <SimpleMap />
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
