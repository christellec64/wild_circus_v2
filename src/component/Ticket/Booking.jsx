import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Row,
  Label,
  Input,
  Col,
  FormGroup,
} from "reactstrap";

function Booking({ setModal, toggle, modal }) {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Book your ticket !</ModalHeader>
        <Form onSubmit>
          <ModalBody>
            <Row form>
              <Col xs={{ size: "3", offset: "2" }}>
                <Label for="lastname"> Lastname* </Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="S. Peace"
                  required
                  value={lastname}
                  onChange
                />
              </Col>
              <Col xs={{ size: "3", offset: "1" }}>
                <Label for="firstname"> Firstname* </Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Teresa"
                  value={firstname}
                  onChange
                  required
                />
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "7", offset: "2" }}>
                <FormGroup>
                  <Label for="email"> Email* </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contact@wildcircus.com"
                    required
                    value={email}
                    onChange
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "7", offset: "2" }}>
                <FormGroup>
                  <Label for="tel"> Phone number* </Label>
                  <Input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="0600000000"
                    required
                    value
                    onChange
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "7", offset: "2" }}>
                <FormGroup>
                  <Label for="birthday"> Your Birthday !</Label>
                  <Input
                    type="date"
                    name="birthday"
                    id="birthday"
                    required
                    value
                    onChange
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "7", offset: "2" }}>
                <FormGroup>
                  <Label for="shows"> Select your show !</Label>
                  <Input
                    type="select"
                    name="shows"
                    id="shows"
                    required
                    onChange
                  >
                    <option>Biarritz Shows</option>
                    <option>Bayone shows</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "7", offset: "2" }}>
                <FormGroup>
                  <Label for="category"> Select your category</Label>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    required
                    onChange
                  >
                    <option>Adult</option>
                    <option>Child</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "4", offset: "3" }}>
                <p>
                  <em>* : required field</em>
                </p>
              </Col>
            </Row>
            {send ? (
              <Row form>
                <Col xs={{ size: "6", offset: "3" }}>
                  <p>Your message has been sent !</p>
                </Col>
              </Row>
            ) : (
              ""
            )}
            {error ? (
              <Row form>
                <Col xs={{ size: "6", offset: "3" }}>
                  <p>Something bad happened ! Try again please ...</p>
                </Col>
              </Row>
            ) : (
              ""
            )}
          </ModalBody>
          <ModalFooter>
            <Button type="submit"> Send ! </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

export default Booking;
