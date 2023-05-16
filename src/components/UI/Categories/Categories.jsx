import React from "react";
import styles from "./Categories.module.scss";
import { Container } from "@mui/material";
import Marquee from "react-fast-marquee";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

const Categories = ({ categories }) => {
  return (
    <Container>
      <div className={styles.categories}>
        <div className={styles.wrapper}>
          <Marquee
            className={styles.wrap__marquee}
            pauseOnHover={true}
            speed={30}
            direction="right"
            gradientWidth={20}
          >
            <div className={styles.marquee}>
              {(categories?.length > 14
                ? categories.filter((_, index) => index % 2 == 1)
                : categories
              )?.map((el, index) => (
                <CategoriesCard
                  icon={el.icon || "/images/CategoriesIcon1.svg"}
                  text={el.name}
                  key={index}
                />
              ))}
            </div>
          </Marquee>
          {categories?.length > 14 && (
            <Marquee
              className={styles.wrap__marquee}
              loop={0}
              pauseOnHover={true}
              speed={40}
              direction="left"
              gradientWidth={20}
            >
              <div className={styles.marquee}>
                {categories
                  .filter((_, index) => index % 2 == 0)
                  .map((el, index) => (
                    <CategoriesCard
                      icon={el.icon || "/images/CategoriesIcon1.svg"}
                      text={el.name}
                      key={index}
                    />
                  ))}
              </div>
            </Marquee>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
