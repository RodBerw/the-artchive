import { Box, Image, Text, Flex, extendTheme } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Box w="60%" h="1000px" m="auto" bg="blue" textAlign="center" pt="150px">
        <Flex flexDirection="column">
          <Flex padding="10%" flexDirection="column">
            <Text textStyle="large">CREATE WITH ART CARDS</Text>
            <Image src="/assets/about-img-test.png" alt="Image"></Image>
            <Text textStyle="large">CREATE WITH ART CARDS</Text>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Box>
    </div>
  );
}
