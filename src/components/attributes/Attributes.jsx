import { Card, Container, Stack } from "react-bootstrap";
import AttributeField from "./attributeField/AttributeField";

export default function Attributes({ id, attributes }) {
  return (
    <Container>
      <Card>
        <Card.Body>
          <h5 className="d-flex justify-content-center mb-4">Attributes</h5>
          <Stack direction="vertical" gap={1}>
            {Object.keys(attributes).map((attr) => (
              <AttributeField
                id={id}
                key={`attr-${id}-${attr}`}
                name={attr}
                value={attributes[attr].value}
                modName={attributes[attr].modifier}
              />
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}
