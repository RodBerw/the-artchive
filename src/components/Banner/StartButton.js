import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function StartButton() {
  function Scroll() {
    const elementSearchBy = document.getElementById("about");

    if (elementSearchBy) {
      elementSearchBy.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <div>
      <Box>
        <Flex
          w="100%"
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
            w={{ base: "150px", md: "200px", xl: "300px" }}
            h={{ base: "75px", md: "125px", xl: "175px" }}
            border="2px solid white"
            borderBottom="1px solid transparent"
            transition="transform .5s"
            _hover={{ cursor: "pointer", transform: "translateY(-2vw)" }}
            onClick={Scroll}
          >
            <Center>
              <Text
                color="white"
                textAlign="center"
                mt="20px"
                fontSize={{ base: "1em", md: "1.5em", xl: "1.75em" }}
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
            h={{ base: "50px", md: "75px", xl: "100px" }}
            transform="translateY(40%)"
            bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, black 50%)"
          ></Box>
        </Flex>
        <Box
          position="absolute"
          zIndex="1"
          w="100%"
          h={{ base: "50px", md: "150px", xl: "200px" }}
          mt={{ base: "10px", md: "25px", xl: "40px" }}
          bg="linear-gradient(0deg, rgba(0,0,0,0) 0%, black 80%)"
        ></Box>
      </Box>
    </div>
  );
}
