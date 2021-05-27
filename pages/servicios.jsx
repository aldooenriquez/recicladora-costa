import { IconButton } from "@chakra-ui/button";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Grid } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Center, Text } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Servicios() {
  const {
    isOpen: isOpenMaterialesReciclables,
    onOpen: onOpenMaterialesReciclables,
    onClose: onCloseMaterialesReciclables,
  } = useDisclosure();
  const {
    isOpen: isOpenResiduosSolidos,
    onOpen: onOpenResiduosSolidos,
    onClose: onCloseResiduosSolidos,
  } = useDisclosure();
  const {
    isOpen: isOpenManejoEspecial,
    onOpen: onOpenManejoEspecial,
    onClose: onCloseManejoEspecial,
  } = useDisclosure();
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white">
        {/* Banner */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["80vh", "80vh", "80vh", "78vh"]}
          bgColor="white"
          p="15px"
          bgImage="url('/assets/banner_servicios.jpg')"
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
              fontSize="3xl"
              color="green.500"
              align="center"
              fontWeight="extrabold"
              w={["90%", "50%", "50%", "50%"]}
            >
              Conoce todo lo que tenemos para ti
            </Text>
            <IconButton
              aria-label="bajar"
              alignSelf="center"
              bgColor="transparent"
              color="green.500"
              border="2px solid"
              borderColor="green.500"
              icon={<IoIosArrowDown />}
              fontSize="30px"
              _hover={{ color: "white" }}
              onClick={() =>
                document
                  .getElementById("descripcion")
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </VStack>
        </Flex>
        {/* Descripcion de servicios */}
        <Flex flexDir="column" w="100%" h="auto" id="descripcion" p="20px 10%">
          <Text fontSize="3xl" color="green.500">
            Servicios que ofrecemos
          </Text>
          <Text fontSize="medium" color="black">
            Texto descriptivo y atrapante para que el prospecto de cliente pueda
            quedarse con nosotros, podemos basarnos en el kwplastics.
          </Text>
          <Grid
            w="100%"
            h="auto"
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}
            gridTemplateRows="auto"
            pt="20px"
            gap="30px"
            justifyContent="center"
            alignContent="center"
          >
            <VStack w="100%" h="auto" spacing={6}>
              <Text fontSize="lg" fontWeight="bold">
                Recolección de materiales reciclables
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="auto" src="/assets/pet.jpg" />
              </Center>
              <Button
                w="100%"
                variant="solid"
                colorScheme="green"
                onClick={onOpenMaterialesReciclables}
              >
                Conoce mas
              </Button>
              <Modal
                isOpen={isOpenMaterialesReciclables}
                onClose={onCloseMaterialesReciclables}
                isCentered
                scrollBehavior="outside"
                size="lg"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    Recoleccion de materiales reciclables
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Qui culpa et ullamco consectetur veniam veniam nisi ad in
                      officia tempor. Esse esse officia ea mollit fugiat
                      consequat Lorem eu. Ullamco irure nulla labore eu
                      cupidatat laborum tempor duis sint do. Consectetur
                      voluptate enim nulla aliquip officia labore nostrud enim
                      incididunt est est aliqua duis nulla.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost">Preguntas frecuentes</Button>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onCloseMaterialesReciclables}
                    >
                      Contactanos
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
            <VStack w="100%" h="auto" spacing={6}>
              <Text fontSize="lg" fontWeight="bold">
                Recolección de residuos solidos urbanos
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="auto" src="/assets/pet.jpg" />
              </Center>
              <Button
                w="100%"
                variant="solid"
                colorScheme="green"
                onClick={onOpenResiduosSolidos}
              >
                Conoce mas
              </Button>
              <Modal
                isOpen={isOpenResiduosSolidos}
                onClose={onCloseResiduosSolidos}
                isCentered
                scrollBehavior="outside"
                size="lg"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    Recolección de residuos solidos urbanos
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Qui culpa et ullamco consectetur veniam veniam nisi ad in
                      officia tempor. Esse esse officia ea mollit fugiat
                      consequat Lorem eu. Ullamco irure nulla labore eu
                      cupidatat laborum tempor duis sint do. Consectetur
                      voluptate enim nulla aliquip officia labore nostrud enim
                      incididunt est est aliqua duis nulla.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost">Preguntas frecuentes</Button>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onCloseResiduosSolidos}
                    >
                      Contactanos
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
            <VStack w="100%" h="auto" spacing={6}>
              <Text fontSize="lg" fontWeight="bold">
                Recolección de residuos solidos urbanos
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="auto" src="/assets/pet.jpg" />
              </Center>
              <Button
                w="100%"
                variant="solid"
                colorScheme="green"
                onClick={onOpenManejoEspecial}
              >
                Conoce mas
              </Button>
              <Modal
                isOpen={isOpenManejoEspecial}
                onClose={onCloseManejoEspecial}
                isCentered
                scrollBehavior="outside"
                size="lg"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    Recolección de residuos de manejo especial
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Qui culpa et ullamco consectetur veniam veniam nisi ad in
                      officia tempor. Esse esse officia ea mollit fugiat
                      consequat Lorem eu. Ullamco irure nulla labore eu
                      cupidatat laborum tempor duis sint do. Consectetur
                      voluptate enim nulla aliquip officia labore nostrud enim
                      incididunt est est aliqua duis nulla.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost">Preguntas frecuentes</Button>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onCloseManejoEspecial}
                    >
                      Contactanos
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
