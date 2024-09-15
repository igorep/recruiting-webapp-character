import { useContext } from "react";
import { CharacterContext } from "../../../context";
import { Container, ListGroup, Stack, Col, Row, Button } from "react-bootstrap";

export default function SkillField({
  SkillName,
  value,
  modName,
  modValue,
  characterData,
}) {
  const { setCharacters } = useContext(CharacterContext);

  const handleAction = (characterData, SkillName, add = true) => {
    const updatedSkillPoints = add
      ? characterData.skillPoints - 1
      : characterData.skillPoints + 1;
    if (updatedSkillPoints < 0) return;
    const skills = characterData.skills.map((skill) => {
      if (skill.name === SkillName) {
        return add
          ? { ...skill, value: skill.value + 1 }
          : { ...skill, value: skill.value - 1 };
      }
      return skill;
    });
    updateCharacter(characterData.id, skills, updatedSkillPoints);
  };

  const updateCharacter = (id, updatedSkills, updatedSkillModifier) => {
    console.log("skills", updatedSkills);
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id
          ? {
              ...character,
              skills: updatedSkills,
              skillPoints:
                updatedSkillModifier !== undefined
                  ? updatedSkillModifier
                  : character.skillPoints,
            }
          : character
      )
    );
  };

  return (
    <Container>
      <ListGroup.Item>
        <Stack direction="horizontal" gap={1}>
          <Col>
            <div>{`${SkillName}: ${value} (Modifier: ${modName}): ${modValue}`}</div>
          </Col>
          <Col>
            <Row>
              <Button
                variant="secondary"
                style={{
                  width: "30px",
                  borderRadius: "20px",
                  marginRight: "10px",
                }}
                onClick={() => handleAction(characterData, SkillName)}
                size="sm"
              >
                {" + "}
              </Button>
              <Button
                variant="secondary"
                style={{ width: "30px", borderRadius: "20px" }}
                size="sm"
                onClick={() => handleAction(characterData, SkillName, false)}
              >
                {" - "}
              </Button>
            </Row>
          </Col>
        </Stack>
      </ListGroup.Item>
    </Container>
  );
}
