import { Flex, Link } from "@chakra-ui/react";

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
          <Link
            _hover={{ transform: "scale(1.05)" }}
            layerStyle="textButton"
            href="/"
          >
            HOME
          </Link>
          <Link
            _hover={{ transform: "scale(1.1)" }}
            layerStyle="textButton"
            href="/artists"
          >
            ARTISTS
          </Link>
          <Link
            _hover={{ transform: "scale(1.1)" }}
            layerStyle="textButton"
            href="/artworks"
          >
            ARTWORKS
          </Link>
          <Link
            _hover={{ transform: "scale(1.1)" }}
            layerStyle="textButton"
            href="/about"
          >
            ABOUT
          </Link>
        </Flex>
      </Flex>
    </div>
  );
}
