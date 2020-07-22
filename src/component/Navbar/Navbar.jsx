import React from "react";
import { Nav, NavItem, Navbar } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logoWild from "../img/Logo.png";
import styles from "./Navbar.module.css";

function NavbarHome() {
  return (
    <Navbar className={styles.navBar}>
      <Nav>
        <NavItem className={styles.logo}>
          <NavLink tag={Link} to="/">
            <img src={logoWild} alt="logo" width="120vw" />
          </NavLink>
        </NavItem>
        <NavItem className={styles.navFirstItem}>
          <NavLink tag={Link} to="/thewildcircus">
            The Wild Circus
          </NavLink>
        </NavItem>
        <NavItem className={styles.navItem}>
          <NavLink tag={Link} to="/prices">
            Prices
          </NavLink>
        </NavItem>
        <NavItem className={styles.navItem}>
          <NavLink tag={Link} to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarHome;
