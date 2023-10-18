import Background from "../components/Background/Background";
import BiographyContainer from "../components/Biography/BiographyContainer";
import SideDescription from "../components/Details/SideDescription";

export default function Bigraphy() {
    return (
      <div>
          <Background />
          <SideDescription text="BIOGRAPHY"/>
          <BiographyContainer/>
      </div>
    );
  }