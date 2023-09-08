import { Box, Square, Flex } from "@chakra-ui/react";

export default function Category(props){
    return(
        <div>
            <Flex h="100%">
                <Square alignSelf={props.marginTop} size="22vw" bg="red">1</Square>
            </Flex>
        </div>
    )
}