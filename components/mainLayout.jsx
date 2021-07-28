import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { HStack, Icon } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import React, { useState } from "react";
import {
  AiFillMail,
  AiOutlineClose,
  AiFillPhone,
  AiOutlineMenu,
} from "react-icons/ai";

export default function MainLayOut({ children }) {
  return (
    <Flex flexDir="column" minH="100vh" w="100%">
      <NavBar />
      <Box flex="1 0 auto">{children}</Box>
      <Footer />
    </Flex>
  );
}

function NavBar({ children }) {
  const [display, changeDisplay] = useState("none");

  return (
    <>
      <Box w="100%" h="fit-content" p="10px" bg="green.400" color="white">
        <Flex
          flexDir={["column", "row", "row", "row"]}
          w="100%"
          m="0"
          justifyContent="space-between"
        >
          <HStack placeItems="center">
            <Icon as={AiFillMail} boxSize={6} />
            <a href="mailto:aldoo.enriquez@gmail.com?subject=Contacto%20rapido&body=Escriba%20aqui%20sus%20dudas:">
              <Text>contacto@reciclajedelacosta.com</Text>
            </a>
          </HStack>
          <HStack placeItems="center" pt={["10px", "0px", "0px", "0px"]}>
            <Icon as={AiFillPhone} boxSize={6} />
            <a href="tel:3143348888">
              <Text>314-334-8888</Text>
            </a>
            <Text> ó </Text>
            <a href="tel:3143330190">
              <Text>314-333-0190</Text>
            </a>
          </HStack>
        </Flex>
      </Box>
      <Flex
        flexDir="row"
        w="100%"
        h="auto"
        align="center"
        bgColor="white"
        position="sticky"
        top="0"
        zIndex={2}
        p="5px"
      >
        <a href="/">
          <Image
            src="/assets/logo.png"
            width="auto"
            height={["12vh", "13vh", "14vh", "15vh"]}
            pt="15px"
            pb="15px"
            pl="15px"
          />
        </a>
        <Spacer />
        <Flex flexDir="row" display={["none", "none", "none", "flex"]}>
          <NextLink href="/" passHref>
            <Button
              as="a"
              colorScheme="whiteAlpha"
              color="green.400"
              variant="ghost"
              p="15px"
              onClick={() => changeDisplay("none")}
            >
              Inicio
            </Button>
          </NextLink>
          <NextLink href="/servicios" passHref>
            <Button
              as="a"
              colorScheme="whiteAlpha"
              color="green.400"
              variant="ghost"
              p="15px"
              onClick={() => changeDisplay("none")}
            >
              Servicios
            </Button>
          </NextLink>
          <NextLink href="/nosotros" passHref>
            <Button
              as="a"
              colorScheme="whiteAlpha"
              color="green.400"
              variant="ghost"
              p="15px"
              onClick={() => changeDisplay("none")}
            >
              Nosotros
            </Button>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Button
              as="a"
              colorScheme="green"
              bgColor="green.400"
              color="white"
              variant="solid"
              onClick={() => changeDisplay("none")}
            >
              Contacto
            </Button>
          </NextLink>
        </Flex>
        <IconButton
          aria-label="Abrir Menu"
          fontSize="30px"
          mr={2}
          icon={<AiOutlineMenu />}
          display={["flex", "flex", "flex", "none"]}
          bgColor="transparent"
          color="green.400"
          onClick={() => changeDisplay("flex")}
        />
        <Box h="auto" w="5%"></Box>
      </Flex>
      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="center">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Cerrar Menu"
            fontSize="30px"
            icon={<AiOutlineClose />}
            bgColor="transparent"
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center" justify="center" h="full">
          <NextLink href="/" passHref>
            <Button
              as="a"
              colorScheme="whiteAlpha"
              color="green.400"
              variant="ghost"
              p="15px"
              onClick={() => changeDisplay("none")}
            >
              Inicio
            </Button>
          </NextLink>
          <NextLink href="/servicios" passHref>
            <Button
              as="a"
              colorScheme="whiteAlpha"
              color="green.400"
              variant="ghost"
              p="15px"
              onClick={() => changeDisplay("none")}
            >
              Servicios
            </Button>
          </NextLink>
          <NextLink href="/nosotros" passHref>
            <Button
              as="a"
              colorScheme="whiteAlpha"
              color="green.400"
              variant="ghost"
              p="15px"
              onClick={() => changeDisplay("none")}
            >
              Nosotros
            </Button>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Button
              as="a"
              colorScheme="green"
              color="white"
              bgColor="green.400"
              variant="solid"
              onClick={() => changeDisplay("none")}
            >
              Contacto
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </>
  );
}

function Footer({ children }) {
  return (
    <Flex
      flexDir="row"
      bgColor="green.400"
      h={["150px", "150px", "100px", "100px"]}
      w="100%"
    >
      <Spacer />
      <Center w="60%">
        <Text fontSize={["md", "md", "lg", "lg"]} color="white" align="center">
          Reciclaje de la Costa <br />
          Calle 24 #30, Lib. Tapeixtles, 28239 Manzanillo, Col. <br />
          Tel. 314 334 8888
        </Text>
      </Center>
      <Spacer />
    </Flex>
  );
}
