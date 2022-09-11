import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from "./comment.module.css";

type CommentProps = {
  comment: string;
  onRemoveCommentPress: () => void;
};

export default function Comment({
  comment,
  onRemoveCommentPress,
}: CommentProps) {
  const [likeCount, setLikeCount] = React.useState(0);

  function handleLike() {
    setLikeCount(likeCount + 1);
  }
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
            <button title="Deletar comentário" onClick={onRemoveCommentPress}>
              <Trash size={22} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
