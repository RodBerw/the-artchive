import About from "../components/About/About";
import Background from "../components/Background/Background";
import Banner from "../components/Banner/Banner";
import StartButton from "../components/Banner/StartButton";
import SideDescription from "../components/Details/SideDescription";
import SearchBy from "../components/SearchBy/SearchBy";

export default function Home() {
  return (
    <div>
        <Background />
        <SideDescription text="HOME"/>
        <Banner />
        <StartButton />
        <About />
        <SearchBy />
    </div>
  );
}
