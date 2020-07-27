import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";

import styles from "./Contact.module.css";
import { API_URL } from "../../ApiUrl";

function ContactForm() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.id === "lastname") {
      setLastname(e.target.value);
    } else if (e.target.id === "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.valus);
    } else if (e.target.id === "subject") {
      setSubject(e.target.value);
    } else if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${API_URL}/api/contact`, {
        lastname,
        firstname,
        email,
        subject,
        message,
      });
      console.log(lastname, firstname, email, subject, message);
      setSend(true);
      setLastname("");
      setFirstname("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(err);
      return error;
    }
  };
  return (
    <>
      <h3>Send us a message</h3>
      <Form onSubmit={handleSubmit} className={styles.contactFormCss}>
        <Row form>
          <Col xs={{ size: "2", offset: "3" }}>
            <Label for="lastname"> Lastname* </Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="S. Peace"
              required
              value={lastname}
              onChange={handleChange}
            />
          </Col>
          <Col xs={{ size: "2", offset: "1" }}>
            <Label for="firstname"> Firstname* </Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Teresa"
              value={firstname}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row form>
          <Col xs={{ size: "5", offset: "3" }}>
            <FormGroup>
              <Label for="email"> Email* </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="contact@wildcircus.com"
                required
                value={email}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs={{ size: "5", offset: "3" }}>
            <FormGroup>
              <Label for="subject"> Subject* </Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Show Infos"
                required
                value={subject}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs={{ size: "5", offset: "3" }}>
            <FormGroup>
              <Label for="message"> Your message*</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Your message"
                required
                value={message}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs={{ size: "2", offset: "3" }}>
            <p>
              <em>* : required field</em>
            </p>
          </Col>
        </Row>
        {error ? (
          <Row form>
            <Col xs={{ size: "9", offset: "3" }}>
              <p className="error">
                Oh no ! Something bad happened ! Try again please ...
              </p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {send ? (
          <Row form>
            <Col xs={{ size: "9", offset: "3" }}>
              <p className="success">Your message has been sent !</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        <Row form>
          <Col xs={{ size: "2", offset: "5" }}>
            <Button type="submit"> Send ! </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ContactForm;
