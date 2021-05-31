import { IconButton } from "@chakra-ui/button";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Grid, ListItem, OrderedList } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Center, Text } from "@chakra-ui/layout";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
  const {
    isOpen: isOpenPapeleriaFiscal,
    onOpen: onOpenPapeleriaFiscal,
    onClose: onClosePapeleriaFiscal,
  } = useDisclosure();
  const {
    isOpen: isOpenContenedores,
    onOpen: onOpenContenedores,
    onClose: onCloseContenedores,
  } = useDisclosure();
  const {
    isOpen: isOpenApoyo,
    onOpen: onOpenApoyo,
    onClose: onCloseApoyo,
  } = useDisclosure();
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white" align="center">
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
              fontSize="5xl"
              color="white"
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
              color="white"
              borderColor="green.500"
              icon={<IoIosArrowDown />}
              fontSize="5xl"
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
        <Flex
          flexDir="column"
          w="100%"
          h="auto"
          id="descripcion"
          p="20px 10%"
          pt="100px"
        >
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
              <Text h="50px" fontSize="lg" fontWeight="bold">
                Recolección de materiales reciclables
              </Text>
              <Center w="100%" h="200px">
                <Image
                  w="300px"
                  h="full"
                  src="/assets/materialReciclable.jpg"
                />
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
                      Como: PET, Cartón, papel, nylon, plástico duro, tapas,
                      vidrio transparente, chatarra.
                    </Text>
                    <Image
                      w="500px"
                      h="auto"
                      src="/assets/materialReciclable.jpg"
                    />
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
              <Text h="50px" fontSize="lg" fontWeight="bold">
                Recolección de residuos sólidos urbanos
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="full" src="/assets/basura.jpg" />
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
                    Recolección de residuos sólidos urbanos
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Recolección de residuos sólidos urbanos y residuos de
                      manejo especial generados en casa habitación o en procesos
                      productivos para su transporte a vertederos autorizados.
                      Estos pueden ser basura, llantas, madera, escombro, entre
                      otros.
                    </Text>
                    <Image w="500px" h="full" src="/assets/basura.jpg" />
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
              <Text h="50px" fontSize="lg" fontWeight="bold">
                Recolección de residuos de manejo especial
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="full" src="/assets/playaSucia.jpg" />
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
            <VStack w="100%" h="auto" spacing={6}>
              <Text h="50px" fontSize="lg" fontWeight="bold">
                Destrucción de papelería fiscal
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="full" src="/assets/papelOficina.jpg" />
              </Center>
              <Button
                w="100%"
                variant="solid"
                colorScheme="green"
                onClick={onOpenPapeleriaFiscal}
              >
                Conoce mas
              </Button>
              <Modal
                isOpen={isOpenPapeleriaFiscal}
                onClose={onClosePapeleriaFiscal}
                isCentered
                scrollBehavior="outside"
                size="lg"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Destrucción de papelería fiscal</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Recolección y destrucción de documentos confidenciales y
                      archivo muerto.
                    </Text>
                    <Image w="500px" h="auto" src="/assets/papelOficina.jpg" />
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost">Preguntas frecuentes</Button>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onClosePapeleriaFiscal}
                    >
                      Contactanos
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
            <VStack w="100%" h="auto" spacing={6}>
              <Text h="50px" fontSize="lg" fontWeight="bold">
                Renta de contenedores
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="full" src="/assets/contenedor.jpg" />
              </Center>
              <Button
                w="100%"
                variant="solid"
                colorScheme="green"
                onClick={onOpenContenedores}
              >
                Conoce mas
              </Button>
              <Modal
                isOpen={isOpenContenedores}
                onClose={onCloseContenedores}
                isCentered
                scrollBehavior="outside"
                size="lg"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Renta de contenedores</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Renta de contenedores de 1, 3, 6, 15, 20 y 30 metros
                      cúbicos para el almacenamiento de residuos.
                    </Text>
                    <Image w="500px" h="auto" src="/assets/contenedor.jpg" />
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost">Preguntas frecuentes</Button>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onCloseContenedores}
                    >
                      Contactanos
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
            <VStack w="100%" h="auto" spacing={6}>
              <Text h="50px" fontSize="lg" fontWeight="bold">
                Apoyo en programas de reciclado
              </Text>
              <Center w="100%" h="200px">
                <Image w="300px" h="full" src="/assets/playaSucia.jpg" />
              </Center>
              <Button
                w="100%"
                variant="solid"
                colorScheme="green"
                onClick={onOpenApoyo}
              >
                Conoce mas
              </Button>
              <Modal
                isOpen={isOpenApoyo}
                onClose={onCloseApoyo}
                isCentered
                scrollBehavior="outside"
                size="lg"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Apoyo en programas de reciclado</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Unimos esfuerzos para limpiar áreas naturales como playas,
                      ríos, áreas urbanas y salvaguardar su equilibrio
                      ecológico.
                    </Text>
                    <Image w="500px" h="auto" src="/assets/playaSucia.jpg" />
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost">Preguntas frecuentes</Button>
                    <Button colorScheme="blue" mr={3} onClick={onCloseApoyo}>
                      Contactanos
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
          </Grid>
        </Flex>
        {/* Preguntas frecuentes */}
        <Flex w="80%" flexDir="column" p="50px 0px">
          <Text fontSize="3xl" pb="20px">
            Preguntas frecuentes:
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ¿Qué es un residuo sólido urbano (RSU)?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Los generados en las casas habitación, que resultan de la
                    eliminación de los materiales que utilizan en sus
                    actividades domésticas, de los productos que consumen y de
                    sus envases, embalajes o empaques; los residuos que
                    provienen de cualquier otra actividad dentro de
                    establecimientos o en la vía pública que genere residuos con
                    características domiciliarias, y los resultantes de la
                    limpieza de las vías y lugares públicos, siempre que no sean
                    considerados por esta Ley como residuos de otra índole (DOF,
                    2003).
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ¿Que es un residuo de manejo especial (RME)?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Son aquellos generados en los procesos productivos, que no
                    reúnen las características para ser considerados como
                    peligrosos o como residuos sólidos urbanos, o que son
                    producidos por grandes generadores de residuos sólidos
                    urbanos (DOF, 2003).
                    <OrderedList spacing={4}>
                      <ListItem>
                        Los residuos de las rocas o los productos de su
                        descomposición que sólo puedan utilizarse para la
                        fabricación de materiales de construcción o se destinen
                        para este fin, así como los productos derivados.
                      </ListItem>
                      <ListItem>
                        Los de servicios de salud, generados por los
                        establecimientos que realicen actividades
                        médico-asistenciales a las poblaciones humanas o
                        animales, centros de investigación, con excepción de los
                        biológico-infecciosos.
                      </ListItem>
                      <ListItem>
                        Residuos generados por las actividades pesqueras,
                        agrícolas, silvícolas, forestales, avícolas, ganaderas,
                        incluyendo los residuos de los insumos utilizados en
                        esas actividades.
                      </ListItem>
                      <ListItem>
                        Residuos de los servicios de transporte, así como los
                        generados a consecuencia de las actividades que se
                        realizan en puertos, aeropuertos, terminales
                        ferroviarias y portuarias y en las aduanas.
                      </ListItem>
                      <ListItem>
                        Lodos provenientes del tratamiento de aguas residuales.
                      </ListItem>
                      <ListItem>
                        Residuos de tiendas departamentales o centros
                        comerciales generados en grandes volúmenes.
                      </ListItem>
                      <ListItem>
                        Residuos de la construcción, mantenimiento y demolición
                        en general.
                      </ListItem>
                      <ListItem>
                        Residuos tecnológicos provenientes de las industrias de
                        la informática, fabricantes de productos electrónicos o
                        de vehículos automotores y otros que al transcurrir su
                        vida útil, por sus características, requieren de un
                        manejo específico.
                      </ListItem>
                    </OrderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ¿Qué es un residuo peligroso?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Residuos que posean alguna de las características de
                    corrosividad, reactividad, explosividad, toxicidad,
                    inflamabilidad, o que contengan agentes infecciosos que les
                    confieran peligrosidad, así como envases, recipientes,
                    embalajes y suelos que hayan sido contaminados cuando se
                    transfieran a otro sitio (DOF, 2003).
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ¿Qué obligaciones tengo si genero residuos?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Los poseedores de residuos estarán obligados, siempre que no
                    procedan a gestionarlos por sí mismos, a entregarlos a un
                    gestor de residuos, para su valorización o eliminación, o a
                    participar en un acuerdo voluntario o convenio de
                    colaboración que comprenda estas operaciones.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ¿Qué se considera una infracción grave en la gestión de
                        residuos?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <OrderedList spacing={4}>
                      <ListItem>
                        El abandono, vertido o eliminación incontrolados de
                        residuos peligrosos.
                      </ListItem>
                      <ListItem>
                        El abandono, vertido o eliminación incontrolada de
                        cualquier otro tipo de residuos, siempre que se haya
                        producido un daño o deterioro grave para el medio
                        ambiente o se haya puesto en peligro grave la salud de
                        las personas.
                      </ListItem>
                      <ListItem>
                        La elaboración, importación o adquisición
                        intracomunitaria de productos con sustancias o
                        preparados prohibidos por la peligrosidad de los
                        residuos que generan.
                      </ListItem>
                      <ListItem>
                        La no realización de las operaciones de limpieza y
                        recuperación cuando un suelo haya sido declarado como
                        contaminado, tras el correspondiente requerimiento de la
                        Comunidad Autónoma o el incumplimiento, en su caso, de
                        las obligaciones derivadas de acuerdos voluntarios o
                        convenios de colaboración.
                      </ListItem>
                      <ListItem>
                        La no realización de las operaciones de limpieza y
                        recuperación cuando un suelo haya sido declarado como
                        contaminado, tras el correspondiente requerimiento de la
                        Comunidad Autónoma o el incumplimiento, en su caso, de
                        las obligaciones derivadas de acuerdos voluntarios o
                        convenios de colaboración.
                      </ListItem>
                      <ListItem>
                        La mezcla de las diferentes categorías de residuos
                        peligrosos entre sí o de éstos con los que no tengan tal
                        consideración, siempre que como consecuencia de ello se
                        haya producido un daño o deterioro grave para el medio
                        ambiente o se haya puesto en peligro grave la salud de
                        las personas.
                      </ListItem>
                      <ListItem>
                        La entrega, venta o cesión de residuos peligrosos a
                        personas físicas o jurídicas distintas de las señaladas
                        en esta Ley, así como la aceptación de los mismos en
                        condiciones distintas de las que aparezcan en las
                        correspondientes autorizaciones o en las normas
                        establecidas en esta Ley.
                      </ListItem>
                      <ListItem>
                        La omisión, en el caso de residuos peligrosos, de los
                        necesarios planes de seguridad y previsión de
                        accidentes, así como de los planes de emergencia
                        interior y exterior de las instalaciones.
                      </ListItem>
                      <ListItem>
                        Valorización o eliminación, en el plazo máximo de ciento
                        ochenta días tras la recepción de los mismos.
                      </ListItem>
                      <ListItem>
                        La obstrucción a la actividad inspectora o de control de
                        las Administraciones públicas.
                      </ListItem>
                      <ListItem>
                        La falta de etiquetado o el etiquetado incorrecto o
                        parcial de los envases que contengan residuos
                        peligrosos.
                      </ListItem>
                      <ListItem>
                        La mezcla de las diferentes categorías de residuos
                        peligrosos entre sí o de éstos con los que no tengan tal
                        consideración, siempre que como consecuencia de ello no
                        se haya producido un daño o deterioro grave para el
                        medio ambiente o se haya puesto en peligro grave la
                        salud de las personas.
                      </ListItem>
                      <ListItem>
                        La entrega, venta o cesión de residuos no peligrosos a
                        personas físicas o jurídicas distintas de las señaladas
                        en esta Ley, así como la aceptación de los mismos en
                        condiciones distintas de las que aparezcan en las
                        correspondientes autorizaciones o en las normas
                        establecidas en esta Ley.
                      </ListItem>
                    </OrderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
}
