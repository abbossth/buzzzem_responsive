import React, { useState } from "react";
import styles from "./Comments.module.scss";
import MainButton from "../MainButton/MainButton";
import { useForm } from "react-hook-form";
import CRating from "../Rating/Rating";
import { Button, Grid, MenuItem, Select } from "@mui/material";
import { DownArrow } from "components/Icons";
import CommentsInfo from "../CommentsInfo/CommentsInfo";
import {
  UseCreateComments,
  UseGetPlatforms,
  UseGetSingleRatings,
} from "services/blogger.service";
import { useRouter } from "next/router";

const Comments = ({ id }) => {
  const { query } = useRouter();
  const [ratingValue, setRatingValue] = useState("");

  const { handleSubmit, register, reset } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      platform: "",
      comment: "",
    },
  });

  const { mutate: createComments } = UseCreateComments({
    onSuccess: () => {
      console.log("success");
    },
  });

  const onSubmit = (data) => {
    createComments({
      blogger_id: id,
      social_media_account_id: data.platform.id,
      rater_name: data.name,
      message: data.comment,
      rate: ratingValue,
    });
  };

  const { data: rating } = UseGetSingleRatings({
    id: query.id,
  });

  const { data: PlatformsOption } = UseGetPlatforms({
    queryParams: "",
  });

  return (
    <div className={styles.comments}>
      <h4>Comments</h4>
      <div className={styles.comments__card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.comments__content}>
            <div className={styles.comments__card__top}>
              <div className={styles.comments__card__top__item}>
                <label htmlFor="name">Type your name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className={styles.comments__card__top__item}>
                <label htmlFor="name">Which platform</label>
                <Select
                  name="platform"
                  sx={{
                    padding: "6px 12px 6px 0 !important",
                    background: "#FFFFFF !important",
                    border: "1px solid #CED4DA !important",
                    borderRadius: "4px !important",
                    height: "35px !important",
                    width: "180px",
                  }}
                  {...register("platform")}
                  IconComponent={() => <DownArrow width="15" height="15" />}
                >
                  <MenuItem value="">All</MenuItem>
                  {PlatformsOption?.map((option) => (
                    <MenuItem value={option} key={option}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className={styles.comments__card__top__item}>
                <label htmlFor="name">Rate blogger</label>
                <div className={styles.comments__card__top__item__rating}>
                  <CRating setValue={setRatingValue} />
                  <span>{ratingValue}</span>
                </div>
              </div>
            </div>
            <div className={styles.comments__card__center}>
              <textarea
                name="comment"
                placeholder="Leave your comment"
                {...register("comment")}
              />
            </div>
            <div className={styles.comments__card__buttons}>
              <Button
                sx={{
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  color: "#041674",
                  background: "#D9D9D9",
                  borderRadius: "10px",
                  padding: "34px 50px",
                  "&:hover": {
                    background: "#D9D9D9",
                  },
                }}
              >
                CAPTCHA
              </Button>
              <div className={styles.comments__card__buttons__item}>
                <MainButton
                  type="button"
                  variant="outlined"
                  text="CANCEL"
                  onClick={() => {
                    reset();
                  }}
                />
                <MainButton type="submit" variant="outlined" text="SUBMIT" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.comments__info}>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {rating?.map((item) => (
            <Grid item xs={12} key={item.id}>
              <CommentsInfo
                rater_name={item.rater_name}
                rate={item.rate}
                platform={item.platform.name}
                message={item.message}
                likes={item.likes}
                dislikes={item.dislikes}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Comments;
