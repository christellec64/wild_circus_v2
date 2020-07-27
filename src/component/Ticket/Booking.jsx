import React, { useState, useEffect } from "react";
import {
  Modal,
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
import Axios from "axios";

import styles from "./Booking.module.css";
import { API_URL } from "../../ApiUrl";

function Booking({ setModal, toggle, modal }) {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [birthday, setBirthday] = useState("");
  const [show, setShow] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectShow, setSelectShow] = useState("");
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);

  const getAllShows = async () => {
    try {
      const res = await Axios.get(`${API_URL}/api/shows`);
      setShow(res.data);
    } catch (err) {
      setError(err);
    }
  };
  const getAllTickets = async () => {
    try {
      const res = await Axios.get(`${API_URL}/api/tickets`);
      setCategory(res.data);
    } catch (err) {
      setError(err);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.id === "lastname") {
      setLastname(e.target.value);
    } else if (e.target.id === "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "tel") {
      setTel(e.target.value);
    } else if (e.target.id === "birthday") {
      setBirthday(e.target.value);
    } else if (e.target.id === "shows") {
      setSelectShow(e.target.value);
    } else if (e.target.id === "category") {
      setSelectCategory(e.target.value);
    } else {
      return send;
    }
  };
  const handleSubmit = async () => {
    try {
      await Axios.post(`${API_URL}/api/booking`, {
        lastname,
        firstname,
        email,
        tel,
        birthday,
        selectCategory,
        selectShow,
      });
      setSend(true);
      setLastname("");
      setFirstname("");
      setEmail("");
      setTel("");
      setBirthday("");
      setSelectShow("");
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getAllShows();
    getAllTickets();
  }, []);

  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={styles.bookingModal}
        size="lg"
      >
        <h5>Book your ticket !</h5>
        {error ? "" : ""}
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row form>
              <Col xs={{ size: "4", offset: "1" }}>
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
              <Col xs={{ size: "4", offset: "1" }}>
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
              <Col xs={{ size: "9", offset: "1" }}>
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
              <Col xs={{ size: "9", offset: "1" }}>
                <FormGroup>
                  <Label for="tel"> Phone number* </Label>
                  <Input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="0600000000"
                    required
                    value={tel}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "9", offset: "1" }}>
                <FormGroup>
                  <Label for="birthday"> Your Birthday !*</Label>
                  <Input
                    type="date"
                    name="birthday"
                    id="birthday"
                    required
                    value={birthday}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "9", offset: "1" }}>
                <FormGroup>
                  <Label for="shows"> Select your show !*</Label>
                  <Input
                    type="select"
                    name="shows"
                    id="shows"
                    value={selectShow}
                    required
                    onChange={handleChange}
                  >
                    {show.map((show) => (
                      <option>{show.title}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "9", offset: "1" }}>
                <FormGroup>
                  <Label for="category"> Select your category !*</Label>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    required
                    value={selectCategory}
                    onChange={handleChange}
                  >
                    {category.map((show) => (
                      <option>{show.label}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "4", offset: "1" }}>
                <p>
                  <em>* : required field</em>
                </p>
              </Col>
            </Row>
            {/* {error ? (
              <Row form>
                <Col xs={{ size: "11", offset: "1" }}>
                  <p className="error">
                    Oh no! Something bad happened ! Try again please ...
                  </p>
                </Col>
              </Row>
            ) : (
              ""
            )}
            {send ? (
              <Row form>
                <Col xs={{ size: "11", offset: "1" }}>
                  <p className="success">
                    Thank you ! You are registered ! You will receive your
                    reservation by mail.
                  </p>
                </Col>
              </Row>
            ) : (
              ""
            )} */}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" className={styles.bookingSubmit}>
              Book !
            </Button>
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

export default Booking;
