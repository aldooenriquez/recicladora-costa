import { Flex, Box, Text, Spacer, Center } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NextLink from "next/link";

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
              color="green.500"
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
              color="green.500"
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
              color="green.500"
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
          color="green.500"
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
              color="green.500"
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
              color="green.500"
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
              color="green.500"
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
    <Flex flexDir="row" bgColor="green.500" h="100px" w="100%">
      <Spacer />
      <Center w="60%">
        <Text fontSize={["md", "md", "lg", "lg"]} color="white" align="center">
          Reciclaje de la Costa <br />
          Calle 24 #30, Lib. Tapeixtle, 28239 Manzanillo, Col. <br />
          Tel. 314 334 8888
        </Text>
      </Center>
      <Spacer />
    </Flex>
  );
}
