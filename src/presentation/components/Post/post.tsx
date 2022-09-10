import React from "react";
import Avatar from "../Avatar/avatar";
import Comment from "../Comment/comment";

import styles from "./post.module.css";

const Post: React.FC = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageUrl="https://github.com/danielsousast.png" />
          <div className={styles.authorInfo}>
            <strong>Daniel Sousa</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time dateTime="2022-05-08">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export default Post;
