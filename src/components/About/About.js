import { Box, Image, Text, Flex, extendTheme } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Box w="60%" m="auto" bgImg="./assets/oil_background.jpg" textAlign="center" pt="150px" pb="100px">
        <Flex flexDirection="column" alignItems="center">
          <Flex id="about" pt="10%" flexDirection="column" alignItems="center" gap="10px">
            <Text textStyle="large" fontSize={{ base: "1.5em", md: "2em", xl: "2.5em" }}>CREATE WITH ART CARDS</Text>
            <Image w="100%" src="/assets/about-img-test.png" alt="Image" h="25vw" objectFit="cover"></Image>
            <Text textStyle="large">HOW IT WORKS?</Text>
            <Text w="70%" textAlign="justify" color="white" fontSize={{base: ".75em", md: "1em", xl: "1.25em"}}><b>ArtCards</b> are a portal to the art world. Click on these cards to unveil artists' biographies and captivating galleries of their artworks. Explore their stories, inspirations, and creativity in a glance.</Text>
          </Flex>
          <Flex w="60%" flexDirection="column" alignItems="start" mt="5%" gap="10px" color="white">
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
