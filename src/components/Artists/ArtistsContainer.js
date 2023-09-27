import { Box, Flex, Text, Grid, useBreakpointValue, Square, Center, Icon } from "@chakra-ui/react";
import ArtistCard from "./ArtistCard";
import { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';

export default function ArtisitsContainer(){
    const [artists, setArtists] = useState([]);
    const [plusIconRot, setPlusIconRot] = useState(0);
    const url = "artistsDB.json"
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
        async function getArtists(){
            try{
                const resp = await axios.get(url)
                setArtists(resp.data.artists)
            }catch(error){
                console.error(error)
            }
        }
        
        getArtists();
        
    },[]);
    
    function plusIconTabToggle() {
        setPlusIconRot(plusIconRot === 0 ? -90 : 0);
      }

    return(
        <div>
            <Flex w="80%" bg="black" flexDirection="column" m="auto" zIndex="5">
                <Grid w="100%" p="5%" gap="1vw" flexWrap="wrap" gridTemplateColumns={variant}>
                    {artists.map((artist,i) => (
                        <Box key={i}>
                            <ArtistCard img={artist.img} date={artist.date} name={artist.artist}/>
                        </Box>
                    ))}
                    <Square bgSize="100%" aspectRatio="1" bgColor="#00101B" bgImg="linear-gradient(#052c47, #00101B)">
                        <Center>
                            <Box w="100%" h="100%" onClick={{}} _hover={{ cursor: "pointer" } && plusIconTabToggle()}>
                                <Icon as={AddIcon} color="#094763" w="150px" h="150px" transition="transform .25s" transform={`rotate(${plusIconRot}deg)`}/>
                            </Box>
                        </Center>
                    </Square>
                </Grid>
            </Flex>
        </div>
    )
}