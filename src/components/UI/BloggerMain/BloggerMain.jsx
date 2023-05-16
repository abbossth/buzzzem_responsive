import React, { useEffect, useState } from "react";
import styles from "./BloggerMain.module.scss";
import {
  BloggerNameIcon,
  LocationIcon,
  ProfileLanguageIcon,
  RatingBigIcon,
} from "components/Icons";
import MainButton from "../MainButton/MainButton";
import CRating from "../Rating/Rating";

const BloggerMain = ({
  image,
  gender,
  age,
  full_name,
  country,
  languages,
  avg_rate,
  total_rates,
}) => {
  const [genderText, setGenderText] = useState(null) 
  useEffect(() => {
    if (gender) {
      setGenderText(gender.toLowerCase() === "m" ? "Male" : "Female")
    }
  }, [gender])
  console.log(gender);
  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.main__content__blogger__info}>
          <img src={image} alt="blogger" className={styles.main__img} />
          <div className={styles.main__content__left}>
            <div className={styles.main__content__left__info}>
              <h6>{genderText ? genderText : gender}</h6>
              <div>|</div>
              <h6>{age} years old</h6>
            </div>
            <div className={styles.main__content__left__name}>
              <h2>{full_name}</h2>
              {/* <BloggerNameIcon /> */}
            </div>
            <div className={styles.main__content__left__info}>
              <LocationIcon />
              <h6>{country}</h6>
              <div>|</div>
              <h6>Joined on: 12.23.2021</h6>
            </div>
            <div className={styles.main__content__left__buttons}>
              {languages?.map((language) => (
                <MainButton
                key={language.short_form}
                text={language.short_form}
                variant="outlined"
                icon={<ProfileLanguageIcon />}
                sx={{
                  padding: "3px 8px",
                  height: "auto",
                  background: "#F8F9FA",
                  border: "1px solid #CED4DA",
                  borderRadius: "4px",
                  color: "#212529",
                  
                  "&:hover": {
                    border: "1px solid #CED4DA",
                  },
                }}
                />
                ))}
            </div>
          </div>
        </div>
        <div className={styles.main__content__right}>
          <div className={styles.main__content__right__item}>
            <CRating value={+avg_rate} name="read-only" />
            <div className={styles.main__content__right__item__rating}>
              <RatingBigIcon />
              <h6>{avg_rate}</h6>
            </div>
          </div>
          <h5>{total_rates} people rated so far</h5>
        </div>
      </div>
    </div>
  );
};

export default BloggerMain;
