import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Background from "../components/Background/Background";
import SideDescription from "../components/Details/SideDescription";
import ArtisitsContainer from "../components/Artists/ArtistsContainer";

export default function Home() {
  return (
    <div>
        <Background />
        <SideDescription text="ARTISTS"/>
        <ArtisitsContainer/>
    </div>
  );
}