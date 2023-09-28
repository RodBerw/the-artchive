import { Box, Flex, Text, Grid, useBreakpointValue, Square, Center, Icon } from "@chakra-ui/react";
import ArtistCard from "./ArtistCard";
import { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';

export default function ArtisitsContainer(){
    const [artists, setArtists] = useState([]);
    const [plusIconSize, setPlusIconSize] = useState(1);
    const [opacity, setOpacity] = useState(100);
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
    
    function addTabToggle() {
        setPlusIconSize(plusIconSize === 1 ? 1.1 : 1);
        setOpacity(opacity === 100 ? 0 : 100);
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
                    <Square bgSize="100%" aspectRatio="1">
                        <Center position="relative" w="100%" h="100%" onClick={{}} onMouseEnter={() => addTabToggle()} onMouseLeave={() => addTabToggle()} _hover={{ cursor: "pointer" }}>
                            <Icon zIndex="2" as={AddIcon} color="#133749" w="150px" h="150px" transition="transform .25s" transform={`scale(${plusIconSize});`}/>
                            <Flex w="100%" h="100%" position="absolute">
                                <Square zIndex="1" position="absolute" size="100%" bgColor="#00070b" transition="opacity .25s" bgImg="linear-gradient(#00070b, #0a2031)" opacity={`${opacity}%`}></Square>
                                <Square position="absolute" size="100%" bgColor="#00070b" bgImg="linear-gradient(#00070b, #0e2d45)"></Square>
                            </Flex>
                        </Center>
                    </Square>
                </Grid>
            </Flex>
        </div>
    )
}
