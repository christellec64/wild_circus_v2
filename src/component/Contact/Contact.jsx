import React from "react";
import { Row, Col } from "reactstrap";

import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className={styles.contactCss}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <h3>Where to find us</h3>
      <Row className={styles.contactRow}>
        <Col xs="3" className={styles.contactColAddress}>
          <h4>Address</h4>
          <p className={styles.contactPwcs}>Wild Circus</p>
          <p>
            Buena Vista & Haight Street <br />
            San Francisco, CA 94117 <br />
            USA
          </p>
        </Col>
        <Col xs="2" className={styles.contactCol}>
          <h4>Phone Number</h4>
          <p>928 - 871 - 9443</p>
          <h4>Email</h4>
          <a
            href="mailto:contact@wildcircus.com"
            className={styles.contactEmail}
          >
            contact@wildcircus.com
          </a>
        </Col>
        <Col xs="7" className={styles.contactCol}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12615.691834880672!2d-122.4414145!3d37.7684046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c605166dd4bdc40!2sBuena%20Vista%20Park!5e0!3m2!1sfr!2sfr!4v1568721284103!5m2!1sfr!2sfr"
            allowfullscreen="true"
            height="100%"
            width="95%"
            title="WildCircusMap"
          />
        </Col>
      </Row>
      <hr />
      <ContactForm />
    </div>
  );
}

export default Contact;
