import React from "react";
import styles from "./Performs.module.css";
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
import laugh from "../../img/Laugh.jpg";
import dream from "../../img/Dream.jpg";
import marvel from "../../img/Marvel.jpg";

const performs = [
  {
    title: "Laugh",
    src: laugh,
    content:
      "As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.",
  },
  {
    title: "Dream",
    src: dream,
    content:
      "Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.",
    height: "325px",
  },
  {
    title: "Marvel",
    src: marvel,
    content:
      "Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.",
  },
];
function Performs() {
  return (
    <div className={styles.performsCss}>
      <h2 className={styles.performsTitle}>Performances</h2>
      <CardGroup className={styles.cardGroupCss}>
        {performs.map((item) => {
          return (
            <Card className={styles.cardCss}>
              <CardBody className={styles.cardCss}>
                <CardTitle className={styles.cardCss}>
                  <h3>{item.title}</h3>
                </CardTitle>
                <CardImg
                  className={styles.cardCss}
                  src={item.src}
                  alt={item.title}
                  height={item.height}
                />
                <CardText className={styles.cardCss}>{item.content}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
}

export default Performs;
