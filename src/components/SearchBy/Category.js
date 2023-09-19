import { Box, Square, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Category(props){
    const [yOffset, setYOffset] = useState("0vw");
    const [imgZoom, setImgZoom] = useState(0);
    
    return(
        <div>
            <Flex h="100%">
                <Square position="relative" alignSelf={props.marginTop} size="22vw" minW="200px" minH="200px" onMouseEnter={() => {setYOffset("-1vw"); setImgZoom(10)}} onMouseLeave={() => {setYOffset("0vw"); setImgZoom(0)}} _hover={{cursor: "pointer"}}>
                    <Box w="100%" h="100%" objectFit="cover" bgPosition="center" bgSize={`${100 + imgZoom}%`} bgImage={`/assets/${props.img}`} transition="background-size .5s">
                        <Box w="100%" h="100%" backdropFilter="blur(2px) brightness(80%)"></Box>
                    </Box>
                    <Text textAlign="center" textStyle="large" fontWeight="100" position="absolute" transition="transform .5s" transform= {`translateY(${yOffset})`}>{props.text}</Text>
                </Square>
            </Flex>
        </div>
    )
}