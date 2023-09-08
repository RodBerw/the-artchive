import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Banner from "../components/Banner/Banner";
import StartButton from "../components/Banner/StartButton";
import Background from "../components/Background/Background";
import SearchBy from "../components/SearchBy/SearchBy";

export default function Home() {
  return (
    <div>
      <Box h="3000px">
        <Background/>
        <Banner />
        <StartButton/>
        <SearchBy/>
      </Box>
    </div>
  );
}
