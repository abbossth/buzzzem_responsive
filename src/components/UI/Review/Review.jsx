import React from "react";
import styles from "./Review.module.scss";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = ({ reviews }) => {
  return (
    <div className={styles.review}>
      <Container>
        <div className={styles.review__content}>
          <h2>RECENT REVIEW OF BLOGGERS</h2>
          <div className={styles.review__content__swiper}>
            <Swiper
            breakpoints={{
              // when window width is >= 640px
              480: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              990: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4
              }
            }}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {reviews?.map((el) => (
                <SwiperSlide key={el.id}>
                  <ReviewCard
                    name={el.rater_name}
                    about={el.blogger.full_name}
                    info={el.message}
                    rating={el.rate}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
