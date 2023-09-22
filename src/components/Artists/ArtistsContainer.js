import { Box, Flex, Text, Grid, useBreakpointValue } from "@chakra-ui/react";
import ArtistCard from "./ArtistCard";

export default function ArtisitsContainer(){
    const variant = useBreakpointValue(
        {
            base:"repeat(auto-fill, minmax(150px,1fr))",
            md:"repeat(auto-fill, minmax(200px,1fr))",
            xl:"repeat(auto-fill, minmax(15vw,1fr))"
        },
        {
            fallback:"md",
        },
    )
    return(
        <div>
            <Flex w="80%" bg="black" flexDirection="column" m="auto" zIndex="5">
                <Grid w="100%" p="5%" gap="1vw" flexWrap="wrap" gridTemplateColumns={variant}>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                </Grid>
            </Flex>
        </div>
    )
}