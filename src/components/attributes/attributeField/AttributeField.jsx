import { useContext } from "react";
import { Container, ListGroup, Stack, Col, Row, Button } from "react-bootstrap";
import { CharacterContext } from "../../../context";
import { skillModifierFunc } from "../../../UtilFunctions";
import { SKILL_POINTS_MODIFOER } from "../../../consts";

export default function AttributeField({ name, value, modName, id }) {
  const { characters, setCharacters } = useContext(CharacterContext);
  const validateAttr = (attributes) => {
    let total = Object.keys(attributes).reduce(
      (counter, key) => counter + attributes[key].value,
      0
    );
    if (total > 70) {
      alert("Your maximum alowed selection is 70!");
      return false;
    }
    return true;
  };

  const handleAction = (name, id, add = true) => {
    let character = characters.find((charact) => charact.id === id),
      attribute = character.attributes,
      skills = character.skills,
      updatedSkillModifier;

    if (add) {
      attribute[name].value++;
    } else {
      attribute[name].value--;
    }

    if (!validateAttr(attribute)) {
      return;
    }

    if (attribute[name].value < 10) {
      attribute[name].modifier =
        -1 * Math.floor((10 - attribute[name].value) / 2);
    } else {
      attribute[name].modifier = Math.floor((attribute[name].value - 10) / 2);
    }

    if (name === SKILL_POINTS_MODIFOER) {
      updatedSkillModifier = skillModifierFunc(attribute[name].modifier);
      if (updatedSkillModifier < 0) {
        updatedSkillModifier = 0;
      }
    }

    let updatedSkills = updateSkills(attribute, skills);
    updateCharacter(attribute, updatedSkills, updatedSkillModifier);
  };

  const updateCharacter = (attribute, updatedSkills, updatedSkillModifier) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id
          ? {
              ...character,
              skills: updatedSkills,
              attributes: attribute,
              skillPoints:
                updatedSkillModifier !== undefined
                  ? updatedSkillModifier
                  : character.skillPoints,
            }
          : character
      )
    );
  };

  const updateSkills = (attribute, skills) => {
    let updatedSkills = skills;
    for (let att in attribute) {
      let modifier = attribute[att].modifier;
      updatedSkills = updatedSkills.map((skill) => {
        if (skill.attributeModifier === att) {
          let newValue = modifier;
          skill.value = newValue;
          skill.modValue = modifier;
        }
        return skill;
      });
    }
    return updatedSkills;
  };

  return (
    <Container>
      <ListGroup.Item>
        <Stack direction="horizontal" gap={1}>
          <Col>
            <div>{`${name}: ${value} (Modifier: ${modName})`}</div>
          </Col>
          <Col>
            <Row>
              <Button
                onClick={() => handleAction(name, id)}
                variant="secondary"
                style={{
                  width: "30px",
                  borderRadius: "20px",
                  marginRight: "10px",
                }}
                size="sm"
              >
                {" + "}
              </Button>

              <Button
                onClick={() => handleAction(name, id, false)}
                variant="secondary"
                style={{ width: "30px", borderRadius: "20px" }}
                size="sm"
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
