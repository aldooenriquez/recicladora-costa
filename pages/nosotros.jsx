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
import { Heading } from "@chakra-ui/react";

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Nosotros</title>
        <link rel="icon" href="/favicon.png" />
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
            <Heading
              fontSize={["4xl", "5xl", "5xl", "5xl"]}
              color="white"
              align="center"
              fontWeight="extrabold"
              w={["100%", "50%", "50%", "50%"]}
            >
              TRABAJAMOS POR UN FUTURO MÁS LIMPIO
            </Heading>
            <NextLink href="/contacto" passHref>
              <Button
                as="a"
                colorScheme="green"
                bgColor="green.400"
                color="white"
                variant="solid"
              >
                ¿DONDE ENCONTRARNOS?
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
          <Text
            fontSize={["3xl", "3xl", "4xl", "4xl"]}
            align="center"
            color="green.400"
            pb="20px"
            fontWeight="bold"
          >
            NOSOTROS
          </Text>
          <Divider orientation="horizontal" />
          <Text fontSize="lg" align="justify" pt="20px">
            En Reciclaje de la Costa, nuestro mayor compromiso es el cuidado del
            medio ambiente, es por eso que cada año logramos reciclar miles de
            toneladas de materiales reutilizables, siendo para nuestra región un
            centro de acopio al alcance de todos. <br />
            <br />
            A la par, buscamos ser para nuestros clientes un proveedor
            certificado que gestione de forma segura la disposición final de sus
            residuos en vertederos autorizados, siempre ofreciendo soluciones
            integrales a través de un servicio de calidad. <br />
            <br />
            Contamos con la capacidad y certificaciones necesarias para dar
            servicio a empresas de diversos tamaños y sectores, gracias a una
            amplia gama de unidades vehiculares y un personal altamente
            capacitado.
            <br />
            <br />
            Más de 10 años de experiencia nos respaldan como la empresa líder en
            reciclaje y gestión integral de residuos en la ciudad de Manzanillo,
            Colima.
          </Text>
          <Center w="100%" h="auto">
            <Image
              src="/assets/nosotrosDivider.jpg"
              w={["100%", "100%", "90%", "80%"]}
              h="auto"
              p="20px"
            />
          </Center>
        </Flex>
        {/* Mision */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w={["100%", "100%", "90%", "90%"]}
          h="auto"
          mb="50px"
        >
          <VStack w={["100%", "100%", "50%", "50%"]} h="auto" p="20px 20px">
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              align="center"
              color="green.400"
              pb="20px"
              fontWeight="bold"
            >
              MISIÓN
            </Text>
            <Divider orientation="horizontal" />
            <Text fontSize="lg" align="justify" pt="20px">
              Proveer soluciones intégrales en la gestión de residuos no
              peligrosos a empresas e individuos, a través de un servicio de
              calidad, eficiente y profesional, al beneficio de nuestros
              clientes, colaboradores y medio ambiente.
            </Text>
          </VStack>
          {/* Vision */}
          <VStack w={["100%", "100%", "50%", "50%"]} h="auto" p="20px 20px">
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              align="center"
              color="green.400"
              pb="20px"
              fontWeight="bold"
            >
              VISIÓN
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
          bgColor="green.400"
          pt="20px"
          pb="20px"
        >
          <Text
            fontSize={["3xl", "3xl", "4xl", "4xl"]}
            color="white"
            pb="20px"
            align="center"
            fontWeight="bold"
          >
            NUESTROS VALORES
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
            <Text fontSize={["3xl", "3xl", "4xl", "4xl"]} align="center">
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
                bgColor="green.400"
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
