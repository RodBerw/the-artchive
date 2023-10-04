import { Box, Flex, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../Articles/Article";
import { json, useNavigate, useParams } from "react-router-dom";

export default function BiographyContainer(props) {
  const [biography, setBiography] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "/artistsBio.json";
  const { biographyId } = useParams();

  useEffect(() => {
    async function getBiography() {
      try {
        const resp = await axios.get(url);
        setBiography(resp.data.biographies[biographyId]);
        setLoading(false);
    } catch (error) {
        console.error(error);
    }
}
    getBiography();
  }, [biographyId]);

  return (
    <Box position="relative" w="80%" m="auto" h="1000px">
      {loading ? (
        <Box>
          <Text textStyle="large">Loading...</Text>
        </Box>
      ) : (
        <Flex
          position="absolute"
          w="100%"
          p="0 5% 0 5%"
          justifyContent="center"
          bg="black"
          mt="50px"
        >
          <Box
            w="30%"
            transform="scaleY(1.15)"
            bgImg="linear-gradient(#143544, #00101B)"
          >
            <Flex
              alignItems="start"
              flexDirection="column"
              textAlign="left"
              p="10%"
              transform="scaleY(.85)"
            >
              <Image
                objectFit="cover"
                mt="-10%"
                w="100%"
                aspectRatio="1"
                alignSelf="center"
                boxShadow="10px 10px 10px #00000070"
                src={biography.picture}
                mb="20px"
              ></Image>
              <Text
                textStyle="detail"
                color="#C6C6C6"
                textAlign="center"
                alignSelf="center"
              >
                Full name
              </Text>
              <Text
                textStyle="basic"
                fontSize={{ base: ".5em", md: "1.25em", xl: "1.5em" }}
                textAlign="center"
                alignSelf="center"
                w="80%"
                mb="10px"
              >
                {biography.fullName}
              </Text>
              <Text textStyle="littleDetail">Born</Text>
              <Text textStyle="basic" mb="10px">
                {biography.bornDate}
                <br />
                {biography.bornLocation}
              </Text>
              <Text textStyle="littleDetail">Died</Text>
              <Text textStyle="basic" mb="10px">
                {biography.deathDate}
                <br />
                {biography.deathLocation}
              </Text>
              <Text textStyle="littleDetail">Education</Text>
              <Text textStyle="basic" mb="10px">
                {biography.education}
                <br />
                {biography.educationLocation}
              </Text>
              <Text textStyle="littleDetail">Movement</Text>
              {biography.movement?.map((m, i) => (
                <Text textStyle="basic" key={i}>
                  {m}
                </Text>
              ))}
            </Flex>
          </Box>
          <Flex flex="1" flexDirection="column" pl="5%">
            <Text textStyle="large" textAlign="center" p="20px 0 20px 0">
              {biography.name}
            </Text>
            <Box position="relative">
              <Text
                textStyle="basic"
                textAlign="justify"
                p="0 5% 0 5%"
                h="500px"
                overflowY="scroll"
                overflowX="hidden"
                whiteSpace="pre-line"
                pb="50px"
              >
                {biography.text}
              </Text>
              <Box
                pointerEvents="none"
                top="0"
                w="95%"
                h="100%"
                position="absolute"
                bgImg="linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 15%);"
              >
                1
              </Box>
            </Box>
            <Text textStyle="large" m="20px 0 20px 0">
              Available works
            </Text>
            <Flex gap="1vw">
              {/* {biography.articlesId.map((articleId, i) => (
                            <Box>
                                <Article id={articleId}/>
                            </Box>
                        ))} */}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
