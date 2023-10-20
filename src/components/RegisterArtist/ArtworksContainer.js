import { Flex, Icon, Input, Text, Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Artwork from "../Artwork/Artwork";

export default function ArtworksContainer() {
  const [artworks, setArtwoks] = useState([]);
  const url = "http://localhost:3001/api/artworks";

  useEffect(() => {
    async function GetArworks() {
      try {
        const resp = await axios.get(url);
        setArtwoks(resp.data);
      } catch (error) {
        console.error(error);
      }
    }
  });

  retunr(
    <Grid templateColumns="1fr 1fr 1fr">
      {artworks.map((artwork, i) => (
        <Artwork
          key={i}
          infos={{
            painting: artwork.painting,
            artist: artwork.artist,
            year: artwork.year,
            picture: artwork.picture,
          }}
        />
      ))}
    </Grid>
  );
}
