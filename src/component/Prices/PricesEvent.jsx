import React, { useState, useEffect } from "react";

import styles from "./Prices.module.css";
import { Table } from "reactstrap";
import Axios from "axios";

const host = process.env.REACT_APP_HOST;

function PricesEvent() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState("");

  const getShows = async () => {
    try {
      const res = await Axios.get(`${host}/api/shows`);
      const orderedbyDate = res.data.sort((a, b) => {
        if (a.show_date < b.show_date) {
          return -1;
        } else if (a.show_date > b.show_date) {
          return 1;
        } else {
          return 0;
        }
      });
      setShows(orderedbyDate);
    } catch (err) {
      setError(err);
      return error;
    }
  };

  useEffect(() => {
    getShows();
  });

  return (
    <div className={styles.pricesTableEventCss}>
      <h3>Upcoming Events</h3>
      <p className={styles.tableEm}>
        <em>
          All events are started at 20:00 PM. You can buy tickets on-site. We
          advice you to come earlier if you haven't booked your tickets already.
        </em>
      </p>
      <Table className={styles.tableCss} bordered>
        <thead className={styles.tableHead}>
          <tr>
            <th>Show</th>
            <th>Localisation</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => {
            return (
              <tr className={styles.tableTh}>
                <th>{show.title}</th>
                <th>{show.localisation}</th>
                <th>{show.show_date}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default PricesEvent;
