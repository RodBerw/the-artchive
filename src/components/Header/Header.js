import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [menuIconRot, setMenuIconRot] = useState(0);
  const [menuXPos, setMenuXPos] = useState(100);

  function menuTabToggle() {
    setMenuIconRot(menuIconRot === 0 ? -90 : 0);
    setMenuXPos(menuXPos === 100 ? 0 : 100);
    console.log(menuXPos);
  }

  return (
    <div>
      <Box w="100%">
        <Flex
          position="fixed"
          w="100%"
          h="50px"
          bg="#0B1C24"
          zIndex="999"
          justify="space-between"
          align="center"
        >
          <Box flex="1"></Box>
          <Box flex="1" textAlign="center">
            <Text
              fontFamily="Bacasime Antique, serif;"
              color="white"
              fontSize={{ base: "1.25em", md: "1.5em", xl: "1.75em" }}
              fontWeight="500"
              textAlign="center"
              whiteSpace="nowrap"
            >
              THE ARTCHIVE
            </Text>
          </Box>
          <Box
            flex="1"
            justifyContent="right"
            pr="10px"
            display="flex"
            alignItems="center"
          >
            <Icon
              as={MenuIcon}
              onClick={menuTabToggle}
              _hover={{ cursor: "pointer" }}
              color="#ffffff"
              w="40px"
              h="40px"
              transition="transform .25s"
              transform={`rotate(${menuIconRot}deg)`}
            />
          </Box>
        </Flex>
        <Menu menuXPos={menuXPos} />
      </Box>
    </div>
  );
}
