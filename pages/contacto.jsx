import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import Head from "next/head";
import React from "react";
import SimpleMap from "../components/map";
import credentials from "../credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white">
        <Text fontSize="3xl" fontWeight="bold" align="center">
          Contacto
        </Text>
        <Text p="10px" fontSize="lg" align="left">
          {" "}
          Rellena estos datos y pronto nos pondremos en contacto:
        </Text>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["auto", "auto", "86vh", "85vh"]}
          bgColor="white"
          justify="center"
          align="center"
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
            >
              <FormControl id="Nombre" gridArea="nombres" isRequired>
                <FormLabel>Nombres</FormLabel>
                <Input placeholder="Ingresar nombres" />
              </FormControl>
              <FormControl id="Nombre" gridArea="apellidos" isRequired>
                <FormLabel>Apellidos</FormLabel>
                <Input placeholder="Ingresar apellidos" />
              </FormControl>
              <FormControl id="Nombre" gridArea="numero" isRequired>
                <FormLabel>Numero telefonico</FormLabel>
                <Input placeholder="(123)-4567-890" />
              </FormControl>
              <FormControl id="Nombre" gridArea="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="alguien@algo.com" />
              </FormControl>
              <FormControl id="Nombre" gridArea="mensaje" isRequired>
                <FormLabel>Mensaje:</FormLabel>
                <Textarea placeholder="Platicanos un poco de tus  dudas." />
              </FormControl>
              <Button gridArea="boton" colorScheme="green">
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
