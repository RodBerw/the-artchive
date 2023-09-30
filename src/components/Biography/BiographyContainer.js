import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../Articles/Article";

export default function BiographyContainer(props){
    const [biography, setBiography] = useState([]);
    const [biographyId, setBiographyId] = useState(0);
    const url = "artistsBio.json";

    useEffect(() => {
        async function getBiography(){
            try{
                const resp = await axios.get(url)
                setBiography(resp.data.biographies[biographyId])
            }catch(error){
                console.error(error)
            }
        }    
        getBiography();
    }, [])

    return(
        <Box position="relative" w="80%" m="auto" h="1000px">
            <Flex position="absolute" w="100%" p="0 5% 0 5%" justifyContent="center"  bg="black" mt="50px">
                <Box w="30%" bgImg="linear-gradient(#00101B, #143544)">
                    1
                </Box>
                <Flex flex="1" flexDirection="column" pl="5%">
                    <Text textStyle="large" textAlign="center" p="20px 0 20px 0">{biography.name}</Text>
                    <Box position="relative">
                        <Text textStyle="basic" textAlign="justify" p="0 5% 0 5%" h="500px" overflowY="scroll" overflowX="hidden" style={{}}>{biography.text}</Text>
                        <Box pointerEvents="none" top="0" w="95%" h="100%" position="absolute" bgImg="linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 15%);">1</Box>
                    </Box>
                    <Text textStyle="large" m="20px 0 20px 0"> 
                        Avaiable works
                    </Text>
                    <Flex gap="1vw">
                        {biography.articlesId.map((articleId, i) => (
                            <Box>
                                <Article id={articleId}/>
                            </Box>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}