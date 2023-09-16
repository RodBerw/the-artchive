import { Box, Flex, Text } from "@chakra-ui/react";
import Category from "./Category";

export default function SearchBy() {
  return (
    <div>
      <Box w="80%" h="45vw" bg="black" m="auto" mt="250px" position="relative">
        <Flex
          id="searchBy"
          w="100%"
          h="100%"
          p="5%"
          flexDirection="column"
          color="white"
          fontSize="1vw"
          letterSpacing={{ base: "5px", md: "7.5px", xl: "10px" }}
          position="relative"
        >
          <Box flex="1">
            <Text
              textAlign="right"
              
            >
              WHAT
              <br /> ARE
              <br /> YOU
              <br /> LOOKING
              <br /> FOR?
            </Text>
          </Box>
          <Flex flex="1">
            <Text
              alignSelf="end"
              
            >
              THE ARTCHIVE
            </Text>
          </Flex>
        </Flex>
        <Flex
          position="absolute"
          justifyContent="center"
          gap="2%"
          top="0"
          zIndex="1"
          w="100%"
          h="90%"
          p="10%"
          mt="5%"
        >
          <Category marginTop="start" />
          <Category marginTop="center" />
          <Category marginTop="end" />
        </Flex>
      </Box>
    </div>
  );
}
