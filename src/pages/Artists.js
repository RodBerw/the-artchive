import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Background from "../components/Background/Background";
import SideDescription from "../components/Details/SideDescription";
import ArtisitsContainer from "../components/Artists/ArtistsContainer";

export default function Home() {
  return (
    <div>
      <Box h="3000px">
        <Background />
        <SideDescription />
        <ArtisitsContainer/>
      </Box>
    </div>
  );
}