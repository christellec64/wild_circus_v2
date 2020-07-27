import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "reactstrap";

import styles from "./Home.module.css";
import Performs from "./Performs/Performs";
import { API_URL } from "../../ApiUrl";

function Home() {
  const [show, setShow] = useState([]);
  const [error, setError] = useState("");

  const getShow = async () => {
    try {
      const res = await Axios.get(`${API_URL}/api/shows`);
      const orderedbyDate = res.data.sort((a, b) => {
        if (a.show_date < b.show_date) {
          return -1;
        } else if (a.show_date > b.show_date) {
          return 1;
        } else {
          return 0;
        }
      });
      const getNextShow = orderedbyDate.shift();
      setShow(getNextShow);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <div className={styles.homeCss}>
      <h1 className={styles.homeBanner}>
        Wild Circus <br />
        Go Wild For a While
      </h1>
      {error ? "" : ""}
      <Container>
        <Row>
          <Col>
            <h3>Beyond your dreams</h3>
            <p>
              Thank you for visiting! We cannot wait for you to plan some
              spectaculars evenings of family fun with our shows ! 2020 will be
              the year of renewal ! Come and revisit the magical memories of
              your childhood, while creating new ones with your own kids that
              will last alifetime.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>The Next Show</h3>
            <p>
              It's a pleasure to present you our <b> {show.title} </b> in{" "}
              <b>{show.localisation}</b> the <b>{show.show_date}</b> !
            </p>
            <p>Don't wait any longer ! Book right now !</p>
          </Col>
        </Row>
      </Container>
      <Performs />
    </div>
  );
}

export default Home;
