import React, { useState, useEffect } from "react";
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
import Axios from "axios";

const host = process.env.REACT_APP_HOST;

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
      const res = await Axios.get(`${host}/api/shows`);
      setShow(res.data);
    } catch (err) {
      setError(err);
      return error;
    }
  };
  const getAllTickets = async () => {
    try {
      const res = await Axios.get(`${host}/api/tickets`);
      setCategory(res.data);
    } catch (err) {
      setError(err);
      return error;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.id === "lastname") {
      setLastname(e.target.value);
    } else if (e.target.id === "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.valus);
    } else if (e.target.id === "tel") {
      setTel(e.target.value);
    } else if (e.target.id === "birthday") {
      setBirthday(e.target.value);
    } else if (e.target.id === "shows") {
      setSelectShow(e.target.value);
    } else if (e.target.id === "category") {
      setSelectCategory(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${host}/api/clients`, {
        lastname,
        firstname,
        email,
        tel,
        birthday,
        ShowId: selectShow.id,
      });
      await Axios.post(`${host}/api/booking`, {
        lastname,
        firstname,
        email,
        tel,
        birthday,
        selectCategory,
        selectShow,
      });

      console.log(
        lastname,
        firstname,
        email,
        tel,
        birthday,
        selectCategory,
        selectShow
      );
      setSend(true);
      setLastname("");
      setFirstname("");
      setEmail("");
      setTel("");
      setBirthday("");
      setSelectShow("");
    } catch (err) {
      setError(err);
      return error;
    }
  };
  useEffect(() => {
    getAllShows();
    getAllTickets();
  }, []);

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Book your ticket !</ModalHeader>
        <Form onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                    onChange={handleChange}
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
                    value={tel}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col xs={{ size: "7", offset: "2" }}>
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
              <Col xs={{ size: "7", offset: "2" }}>
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
              <Col xs={{ size: "7", offset: "2" }}>
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
              <Col xs={{ size: "4", offset: "2" }}>
                <p>
                  <em>* : required field</em>
                </p>
              </Col>
            </Row>
            {send ? (
              <Row form>
                <Col xs={{ size: "6", offset: "3" }}>
                  <p>You are registered ! Thank you for your booking ! </p>
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
            <Button type="submit"> Book ! </Button>
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

export default Booking;
