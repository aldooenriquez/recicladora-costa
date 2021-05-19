import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
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
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h="100vh"
          bgColor="white"
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
          <Box
            h={["50%", "50%", "100%", "100%"]}
            w={["100%", "100%", "50%", "50%"]}
            bgColor="gray.500"
          >
            <SimpleMap />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
