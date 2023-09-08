import { Box, Image, Text, Flex, Grid } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Banner() {
  return (
    <div>
      <Box h={{ base: "40vh", md: "85vh", xl: "85vh" }} minH="300px">
        <Box w="100%" h="100%" position="relative" zIndex="-1">
          <Image
            position="absolute"
            objectFit="cover"
            w="100%"
            h="100%"
            src="/assets/banner-background.jpg"
            alt="Banner"
          ></Image>
          <Flex
            position="absolute"
            zIndex="0"
            w="100%"
            h="100%"
            flexDirection="column-reverse"
          >
            <Box
              h="45%"
              bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, black 90%)"
            ></Box>
          </Flex>
          <Flex w="100%" h="100%" position="absolute">
            <Box flex="1">
              <Logo />
            </Box>
            <Box flex="1" h={{ base: "50%", md: "100%", xl: "100%" }}>
              <Grid margin="0 0 0 22vw" templateRows="1fr 1fr" h="100%">
                <Flex flexDirection="column">
                  <Text
                    mt="10px"
                    color="white"
                    fontFamily="Imbue, serif"
                    letterSpacing="wide"
                    lineHeight="1em"
                    fontSize={{ base: "3em", md: "5.5em", xl: "8em" }}
                  >
                    ART
                    <br /> COLECTION
                  </Text>
                  <Text
                    flex="1"
                    w="75%"
                    color="white"
                    fontSize={{ base: "1em", md: "1.25em", xl: "1.5em" }}
                    fontWeight="light"
                    lineHeight="1.25em"
                  >
                    LEARN FROM THE OLD MASTERS
                  </Text>
                </Flex>
                <Flex
                  justifyContent="right"
                  textAlign="right"
                  alignItems="flex-end"
                >
                  <Text
                    textAlign="right"
                    writing-mode="vertical-rl"
                    mb="4%"
                    mr="5%"
                    w="100%"
                    color="white"
                    fontSize={{ base: ".25em", md: ".5em", xl: ".75em" }}
                    letterSpacing="5px"
                    lineHeight="1.25em"
                  >
                    MADE BY RODOLFO BERWANGER
                  </Text>
                </Flex>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
