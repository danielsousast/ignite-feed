import React from "react";
import styles from "./avatar.module.css";

type AvatarProps = {
  imageUrl: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <img className={styles.avatar} src={imageUrl} />;
};

export default Avatar;
