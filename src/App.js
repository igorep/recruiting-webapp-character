import "./App.css";
import { DEFAULT_ATTR, SKILL_LIST } from "./consts.js";
import { Button, Container, Row, Col } from "react-bootstrap";
import { CharacterContext } from "./context.jsx";
import { v4 } from "uuid";
import { skillModifierFunc } from "./UtilFunctions.jsx";
import Character from "./components/character/Character.jsx";
import { useContext } from "react";

function App() {
  const { characters, setCharacters } = useContext(CharacterContext);

  const clearAll = () => {
    setCharacters([]);
  };

  const createNew = () => {
    const skillsCopy = structuredClone(SKILL_LIST),
      attrCopy = structuredClone(DEFAULT_ATTR);
    let character = {
      id: v4(),
      name: characters.length,
      skills: skillsCopy,
      attributes: attrCopy,
      skillPoints: skillModifierFunc(DEFAULT_ATTR.Intelligence.modifier),
    };
    setCharacters((prevData) => [...prevData, character]);
  };

  const handleSave = () => {
    // create a post request to save characters
  };

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col className="d-flex justify-content-center">
            <Button variant="primary" onClick={createNew}>
              Add New Character
            </Button>{" "}
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="danger" onClick={clearAll}>
              Reset All Characters
            </Button>{" "}
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleSave}>
              Save All Characters
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      {Object.keys(characters).map((key) => {
        return (
          <Character key={characters[key].id} character={characters[key]} />
        );
      })}
    </>
  );
}

export default App;
