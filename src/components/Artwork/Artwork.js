import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Artwork(props) {
  const [infoOpacity, setInfoOpacity] = useState(0);

  return (
    <Box
      onMouseEnter={() => {
        setInfoOpacity(100);
      }}
      onMouseLeave={() => {
        setInfoOpacity(0);
      }}
    >
      <Image
        w="100%"
        objectFit="cover"
        position="relative"
        src={URL.createObjectURL(props.picture)}
      >
        <Flex
          flexDirection="column"
          position="absolute"
          bottom="0"
          opacity={infoOpacity}
          transition="opacity .25s"
        >
          <Text textStyle="detail">
            {props.infos.artist} {props.infos.year}
          </Text>
          <Text textStyle="basic">{props.infos.painting}</Text>
        </Flex>
      </Image>
    </Box>
  );
}
