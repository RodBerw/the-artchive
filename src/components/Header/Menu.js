import { Text, Flex } from "@chakra-ui/react";
import Header from "./Header";

export default function Menu(props) {
  return (
    <div>
      <Flex justifyContent="right">
        <Flex
          position="fixed"
          w="300px"
          height="100vh"
          bg="#0B1C24"
          zIndex="998"
          transform={`translate(${props.menuXPos}%)`}
          transition="transform .25s"
          flexDirection="column"
          p="75px 0 0 50px"
          gap="50px"
          textStyle="basic"
          letterSpacing="10px"
        >
          <Text
            _hover={{ transform: "scale(1.05)" }}
            layerStyle="textButton"
            onClick={() => (window.location.href = "/")}
          >
            HOME
          </Text>
          <Text
            _hover={{ transform: "scale(1.1)" }}
            layerStyle="textButton"
            onClick={() => (window.location.href = "/artists")}
          >
            ARTISTS
          </Text>
          <Text
            _hover={{ transform: "scale(1.1)" }}
            layerStyle="textButton"
            onClick={() => (window.location.href = "/artworks")}
          >
            ARTWORKS
          </Text>
          <Text
            _hover={{ transform: "scale(1.1)" }}
            layerStyle="textButton"
            onClick={() => (window.location.href = "/about")}
          >
            ABOUT
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
