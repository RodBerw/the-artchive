import ArtisitsContainer from "../components/Artists/ArtistsContainer";
import Background from "../components/Background/Background";
import SideDescription from "../components/Details/SideDescription";

export default function Home() {
  return (
    <div>
        <Background />
        <SideDescription text="ARTISTS"/>
        <ArtisitsContainer/>
    </div>
  );
}