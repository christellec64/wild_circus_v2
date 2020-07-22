import React from "react";
import BreadCrumb from "./BreadCrumb";
import { Row, Col } from "reactstrap";

import styles from "./About.module.css";
import tamer from "../img/tamer.jpg";
import clown from "../img/Clown.jpg";
import acrobats from "../img/Acrobats.jpg";
import equestrian from "../img/Equestrian.jpg";
import airacrobate from "../img/Airacrobate.jpg";
import trapezist from "../img/Trapezist.jpg";
import circusTamer from "../img/CircusTamer.jpg";
import BofR from "../img/Bandofrush.jpg";

const family = [
  {
    name: "Kristian Sumiala",
    age1: 48,
    age2: "",
    text:
      'With parents in charge of a zoo, Kristian has always lived with animals. He specialized in tiger taming, a species he has admired since childhood. He will show you a breathtaking performance with his "pets" !',
    comment:
      "The most dangerous thing in a tamer job it's not tigers but a proper use of whips : there must stimulate tigers without scaring them.",
    srcImg: tamer,
  },
  {
    name: "Jasper and Sheila Crouch",
    age1: "28 and",
    age2: 26,
    text:
      "Jasper and Sheila are brother and sister and they are our most famous acrobats’ duo. They’ve won several awards such as : Special Jury Award at the American Youth Circus Festival in San Diego, Awarded at the Australian Circus Festival in Melbourne, Gold Circus at the Bordeaux National Circus Festival.",
    comment:
      "When we perform, we trust each other. We've always been together. We are not twins but it feels like !",
    srcImg: acrobats,
  },
  {
    name: "John Peace",
    age1: 32,
    age2: "",
    text:
      "One of Teresa S.Peace’s sons, the circus creator and professional in equestrian art, John has also joined the family circus ! With his mother as a coach, he also learned to fly on the back of his friends, the horses !",
    comment:
      "Mom says I'm better than her, but I always say it's because I had the best teacher",
    srcImg: equestrian,
  },
  {
    name: "Katina D. Camp",
    age1: 39,
    age2: "",
    text:
      "An incredible acrobat since she was a child. Specialist of aerial silk, you will definitely be fascinated by her beauty ! In 2008 she won the Silver Medal at the 3th China International Circus Festival, She loves creating and staging shows",
    comment: "When I do a performance, I feel like a high-flying bird !",
    srcImg: airacrobate,
  },
  {
    name: "Martin Coupart",
    age1: 33,
    age2: "",
    text:
      "An incredibly talented trapeze artist, he will give you an extraordinary experience, beyond your imagination, as he was able to do during his famous performances at The 11th Moscow International Youth Festival, Contest in Circus ART 2012, The 14th edition at the Brazilian circus festival 2018, Psychedelic Circus Open Air Festival Crew, 2008",
    comment:
      "Being a trapeze artist is such a thrill! The only moment in my life when I may fear emptiness is when I retire from the Circus !",
    srcImg: trapezist,
  },
  {
    name: "Farizah Ru'yah Naser",
    age1: 37,
    age2: "",
    text:
      "As a circus tamer, Farizah is one of a kind. No matter what animal you present to her, she will be able to tame it. The circus animals are like her children and they will definitely seduce you too!",
    comment:
      "I've always wanted to be close to animals, Circus unables me to be with them, what else can I ask for ?",
    srcImg: circusTamer,
  },
  {
    name: "Royce Savard",
    age1: 37,
    age2: "",
    text:
      "Always a clown, Royce makes us laugh every day even outside the shows! No one has yet managed to beat him at the “try to not laugh challenge” … If you want to take up the challenge, we wish you a good luck !",
    comment:
      "When I was young, I wanted to become a minister or a clown. I chose the latter one because I am a serious boy !",
    srcImg: clown,
  },
  {
    name: "Band of Rush",
    age1: "",
    age2: "",
    text:
      "A circus troup of eight artists to surprise and move you! They have the strength of a bear, the elegance of a lion and an unimaginable robustness. These are eight exceptional young talents that shine with their many facets during an hour and a half show to amaze you !",
    comment:
      "In Band of Rush, we are all brothers and sisters. It's really true, we were born in a family of eleven children... ",
    srcImg: BofR,
  },
];
function Family() {
  return (
    <div className={styles.aboutCss}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <BreadCrumb />
      <h3>The Wild Circus Family</h3>
      <Row className={styles.rowFamily}>
        <Col xs={{ size: "6", offset: "3" }}>
          <p>
            Our Circus is the <b>most talented and spectacular band</b> in the
            circus industry ! <br />
            We choose the <b>greatest circus</b> shows all around the world to
            make you <b>enjoy an unforgettable moment</b> beyond your
            imagination ! Our <b>exceptional artists and animals </b> invest
            countless hours each week to improve their performances and make you
            feel the once-in-a-lifetime moments !<br />
            <b>Discover them below ! </b>
          </p>
        </Col>
      </Row>
      {family.map((artist) => {
        return (
          <>
            <hr />
            <Row className={styles.rowFamily}>
              <Col xs="5" className={styles.colFamily}>
                <img
                  src={artist.srcImg}
                  alt={artist.name}
                  width="85%"
                  className={styles.imgFamily}
                />
              </Col>
              <Col xs="6" className={styles.colFamily}>
                <h4>
                  {artist.age1
                    ? `${artist.name} - ${artist.age1} ${artist.age2} years old`
                    : artist.name}
                </h4>
                <p>{artist.text}</p>
                <p>
                  {artist.name} : " <em>{artist.comment}</em> "
                </p>
              </Col>
            </Row>
          </>
        );
      })}
    </div>
  );
}

export default Family;
