import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <hr />
      <footer className={styles.footerCss}>
        <p>
          Wild Circus made with &#9829; by {""}
          <a href="https://www.linkedin.com/christelle-conrozier/">
            Christelle CONROZIER
          </a>
          {""} le 22.07.2020
        </p>
        <a
          href="https://github.com/christellec64"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://facebook.com/Christelleconrozier"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </footer>
    </>
  );
}

export default Footer;
