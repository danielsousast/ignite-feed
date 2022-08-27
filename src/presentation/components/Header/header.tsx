import React from "react";
import styles from "./header.module.css";
import logo from "../../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ignite Feed" />
    </header>
  );
};

export default Header;
