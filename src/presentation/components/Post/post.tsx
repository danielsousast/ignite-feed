import React, { FormEvent, useState } from "react";
import Avatar from "../Avatar/avatar";
import Comment from "../Comment/comment";

import styles from "./post.module.css";

export type PostProps = {
  avatarUrl: string;
  name: string;
  role: string;
  publishedAt: Date;
  content: { type: "paragraph" | "link"; content: string }[];
};

const Post: React.FC<PostProps> = ({
  avatarUrl,
  name,
  role,
  publishedAt,
  content,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = React.useState([
    {
      id: "1",
      content: "Que legal man",
    },
  ]);
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  function handleCreateComment(event: FormEvent) {
    event.preventDefault();
    setComments([
      ...comments,
      {
        id: String(comments.length + 1),
        //@ts-ignore
        content: commentText as string,
      },
    ]);
    setCommentText("");
  }

  function handleRemoveComment(id: string) {
    setComments(comments.filter((comment) => comment.id !== id));
  }

  function onChangeText(event: FormEvent) {
    //@ts-ignore
    setCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageUrl={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time dateTime="2022-05-08">{formattedDate}</time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p>{item.content}</p>;
          }
          if (item.type === "link") {
            return (
              <p>
                👉 <a href="#"> {item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={commentText}
          placeholder="Deixe um comentario"
          name="comment"
          onChange={onChangeText}
          required
        />
        <footer>
          <button disabled={commentText?.length === 0} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment.content}
            onRemoveCommentPress={() => handleRemoveComment(comment.id)}
          />
        ))}
      </div>
    </article>
  );
};

export default Post;
