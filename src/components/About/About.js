import { Box, Image, Text, Flex, extendTheme } from "@chakra-ui/react";

export default function About() {
  const m = { base: "-50px", md: "-75px", xl: "-100px" };
  return (
    <div>
      <Flex w="80%" justifyContent="center" m="auto" bg="black" mt={{ base: "150px", md: "250px", xl: "350px" }} mb="20vw">
        <Box w="80%" m="auto" bgImg="./assets/oil_background.jpg" textAlign="center" pb="100px" top="-100px" mt={m} mb={m}>
          <Flex flexDirection="column" alignItems="center" m="0 10% 0 10%">
            <Flex id="about" pt="10%" flexDirection="column" alignItems="center" gap="10px">
              <Text textStyle="large" fontSize={{ base: "1.5em", md: "2em", xl: "2.5em" }}>CREATE WITH ART CARDS</Text>
              <Image w="100%" src="/assets/about-img-test.png" alt="Image" h="25vw" objectFit="cover"></Image>
              <Text textStyle="large">HOW IT WORKS?</Text>
              <Text w="75%" textAlign="justify" textStyle="basic"><b>ArtCards</b> are a portal to the art world. Click on these cards to unveil artists' biographies and captivating galleries of their artworks. Explore their stories, inspirations, and creativity in a glance.</Text>
            </Flex>
            <Box position="relative" w="100%" h={{ base: "400px", md: "500px", xl: "600px" }} mb="50px">
              <Flex w="50%" minW="150px" position="absolute" zIndex="3" flexDirection="column" alignItems="start" mt="20%" gap="1vw" color="white" textAlign="start">
                <Text textStyle="large">DISCOVER</Text>
                <Text mb="2%" textStyle="basic">Dive into a world of artistic brilliance! Explore a vast collection of cards featuring artists, paintings, and breathtaking artworks.</Text>
                <Text textStyle="large" w="100%" textAlign="end">CREATE</Text>
                <Text mb="2%" textAlign="end" textStyle="basic">Create curated collections of your favorite <b>ArtCards</b>. Organize and share your artistic journey with others.</Text>
                <Text textStyle="large">START</Text>
                <Text textStyle="basic">Whether you're an artist, collector, or simply an admirer of art, begin your creative journey with ArtCards today!</Text>
              </Flex>
              <Image w="45vw" minW="200px" bottom="-150px" right="-30%" position="absolute" zIndex="2" src="./assets/about-painting.png"></Image>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
