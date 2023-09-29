import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function SideDescription(props) {
  const [text, setText] = useState(props.text);
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
        pointerEvents="none"
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
          pointerEvents="auto"
        >
          {text}
        </Text>
      </Flex>
    </div>
  );
}
