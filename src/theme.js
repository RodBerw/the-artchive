import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    large: {
      color: "white",
      fontSize: { base: "1em", md: "1.5em", xl: "2em" },
      letterSpacing: "10px",
    },
  },
});

export default theme;
