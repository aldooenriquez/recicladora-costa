import { Center, Text } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import NextLink from "next/link";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Divider } from "@chakra-ui/layout";

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Nosotros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white">
        {/* Banner */}
        <Flex flexDir="column" w="100%" h="100vh" bgColor="white" p="15px">
          <VStack
            w="100%"
            h="50%"
            spacing={4}
            justifyContent="flex-end"
            pb="30px"
          >
            <Text
              fontSize="28px"
              color="black"
              align="center"
              fontWeight="bold"
            >
              Conocenos y contacta con nosotros
            </Text>
            <NextLink href="/contacto" passHref>
              <Button as="a" colorScheme="green" color="white" variant="solid">
                ¿Donde encontrarnos?
              </Button>
            </NextLink>
          </VStack>
          <Image src="/assets/corporativo.png" w="100%" h="50%" />
        </Flex>
        {/* Historia */}
        <Flex flexDir="column" w="100%" h="auto" p="40px 20px">
          <Text fontSize="2xl" align="center" color="green.500" pb="20px">
            Nuestra historia
          </Text>
          <Divider orientation="horizontal" />
          <Text fontSize="14px" align="justify" pt="20px">
            El fundador Héctor Cuevas empresario manzanillense, detectó la
            necesidad de reciclaje cuando su empresa purificadora de agua
            generaba desechos de garrafones de agua que no parecían tener un
            tratamiento, simplemente terminaban en el relleno sanitario de la
            ciudad. Profundizando en el tema, se percató de la amplia gama de
            productos susceptibles a reciclar, fue así como nació Reciclaje de
            la costa S.A de C.V. <br />
            Actualmente es la empresa líder en el manejo integral de residuos
            sólidos urbanos, residuos de manejo especial y acopio de materiales
            reciclables en el puerto de Manzanillo, Colima. Cuenta con la
            capacidad de dar servicio a empresas pequeñas, medianas y grandes,
            adaptándose a sus necesidades, gracias a una amplia flotilla de
            unidades vehiculares, personal capacitado y certificaciones
            necesarias. <br />
            Comprometida con el medio ambiente, la empresa logra reciclar miles
            de toneladas al año, que de lo contrario terminarían en el relleno
            sanitario sin ningún tratamiento.
          </Text>
        </Flex>
        {/* Mision */}
        <Flex flexDir="column" w="100%" h="auto" p="40px 20px">
          <Text fontSize="2xl" align="center" color="green.500" pb="20px">
            Mision
          </Text>
          <Divider orientation="horizontal" />
          <Text fontSize="14px" align="justify" pt="20px">
            Proveer soluciones sustentables en la gestión de residuos no
            peligrosos a empresas e individuos, a través de un servicio de
            calidad, eficiente y profesional, al beneficio de nuestros clientes,
            colaboradores y medio ambiente.
          </Text>
        </Flex>
        {/* Vision */}
        <Flex flexDir="column" w="100%" h="auto" p="40px 20px">
          <Text fontSize="2xl" align="center" color="green.500" pb="20px">
            Vision
          </Text>
          <Divider orientation="horizontal" />
          <Text fontSize="14px" align="justify" pt="20px">
            Promover un impacto ambiental positivo al ser una empresa líder en
            la captación y transformación de residuos a nivel nacional,
            concientizando a la población y fomentando el desarrollo de la
            región, consolidándonos como una empresa socialmente responsable.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
