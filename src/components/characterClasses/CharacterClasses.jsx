import { useContext } from "react";
import { Accordion, Container, Stack } from "react-bootstrap";
import { CharacterContext } from "../../context";
import { CLASS_LIST } from "../../consts";
import "./CharacterClasses.css";

export default function CharacterClasses({ id }) {
  const { characters } = useContext(CharacterContext);

  const isEligible = (key) => {
    let criteria = CLASS_LIST[key];
    let characterAtt = characters.find((data) => data.id === id).attributes;
    for (let att in criteria) {
      if (criteria[att] > characterAtt[att].value) {
        return false;
      }
    }
    return true;
  };

  return (
    <Container>
      <Stack direction="vertical" gap={1}>
        {Object.keys(CLASS_LIST).map((key) => {
          let data = CLASS_LIST[key];
          return (
            <Accordion key={key}>
              <Accordion.Item
                eventKey={key}
                className={isEligible(key) ? "eligible" : null}
              >
                <Accordion.Header>{key}</Accordion.Header>
                <Accordion.Body>
                  <Stack direction="vertical" gap={1}>
                    {Object.keys(data).map((skill) => {
                      return (
                        <div key={`${key}-${skill}`}>
                          {skill}: {data[skill]}
                        </div>
                      );
                    })}
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </Stack>
    </Container>
  );
}
