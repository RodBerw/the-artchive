import { Box, Flex, transition } from "@chakra-ui/react";

export default function Menu(props) {
  return (
    <div>
      <Flex justifyContent="right">
        <Box
          position="fixed"
          w="300px"
          height="100vh"
          bg="#0B1C24"
          zIndex="998"
          transform={`translate(${props.menuXPos}%)`}
          transition="transform .25s"
        >
          1
        </Box>
      </Flex>
    </div>
  );
}
