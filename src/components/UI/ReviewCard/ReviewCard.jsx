import React from "react";
import styles from "./ReviewCard.module.scss";
import { ReviewIcon } from "components/Icons";
import CRating from "../Rating/Rating";

const ReviewCard = ({ name, about, info, rating }) => {
  return (
    <div className={styles.card}>
      <ReviewIcon />
      <h3>{name}</h3>
      <h4>About: {about}</h4>
      <p>{info}</p>
      <CRating value={rating} name="read-only" />
    </div>
  );
};

export default ReviewCard;
