import { Flex } from "@chakra-ui/layout";
import { Center, Text } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white">
        {/* Banner */}
        <Flex flexDir="row" h="100vh" bgColor="white">
          <Center w="100%" h="100%">
            <Text>Funciona Servicios</Text>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
