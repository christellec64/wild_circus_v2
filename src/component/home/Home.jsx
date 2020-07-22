import React from "react";
import styles from "./Home.module.css";
import Performs from "./Performs/Performs";
import { Container, Row, Col } from "reactstrap";

function Home() {
  return (
    <div className={styles.homeCss}>
      <h1 className={styles.homeBanner}>
        Wild Circus <br />
        Go Wild For a While
      </h1>
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
              It's a pleasure to present you our Wild Circus Shows in Biarritz
              in Basque country (France) ! A wonderful region in South of
              France, famous for its beautiful landscapes, XXXXXXXXX Don't waste
              time ! Book right now !
            </p>
          </Col>
        </Row>
      </Container>
      <Performs />
    </div>
  );
}

export default Home;
