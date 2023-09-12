import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Banner from "../components/Banner/Banner";
import StartButton from "../components/Banner/StartButton";
import Background from "../components/Background/Background";
import SearchBy from "../components/SearchBy/SearchBy";
import SideDescription from "../components/Details/SideDescription";
import About from "../components/About/About";

export default function Home() {
  return (
    <div>
      <Box h="3000px">
        <Background />
        <SideDescription />
        <Banner />
        <StartButton />
        <About />
        <SearchBy />
      </Box>
    </div>
  );
}
