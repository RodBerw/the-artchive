import { Box, Image } from "@chakra-ui/react";

export default function Background(){
    return(
        <div>
            <Image filter="brightness(50%)" w="100%" h="100vh" position="fixed" objectFit="cover" src="/assets/home-background.jpg" zIndex="-99"/>
        </div>
    )
}