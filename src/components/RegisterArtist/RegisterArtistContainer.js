import { Box, Flex, Icon, Image, Text, Grid } from "@chakra-ui/react";
import UploadIcon from "@mui/icons-material/Upload";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

export default function RegisterArtistContainter() {
  const [picture, setPicture] = useState(null);

  return (
    <Box position="relative" w="80%" m="auto" h="1000px">
      <Grid w="100%" p="5%" justifyContent="center" bg="black" mt="50px" templateColumns={{base:"1fr", md:"1fr 3fr", xl:"1fr 3fr"}}>
        <Flex
          flexDirection="column"
          alignItems="start"
          m={{base:"auto", md:"0"}}
          color="#717273"
          w={{base:"50%", md:"100%"}}
          mb="15px"
        >
          <Flex position="relative" flexDirection="column" w="100%">
            <Image
              objectFit="cover"
              w="100%"
              aspectRatio="1"
              src={
                picture == null
                  ? "/assets/artist-default.jpg"
                  : URL.createObjectURL(picture)
              }
            />
            {picture && (
              <Text
                bottom="0"
                position="absolute"
                w="100%"
                textAlign="center"
                color="white"
                bg="black"
                p="5px"
                opacity="75%"
              >
                {picture.name}
              </Text>
            )}
          </Flex>
          <label
            style={{
              display: "flex",
              justifyContent: "center",
              verticalAlign: "center",
              paddingTop: "12.5px",
              width: "100%",
              height: "50px",
              background: "#0E0E0E",
              color: "#717273",
              cursor: "pointer",
            }}
          >
            <input
              name="file"
              type="file"
              accept="image/*"
              placeholder="arquivo"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setPicture(e.target.files[0]);
                }
              }}
            />
            <Icon as={UploadIcon} />
            UPLOAD
          </label>
        </Flex>
        <Flex flex="1">
          <RegisterForm />
        </Flex>
      </Grid>
    </Box>
  );
}
