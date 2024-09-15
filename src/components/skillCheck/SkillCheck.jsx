import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { SKILL_LIST } from "../../consts";
import { useState } from "react";

export default function SkillCheck() {
  const [formValues, setFormValue] = useState({ skill: undefined, dc: 0 });
  const [rolledNum, setRolledNum] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue((preValues) => ({ ...preValues, [name]: value }));
  };

  const handleRoll = (e) => {
    e.preventDefault();
    setRolledNum(Math.floor(Math.random() * 21));
    chckSkillResult();
  };

  const chckSkillResult = () => {
    setResult(rolledNum < parseInt(formValues.dc));
  };

  return (
    <Container>
      {rolledNum && (
        <>
          <Row>
            <div className="d-flex justify-content-center">
              Rolled Number: {rolledNum}
            </div>
          </Row>
          <Row>
            <div className="d-flex justify-content-center">
              Skill check: {result ? "Successful" : "Unsuccessful"}
            </div>
          </Row>
        </>
      )}
      <Row className="m-4">
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Select
                  onChange={handleChange}
                  name="skill"
                  value={formValues.skill}
                  aria-label="skill"
                >
                  <option>Skills</option>
                  {SKILL_LIST.map((skill) => (
                    <option key={skill.name} value={skill.name}>
                      {skill.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  type="number"
                  value={formValues.dc}
                  name="dc"
                  min={0}
                  max={20}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" onClick={handleRoll}>
                Roll
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
