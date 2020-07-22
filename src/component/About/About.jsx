import React from "react";

import BreadCrumb from "./BreadCrumb";
import creator from "../img/Creator.jpg";
import styles from "./About.module.css";
import { Row, Col } from "reactstrap";

function AboutUs() {
  return (
    <div className={styles.aboutCss}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <BreadCrumb />
      <h3>The Wild Circus History</h3>
      <Row className={styles.rowHistory}>
        <Col xs="3.5" className={styles.rowHistory}>
          <img
            src={creator}
            alt="creator"
            className={styles.imgHistory}
            height="90%"
          />
        </Col>
        <Col xs="8" className={styles.rowHistory}>
          <h4>Creation</h4>
          <p>
            Created in California in 1979 by Teresa S. Peace, a specialist in
            equestrian art, Wild Circus began its performances in San Francisco.
            It was very soon a great success. And it soon spread its name
            throughout California. The Wild Circus has been around for 60 years
            and has made Buena Park (San Francisco, CA) its headquarters.
          </p>
          <h4>An Unfortunate Event</h4>
          <p>
            In 2009, if public success was to come, the same cannot be said of
            Teresa S.Peace. As the manager and “mother” of the Wild Circus, she
            had to stop her equestrian performances for two long years, which
            has weakened the balance of the team and the circus finances.
          </p>
          <h4>2010, a year of renewal</h4>
          <p>
            In 2010, it was his son, Michael J.Peace, who decided to take over
            the circus reins with his mother's help in order to regain the
            success of yesteryear and restore the unfailing bond that binds Wild
            Circus to its audience. In a few years, he has managed to make Wild
            Circus one of the best circuses in the World. Today, Wild Circus is
            a reference in the circus world and thanks to you it won't stop !
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
