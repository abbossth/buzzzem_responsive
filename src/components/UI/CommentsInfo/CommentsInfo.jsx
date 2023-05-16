import React from "react";
import styles from "./CommentsInfo.module.scss";
import CRating from "../Rating/Rating";
import { LikeIcon, LikeIconReverse, ProhibetIcon } from "components/Icons";

const colors = ["#0D6EFD", "#198754", "#6F42C1", "#F7AC29", "#db463b"];
let lastIndex = -1;

function pickRandomElement() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * colors.length);
  } while (randomIndex === lastIndex);
  lastIndex = randomIndex;
  return colors[randomIndex];
}

const CommentsInfo = ({
  rater_name,
  rate,
  platform,
  message,
  likes,
  dislikes,
}) => {
  return (
    <div className={styles.info}>
      <div className={styles.image} style={{ background: pickRandomElement() }}>
        {rater_name.slice(0, 1)}
      </div>
      <div className={styles.info__content}>
        <h3>{rater_name}</h3>
        <div className={styles.info__content__rating}>
          <div className={styles.info__content__rating__item}>
            <CRating value={+rate} name="read-only" />
            <span>{rate}</span>
          </div>
          <div className={styles.info__content__rating__platform}>
            <p>
              For: <span>{platform}</span>
            </p>
          </div>
        </div>
        <div className={styles.info__content__information}>{message}</div>
        <div className={styles.info__content__bottom}>
          <div className={styles.info__content__bottom__like}>
            <div className={styles.info__content__bottom__like__item}>
              <LikeIcon />
              <h6>{likes}</h6>
            </div>
            <div className={styles.info__content__bottom__like__item}>
              <LikeIconReverse />
              <h6>{dislikes}</h6>
            </div>
          </div>
          <div className={styles.info__content__bottom__report}>
            <ProhibetIcon />
            <h6>Report</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsInfo;
