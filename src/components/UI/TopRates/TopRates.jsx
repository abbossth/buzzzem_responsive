import React from "react";
import styles from "./TopRates.module.scss";
import { Container, Grid } from "@mui/material";
import TopRatesCard from "../TopRatesCard/TopRatesCard";
import MainButton from "../MainButton/MainButton";
import { RightArrowIcon } from "components/Icons";
import { useRouter } from "next/router";

const TopRates = ({ bloggersData }) => {
  const { push } = useRouter();
  return (
    <Container>
      <div className={styles.rates}>
        <h2>TOP RATES</h2>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {bloggersData?.map((el) => (
            <Grid item xs={12} sm={6} md={4} key={el.id}>
              <TopRatesCard
                img={el.image}
                category={el.categories?.[0].name}
                rating={el.avg_rate}
                name={el.full_name}
                telegram={el.telegram}
                youtube={el.youtube}
                facebook={el.facebook}
                instagram={el.instagram}
                location={el.country}
                language={el.languages
                  .map((language) => language.short_form)
                  .join(", ")}
              />
            </Grid>
          ))}
        </Grid>
        <div className={styles.rates__more}>
          <MainButton
            text="Full list"
            endIcon={<RightArrowIcon />}
            variant="outlined"
            onClick={() => push("/blogger")}
          />
        </div>
      </div>
    </Container>
  );
};

export default TopRates;
