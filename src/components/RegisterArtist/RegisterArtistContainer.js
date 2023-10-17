import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Square,
} from "@chakra-ui/react";
import { Upload } from "@mui/icons-material";
import UploadIcon from "@mui/icons-material/Upload";
import { useState } from "react";

export default function RegisterArtistContainter() {
  const [picture, setPicture] = useState();

  return (
    <Box position="relative" w="80%" m="auto" h="1000px">
      <Flex w="100%" p="5%" justifyContent="center" bg="black" mt="50px">
        <Flex
          w="25%"
          flexDirection="column"
          alignItems="center"
          color="#717273"
        >
          <Image
            w="18vw"
            h="18vw"
            objectFit="cover"
            src={picture == null ? "/assets/artist-default.jpg" : picture}
          />
          <InputGroup>
            <Input
              mt="2.5%"
              border="none"
              w="100%"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setPicture(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </InputGroup>
          {/* <Flex
            bg="#0E0E0E"
            h="50px"
            alignItems="center"
            p="0 5% 0 5%"
            color="#717273"
          >
            <Text w="90%">File.png</Text>
          </Flex> */}
        </Flex>
        <Flex flex="1">1</Flex>
      </Flex>
    </Box>
  );
}
