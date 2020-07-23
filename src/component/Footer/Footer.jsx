import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <hr />
      <footer className={styles.footerCss}>
        <p>
          Wild Circus made with &#9829; by {""}
          <a
            href="https://github.com/christellec64"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christelle CONROZIER
          </a>
          {""} le 22.07.2020
        </p>
        <a
          href="https://github.com/WildCodeSchool"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
        >
          Github
        </a>
        <a
          href="https://facebook.com/WildCodeSchool"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
        >
          Facebook
        </a>
      </footer>
    </>
  );
}

export default Footer;
