import React, { useState } from "react";
import { Link } from "react-router-dom";

import ticket from "../img/ticket.jpg";
import styles from "./Ticket.module.css";
import Booking from "./Booking";

function TicketBanner() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className={styles.ticketCss}>
      <hr />
      <h3>Get your ticket right here !</h3>
      <Link onClick={toggle} className={styles.ticketLink}>
        <h6>&raquo;</h6>
        <img src={ticket} alt="get your ticket on clicking here" width="25%" />
        <h6>&laquo;</h6>
        <Booking setModal={setModal} toggle={toggle} modal={modal} />
      </Link>
    </div>
  );
}

export default TicketBanner;
