import "./Header.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <div>
      <Flex
        w="100%"
        bg="#0B1C24"
        justify="space-between"
        h="50px"
        align="center"
      >
        <Box flex="1"></Box>
        <Box flex="1" textAlign="center">
          <Text
            fontFamily="Bacasime Antique, serif;"
            color="white"
            fontSize="1.75em"
            fontWeight="500"
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
          <MenuIcon sx={{ color: "#ffffff" }} />
        </Box>
      </Flex>
    </div>
  );
}
