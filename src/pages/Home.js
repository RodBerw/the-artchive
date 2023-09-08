import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Banner from "../components/Banner/Banner";
import StartButton from "../components/Banner/StartButton";
export default function Home() {
  return (
    <div>
      <Box>
        <Banner />
        <StartButton />
        <Box bg="red" w="100%" h="500px">
          1
        </Box>
      </Box>
    </div>
  );
}
