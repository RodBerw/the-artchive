import { Box, Flex, Text, Grid, useBreakpointValue } from "@chakra-ui/react";
import ArtistCard from "./ArtistCard";
import { Get } from "../../services/apiService";
import { useEffect, useState } from "react";

export default function ArtisitsContainer(){
    const [data, setData] = useState([]);
    const url = "./artistsDB.json"
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

    useEffect(() => {
        setData(Get(url))
        console.log(data)
    },[data]);

    return(
        <div>
            <Flex w="80%" bg="black" flexDirection="column" m="auto" zIndex="5">
                <Grid w="100%" p="5%" gap="1vw" flexWrap="wrap" gridTemplateColumns={variant}>
                    {data.map((artist,i) => (
                        <div>
                            <ArtistCard img={artist.img} date={artist.date} name={artist.name}/>
                        </div>
                    ))}
                </Grid>
            </Flex>
        </div>
    )
}