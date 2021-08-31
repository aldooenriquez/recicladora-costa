import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Center, Flex, Grid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import NextLink from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IconButton } from "@chakra-ui/button";
import Head from "next/head";
import React from "react";
import SimpleMap from "../components/map";
import credentials from "../credentials";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/toast";
import { Heading, VStack } from "@chakra-ui/react";
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

export default function Contacto() {
  const { handleSubmit, register } = useForm();
  const toast = useToast();

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
        <title>Reciclaje de la Costa - Contacto</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Contacta a Reciclaje de la Costa"
        ></meta>
        <meta
          name="keywords"
          content="reciclar,servicio,reciclaje,residuos,basura,manzanillo,colima,costa"
        ></meta>
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white" m="0 auto">
        {/* Banner */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["80vh", "80vh", "80vh", "78vh"]}
          bgColor="white"
          p="15px"
          bgImage="url('/assets/banner_contacto.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
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
              w={["90%", "90%", "50%", "50%"]}
            >
              ¿TIENES UNA DUDA SOBRE NOSOTROS?
            </Heading>
            <Text
              fontSize={["md", "md", "xl", "xl"]}
              color="white"
              align="center"
              w={["90%", "50%", "50%", "50%"]}
            >
              llena los siguientes campos para que nos podamos comunicar contigo
              o puedes visitarnos en la siguiente ubicación
            </Text>
            <IconButton
              aria-label="bajar"
              alignSelf="center"
              bgColor="transparent"
              color="white"
              borderColor="green.500"
              icon={<IoIosArrowDown />}
              fontSize="5xl"
              _hover={{ color: "white" }}
              onClick={() =>
                document
                  .getElementById("contacto")
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </VStack>
        </Flex>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["auto", "auto", "86vh", "85vh"]}
          bgColor="white"
          placeSelf="center"
          id="contacto"
          pt="100px"
          mb="100px"
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
            m={["10px 0px", "10px 0px", "10px", "10px"]}
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
