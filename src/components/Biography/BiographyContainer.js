import { Box, Flex, Text } from "@chakra-ui/react";

export default function BiographyContainer(){
    return(
        <Box position="relative" w="80%" m="auto" h="1000px">
            <Flex position="absolute" w="100%" p="0 5% 0 5%" justifyContent="center"  bg="black" mt="50px">
                <Box w="30%" bgImg="linear-gradient(#00101B, #143544)">
                    1
                </Box>
                <Flex flex="1" flexDirection="column" pl="5%">
                    <Text textStyle="large" textAlign="center" p="20px 0 20px 0">Rembrandt</Text>
                    <Text position="relative" textStyle="basic" textAlign="justify" p="0 5% 0 5%" h="500px" overflowY="scroll" overflowX="hidden" style={{}}>Rembrandt van Rijn (1606-1669) was born in Leiden, the son of a miller. After finishing Latin School, his parents enrolled him at Leiden University. Rembrandt soon dropped out and became an apprentice painter under Jacob van Swanenburch in Leiden, and later Pieter Lastman in Amsterdam. Back in Leiden, he set up as an independent artist together with Jan Lievens. At this time, Rembrandt mainly painted biblical scenes in a precise style and with vibrant colours.<br/><br/>

                    In 1631, he moved to Amsterdam where he received numerous commissions for portraits. His many pupils included Ferdinand Bol, Govert Flinck and Carel Fabritius. In this period, Rembrandt develop a more powerful chiaroscuro, a looser brush and a greater sense of drama. He focused more on historical scenes, and made numerous etchings and drawings.<br/><br/>

                    In 1634, Rembrandt married Saskia Uylenburgh. They had a son, Titus, in 1641. Then a year later Saskia died. Later, in 1654, Rembrandt had a daughter with Hendrickje Stoffels. By now, he had accumulated huge debts and was forced to sell his house and property. He died in 1669 and was buried in Amsterdam's Westerkerk.
                    <Box top="0" w="100%" h="100%" position="absolute" bgImg="linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 15%);">1</Box>
                    </Text>
                    <Text textStyle="large" m="20px 0 20px 0"> 
                        Avaiable works
                    </Text>
                    <Flex gap="1vw">
                        <Flex flex="1" h="300px" bg="blue" flexDirection="column">1</Flex>
                        <Flex flex="1" h="300px" bg="blue" flexDirection="column">1</Flex>
                        <Flex flex="1" h="300px" bg="blue" flexDirection="column">1</Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}