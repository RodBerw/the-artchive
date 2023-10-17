import Background from "../components/Background/Background";
import SideDescription from "../components/Details/SideDescription";
import RegisterArtistContainter from "../components/RegisterArtist/RegisterArtistContainer";

export default function RegisterArtist() {
  return (
    <div>
      <Background />
      <SideDescription text="REGISTER" />
      <RegisterArtistContainter />
    </div>
  );
}
