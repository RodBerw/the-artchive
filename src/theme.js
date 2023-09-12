import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    large: {
      color: "white",
      fontSize: { base: "1em", md: "1.25em", xl: "1.5em" },
      letterSpacing: "5px",
    },
  },
});

export default theme;
