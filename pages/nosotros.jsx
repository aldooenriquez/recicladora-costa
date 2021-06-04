import { Center, Text } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import NextLink from "next/link";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Divider } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import {
  FaSeedling,
  FaAward,
  FaChartLine,
  FaBalanceScale,
  FaSuitcase,
} from "react-icons/fa";

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Nosotros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        flexDir="column"
        w="100%"
        h="auto"
        bgColor="white"
        align="center"
        justify="center"
      >
        {/* Banner */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["80vh", "80vh", "80vh", "78vh"]}
          bgColor="white"
          p="15px"
          bgImage="url('/assets/banner_nosotros.jpg')"
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
            <Text
              fontSize="5xl"
              color="white"
              align="center"
              fontWeight="extrabold"
              w={["90%", "50%", "50%", "50%"]}
            >
              Trabajamos por un futuro mas limpio
            </Text>
            <NextLink href="/contacto" passHref>
              <Button as="a" colorScheme="green" color="white" variant="solid">
                ¿Donde encontrarnos?
              </Button>
            </NextLink>
          </VStack>
        </Flex>
        {/* Historia */}
        <Flex
          flexDir="column"
          w={["100%", "100%", "80%", "80%"]}
          h="auto"
          p="40px 20px"
          align="center"
          justify="center"
        >
          <Text fontSize="3xl" align="center" color="green.500" pb="20px">
            Nosotros
          </Text>
          <Divider orientation="horizontal" />
          <Text fontSize="lg" align="justify" pt="20px">
            Somos una empresa comprometida con el cuidado del medio ambiente,
            con más de 10 años de experiencia en el sector de reciclaje y
            gestión de residuos. Nuestra base se encuentra en Manzanillo,
            Colima. <br />
            Contamos con una amplia gama de unidades vehiculares capaces de
            satisfacer las necesidades de nuestros clientes. <br />
            Tenemos lasautorizaciones correspondientes para la gestión de
            residuos, estamos registrados ante IMADES y podemos expedir
            manifiestos del destino final de los residuos.
          </Text>
        </Flex>
        {/* Mision */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w={["100%", "100%", "90%", "90%"]}
          h="auto"
          mb="50px"
        >
          <VStack w={["100%", "100%", "50%", "50%"]} h="auto" p="20px 20px">
            <Text fontSize="3xl" align="center" color="green.500" pb="20px">
              Mision
            </Text>
            <Divider orientation="horizontal" />
            <Text fontSize="lg" align="justify" pt="20px">
              Proveer soluciones sustentables en la gestión de residuos no
              peligrosos a empresas e individuos, a través de un servicio de
              calidad, eficiente y profesional, al beneficio de nuestros
              clientes, colaboradores y medio ambiente.
            </Text>
          </VStack>
          {/* Vision */}
          <VStack w={["100%", "100%", "50%", "50%"]} h="auto" p="20px 20px">
            <Text fontSize="3xl" align="center" color="green.500" pb="20px">
              Vision
            </Text>
            <Divider orientation="horizontal" />
            <Text fontSize="lg" align="justify" pt="20px">
              Promover un impacto ambiental positivo al ser una empresa líder en
              la captación y transformación de residuos a nivel nacional,
              concientizando a la población y fomentando el desarrollo de la
              región, consolidándonos como una empresa socialmente responsable.
            </Text>
          </VStack>
        </Flex>
        {/* Valores */}
        <Flex
          flexDir="column"
          w="100%"
          h={["auto", "auto", "250px", "250px"]}
          align="center"
          justify="center"
          bgColor="green.500"
          pt="20px"
          pb="20px"
        >
          <Text fontSize="3xl" color="white" pb="20px" align="center">
            Nuestros valores
          </Text>
          <Grid
            w="80%"
            templateRows={["1fr 1fr 1fr", "1fr 1fr 1fr", "1fr", "1fr"]}
            templateColumns={[
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr",
            ]}
            gap="20px"
            color="white"
          >
            <VStack gridColumn="1" gridRow="1">
              <Icon h="45px" as={FaSeedling} fontSize="40px" />
              <Text fontSize="lg">Sustentabilidad</Text>
            </VStack>
            <VStack gridColumn="2" gridRow="1">
              <Icon h="45px" as={FaAward} fontSize="40px" />
              <Text fontSize="lg">Calidad</Text>
            </VStack>
            <VStack
              gridColumn={["1", "1", "3", "3"]}
              gridRow={["2", "2", "1", "1"]}
            >
              <Icon h="45px" as={FaBalanceScale} fontSize="40px" />
              <Text fontSize="lg">Honestidad</Text>
            </VStack>
            <VStack
              gridColumn={["2", "2", "4", "4"]}
              gridRow={["2", "2", "1", "1"]}
            >
              <Icon h="45px" as={FaChartLine} fontSize="40px" />
              <Text fontSize="lg">Eficiencia</Text>
            </VStack>
            <VStack
              gridColumn={["1/3", "1/3", "5", "5"]}
              gridRow={["3", "3", "1", "1"]}
            >
              <Icon h="45px" as={FaSuitcase} fontSize="40px" />
              <Text fontSize="lg">Profesionalismo</Text>
            </VStack>
          </Grid>
        </Flex>
        <Center
          w="100%"
          h="300px"
          bgImage="url('/assets/asset2.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <VStack>
            <Text fontSize="3xl" align="center">
              ¿Quieres unirte a nuestro equipo? <br />
              Ve nuestras vacantes.
            </Text>
            <NextLink
              href="https://www.facebook.com/recicladoradelacosta/jobs/?ref=page_internal"
              passHref
              isExternal="true"
            >
              <Button
                as="a"
                colorScheme="green"
                color="white"
                variant="solid"
                target="_blank"
              >
                VACANTES
              </Button>
            </NextLink>
          </VStack>
        </Center>
      </Flex>
    </>
  );
}
