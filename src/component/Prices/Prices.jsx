import React from "react";

import PricesTable from "./PricesTable";
import PricesEvent from "./PricesEvent";
import PricesEventMap from "./PricesEventMap";
import styles from "./Prices.module.css";

function Prices() {
  return (
    <div className={styles.pricesCss}>
      <h2 className={styles.pricesTitle}>Prices</h2>
      <PricesTable />
      <PricesEvent />
      <PricesEventMap />
    </div>
  );
}

export default Prices;
