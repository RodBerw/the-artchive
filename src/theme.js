import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    large: {
      color: "white",
      fontSize: { base: "1em", md: "1.5em", xl: "2em" },
      letterSpacing: "10px",
    },
    basic:{
      color:"white",
      fontSize:{base: ".75em", md: "1em", xl: "1.25em"}
    },
    detail:{
      color:"#D9D9D9",
      fontSize:{base: ".5em", md: ".75em", xl: "1em"}
    }
  },
});

export default theme;
