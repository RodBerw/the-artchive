import { Box, Image, Text, Flex, Grid} from "@chakra-ui/react";


export default function Banner(){
    return(
        <div>
            <Box>
                <Box w="100%" position="relative" zIndex="-1">
                    <Image position="absolute" objectFit="cover" w="100%" h={{base:"350px", md:"735px", xl:"735px"}} src="/assets/banner-background.jpg" alt="Banner"></Image>
                    <Flex w="100%" position="absolute">
                        <Box flex="1">
                            <Text>1</Text>
                        </Box>
                        <Box flex="1" h={{base:"350px", md:"735px", xl:"735px"}}>
                            <Grid margin="0 0 0 15vw" templateRows="1fr 1fr" h="100%">
                                <Flex flexDirection="column">
                                    <Text mt="10px" color="white" fontFamily="Imbue, serif" letterSpacing="wide" lineHeight="1em" fontSize={{base:"2.5em", md:"5em", xl:"7.5em"}}>ART<br/> COLECTION</Text>
                                    <Text flex="1" w="75%" color="white" fontSize={{base:"1em", md:"1.25em", xl:"1.5em"}} fontWeight="light" lineHeight="1.25em">LEARN FROM THE OLD MASTERS</Text>
                                </Flex>
                                <Flex justifyContent="right" textAlign="right" alignItems="flex-end">
                                    <Text textAlign="right" writing-mode="vertical-rl" mb="4%" mr="5%" w="75%" color="white" fontSize={{base:".5em", md:".75em", xl:"1em"}} letterSpacing="widest" lineHeight="1.25em">MADE BY RODOLFO BERWANGER</Text>
                                </Flex>
                            </Grid>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}