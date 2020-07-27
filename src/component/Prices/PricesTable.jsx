import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import styles from "./Prices.module.css";

const host = process.env.REACT_APP_HOST;

function PricesTable() {
  const [ticket, setTicket] = useState([]);
  const [error, setError] = useState("");

  const getTickets = async () => {
    try {
      const res = await axios.get(`${host}/api/tickets`);
      const orderedbyPrice = res.data.sort((a, b) => a.price - b.price);
      setTicket(orderedbyPrice);
    } catch (err) {
      setError(err);
      return error;
    }
  };

  useEffect(getTickets(), []);

  return (
    <>
      <h3>Table Prices</h3>
      <p className={styles.tableEm}>
        <em>All prices are including Taxes and for one person only</em>
      </p>
      <Table className={styles.tableCss} bordered>
        <thead className={styles.tableHead}>
          <tr>
            <th>Categories</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>
          {ticket.map((ticket) => {
            return (
              <tr className={styles.tableTh}>
                <th>{ticket.label}</th>
                <th>{ticket.price} euros</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr />
    </>
  );
}

export default PricesTable;
