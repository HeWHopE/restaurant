import React from "react";
import styles from "./header.module.scss";

import { Container, Row } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        {" "}
        <Container>
          <Row>toplogo</Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
