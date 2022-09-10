import React from "react";
import { PencilLine } from "phosphor-react";
import styles from "./sidebar.module.css";
import Avatar from "../Avatar/avatar";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <Avatar imageUrl="https://github.com/danielsousast.png" />
        <strong>Daniel Sousa</strong>
        <span>Software Developer</span>
      </div>
      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={18} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
