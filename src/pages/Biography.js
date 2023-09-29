import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Background from "../components/Background/Background";
import SideDescription from "../components/Details/SideDescription";
import BiographyContainer from "../components/Biography/BiographyContainer";

export default function Bigraphy() {
    return (
      <div>
          <Background />
          <SideDescription text="BIOGRAPHY"/>
          <BiographyContainer/>
      </div>
    );
  }