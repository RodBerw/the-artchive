import { Box, Image, Flex, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <div>
      <Box>
        <Box position="relative" zIndex="1">
          <Image
            position="absolute"
            transform="translate(-20%, -35%) rotate(15deg)"
            w="90%"
            src="/assets/paper.png"
            minW="150px"
          ></Image>
          <Flex position="absolute" flexDirection="column" justify="center">
            <Flex alignItems="center">
              <Image src="/assets/logo.png" ml="1%" alt="Logo" w="25%"></Image>
              <Text
                fontFamily="Cormorant Garamond, serif"
                letterSpacing="wide"
                lineHeight="1em"
                fontWeight="200"
                fontSize="3.2vw"
              >
                THE
                <br /> ARTCHIVE
              </Text>
            </Flex>
            <Flex justifyContent="center">
              <Text
                fontFamily="Tangerine, cursive"
                textAlign="right"
                fontSize="2vw"
                mr="30%"
              >
                "A taste for simplicity cannot endure for long."
                <br /> Eugene Delacroix
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
