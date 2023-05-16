import React from "react";
import styles from "./TopRatesCard.module.scss";
import CRating from "../Rating/Rating";
import {
  FaceBookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "components/Icons";

const TopRatesCard = ({
  img,
  category,
  rating,
  name,
  telegram,
  youtube,
  facebook,
  instagram,
  location,
  language,
}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="card" />
      <div className={styles.card__content}>
        <div className={styles.card__content__rating}>
          <h5>{category}</h5>
          <div className={styles.card__content__rating__item}>
            <CRating value={rating} name="read-only" />
            <p>{rating}</p>
          </div>
        </div>
        <h3>{name}</h3>
        <div className={styles.card__icons}>
          <a href="#">
            <FaceBookIcon fill="#E7F1FF" />
          </a>
          <a href="#">
            <TwitterIcon fill="#E7F1FF" />
          </a>
          <a href="#">
            <InstagramIcon fill="#E7F1FF" />
          </a>
          <a href="#">
            <YouTubeIcon fill="#E7F1FF" />
          </a>
        </div>
        <div className={styles.card__location}>
          <div className={styles.card__location__item}>
            <LocationIcon />
            <h5>{location}</h5>
          </div>
          <h6>{language}</h6>
        </div>
      </div>
    </div>
  );
};

export default TopRatesCard;
