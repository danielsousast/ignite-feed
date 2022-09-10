import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from "./comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/danielsousast.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel de Sousa Santos</strong>
              <time dateTime="2022-05-08">Publicado há 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
