import { Card, Col, Container, Row } from "react-bootstrap";
import SkillCheck from "../skillCheck/SkillCheck";
import Attributes from "../attributes/Attributes";
import CharacterClasses from "../characterClasses/CharacterClasses";
import Skills from "../skills/Skills";

export default function Character({ character }) {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <Card>
            <Row>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  {`Character: ${character.name}`}
                </Card.Title>
              </Card.Body>
            </Row>
            <Row>
              <Col className="mb-2">
                <SkillCheck />
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Attributes
                  id={character.id}
                  attributes={character.attributes}
                />
              </Col>
              <Col className="mb-2">
                <CharacterClasses id={character.id} />
              </Col>
              <Col className="mb-2">
                <Skills
                  name={character.id}
                  objSkills={character.skills}
                  avPoints={"10"}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
