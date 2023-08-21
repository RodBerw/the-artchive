import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Container fluid className="header-container">
        <Row>
          <Col></Col>
          <Col>1</Col>
          <Col>1</Col>
        </Row>
      </Container>
    </div>
  );
}
