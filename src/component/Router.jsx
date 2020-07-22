import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import AboutUs from "./About/About";
import Family from "./About/Family";
import Commitment from "./About/Commitment";
import Performs from "./home/Performs/Performs";
import Prices from "./Prices/Prices";
import Contact from "./Contact/Contact";
import NavbarHome from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import styles from "./Router.module.css";
import TicketBanner from "./Ticket/TicketBanner";

function Router() {
  return (
    <div className={styles.routerCss}>
      <BrowserRouter>
        <NavbarHome />
        <Switch>
          <Route path="/thewildcircus/family" component={Family} />
          <Route path="/thewildcircus/commitment" component={Commitment} />
          <Route path="/thewildcircus" component={AboutUs} />
          <Route path="/performances" component={Performs} />
          <Route path="/prices" component={Prices} />
          <Route path="/contact" component={Contact} />
          <Route path="/tickets" component={Prices} />
          <Route exact path="/" component={Home} />
        </Switch>
        <TicketBanner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
