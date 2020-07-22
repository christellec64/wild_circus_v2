import React from "react";
import { Row, Col } from "reactstrap";

import BreadCrumb from "./BreadCrumb";
import styles from "./About.module.css";
import commitment from "../img/commitment.jpg";

function Commitment() {
  return (
    <div className={styles.aboutCss}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <BreadCrumb />
      <h3>The Wild Commitment</h3>
      <Row className={styles.rowFamily}>
        <Col xs="3.5">
          <img
            src={commitment}
            alt="commitment"
            className={styles.imgHistory}
            height="90%"
          />
        </Col>
        <Col xs="7">
          <p>
            Wild Circus is <b>100%</b> committed to the exceptional care and
            ethical treatment of all our animals. We believe in relationships
            between animals and humans based on{" "}
            <b>respect, trust and affection.</b> <br />
            Our training methods are based on strengthening in the form of food
            rewards and praise. There is absolutely{" "}
            <b>no tolerance for verbal or physical abuse</b>, food or water
            deprivation of our animals. We strongly oppose any form of cruelty
            or mistreatment of any kind of animal.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Commitment;
