import { Box, Center, Flex, Text } from "@chakra-ui/react";

export default function SideDescription() {
  return (
    <div>
      <Flex
        w="100%"
        position="absolute"
        margin="auto"
        textAlign="right"
        h="100vh"
        justifyContent="right"
        alignItems="center"
      >
        <Text
          position="fixed"
          color="white"
          fontSize={{ base: ".5em", md: ".75em", xl: "1em" }}
          letterSpacing="5px"
          zIndex="10"
          transform="scale(-1,-1)"
          style={{ writingMode: "vertical-rl" }}
          mr="1vw"
        >
          HOME
        </Text>
      </Flex>
    </div>
  );
}
