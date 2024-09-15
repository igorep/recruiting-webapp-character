import { useContext } from "react";
import { CharacterContext } from "../../context";
import { Card, Container, Stack } from "react-bootstrap";
import SkillField from "./skillsField/SkillsField";

export default function Skills({ name }) {
  const { characters } = useContext(CharacterContext);
  const characterData = characters.find((character) => name === character.id);
  let skills = characterData.skills;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Stack direction="vertical" gap={1}>
            <h5 className="d-flex justify-content-center">Skills</h5>
            <div className="d-flex justify-content-center">
              Total skill points available: {characterData.skillPoints}
            </div>
            {skills &&
              skills.map((skill, index) => {
                return (
                  <SkillField
                    key={index}
                    SkillName={skill.name}
                    value={skill.value}
                    modName={skill.attributeModifier}
                    modValue={skill.modValue}
                    characterData={characterData}
                  />
                );
              })}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}
