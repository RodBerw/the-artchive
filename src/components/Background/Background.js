import { Box, Image } from "@chakra-ui/react";

export default function Background(){
    return(
        <div>
            <Image w="100%" h="100vh" position="fixed" objectFit="cover" src="/assets/home-background.jpg" zIndex="-99"/>
        </div>
    )
}