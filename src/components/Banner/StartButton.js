import { Box, Center, Flex, Text } from "@chakra-ui/react";

export default function StartButton() {
  return (
    <div>
      <Box>
        <Flex
          w="100%"
          h="300px"
          bg="black"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            position="absolute"
            justifySelf="center"
            left="0"
            right="0"
            m="auto"
            zIndex="2"
            w="300px"
            h="300px"
            border="2px solid white"
            transition="transform .5s"
            _hover={{ cursor: "pointer", transform: "translateY(-50px)" }}
          >
            <Center>
              <Text
                color="white"
                textAlign="center"
                mt="20px"
                fontSize="1.75em"
                letterSpacing="widest"
                fontWeight="light"
              >
                GET STARTED
              </Text>
            </Center>
          </Box>
          <Box
            zIndex="3"
            w="100%"
            h="80%"
            transform="translateY(20%)"
            bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, black 50%)"
          ></Box>
        </Flex>
        <Box
            position="absolute"
            zIndex="1"
            w="100%"
            h="100px"
            bg="linear-gradient(0deg, rgba(0,0,0,0) 0%, black 50%)"
          ></Box>
      </Box>
    </div>
  );
}
