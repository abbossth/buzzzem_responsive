import React from "react";
import styles from "./BloggerCard.module.scss";
import CRating from "../Rating/Rating";
import {
  FaceBookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "components/Icons";
import Link from "next/link";

const BloggerCard = ({
  avg_rate,
  categories,
  country,
  full_name,
  image,
  languages,
  slug,
}) => {
  return (
    <Link href={`/blogger/${slug}`} passHref>
      <div className={styles.card}>
        <div className={styles.card__category}>
          {categories?.map((el) => (
            <h5 key={el.name}>{el.name}</h5>
          ))}
        </div>
        <img src={image} alt="card_image" />
        <h4>{full_name}</h4>
        <div className={styles.card__rating}>
          <CRating value={avg_rate} name="read-only" />
          <p>{avg_rate}</p>
        </div>
        <div className={styles.card__location}>
          <div className={styles.card__location__item}>
            <LocationIcon />
            <h3>{country}</h3>
          </div>
          <h6>{languages.map((el) => el.short_form)}</h6>
        </div>

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
      </div>
    </Link>
  );
};

export default BloggerCard;
