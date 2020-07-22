import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import styles from "./About.module.css";

function BreadCrumb() {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <BreadcrumbItem className={styles.breadcrumbItem}>
        <Link to="/thewildcircus">The Wild History</Link>
      </BreadcrumbItem>
      <BreadcrumbItem className={styles.breadcrumbItem}>
        <Link to="/thewildcircus/family">The Wild Family</Link>
      </BreadcrumbItem>
      <BreadcrumbItem className={styles.breadcrumbItem}>
        <Link to="/thewildcircus/commitment">The Wild Commitment</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadCrumb;
