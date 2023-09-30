import { Box, Flex, Text } from "@chakra-ui/react";
import Category from "./Category";

export default function SearchBy() {
  return (
    <div>
      <Flex
        minW="500px"
        w="80%"
        bg="black"
        m="auto"
        mt={{ base: "100px", md: "200px", xl: "250px" }}
        position="relative"
        justifyContent="center"
      >
        <Flex
          id="searchBy"
          w="100%"
          h="100%"
          p="5%"
          flexDirection="column"
          color="white"
          fontSize="1vw"
          letterSpacing={{ base: "5px", md: "7.5px", xl: "10px" }}
          position="absolute"
        >
          <Box flex="1">
            <Text textAlign="right">
              WHAT
              <br /> ARE
              <br /> YOU
              <br /> LOOKING
              <br /> FOR?
            </Text>
          </Box>
          <Flex flex="1">
            <Text alignSelf="end">THE ARTCHIVE</Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          gap="2%"
          top="0"
          zIndex="1"
          w={{ base: "80%", md: "100%" }}
          h={{ base: "90%", xl: "40vw" }}
          p="10%"
          mt="5%"
          flexWrap="wrap"
          rowGap="10px"
        >
          <Category align="start" img="artists.jpg" text="ARTISTS" />
          <Category align="center" img="artworks.jpg" text="ARTWORKS" />
          <Category align="end" img="articles.jpg" text="ARTCLES & REVIEWS" />
        </Flex>
      </Flex>
    </div>
  );
}
