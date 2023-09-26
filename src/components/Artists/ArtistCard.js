import { Box, Square, Flex, Text, Grid } from "@chakra-ui/react";

export default function ArtistCard(props){
    return(
            <Square bgImg={props.img} bgSize="100%" aspectRatio="1">
                <Flex w="100%" h="100%" flexDirection="column" p="5%" justifyContent="end">
                    <Text mt="80%" textStyle="detail">{props.date}</Text>
                    <Text textStyle="basic">{props.name}</Text>
                </Flex>
            </Square>
    )
}