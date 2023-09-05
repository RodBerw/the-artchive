import { Box, transition } from "@chakra-ui/react";

export default function Menu(props){
    return(
        <div>
            <Box display="flex" justifyContent="right">
                <Box  w="20%" height="100vh" bg="#0B1C24" zIndex="3" transform={`translate(${props.menuXPos}%)`} transition="transform .25s">
                    1
                </Box>
            </Box>
        </div>
    )
}