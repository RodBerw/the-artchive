import { Box, Image, Text } from "@chakra-ui/react";


export default function Banner(){
    return(
        <div>
            <Box>
                <Box w="100%" position="relative" zIndex="-1">
                    <Image position="absolute" objectFit="cover" w="100%" h="735px" src="/assets/banner-background.jpg" alt="Banner"></Image>
                    <Box position="absolute" margin="10px 0 0 70%" display="flex" flexDirection="column">
                        <Text color="white" fontFamily="Imbue, serif" letterSpacing="wide" lineHeight="1em" fontSize={{base:"2.5em", md:"5em", xl:"7.5em"}}>ART<br/> COLECTION</Text>
                        <Text w="75%" color="white" fontSize={{base:"1em", md:"1.25em", xl:"1.5em"}} fontWeight="light" lineHeight="1.25em">LEARN FROM THE OLD MASTERS</Text>
                        <Text mt="380px" ml="40%" w="75%" color="white" fontSize={{base:".5em", md:".75em", xl:"1em"}} letterSpacing="widest" lineHeight="1.25em">MADE BY RODOLFO BERWANGER</Text>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}