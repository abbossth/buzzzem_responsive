import React, { useRef, useState } from "react";
import styles from "./Banner.module.scss";
import { Collapse, Container } from "@mui/material";
import { ArrowBottomIcon, SearchIcon } from "components/Icons";
import MainButton from "../MainButton/MainButton";
import { useRouter } from "next/router";
import { setOpenSidebar } from "store/sidebar";
import { useDispatch } from "react-redux";
import { useDebounce } from "utils/useDebounce";
import { UseGetBloggersMain } from "services/blogger.service";
import Link from "next/link";

const Banner = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const queryParams = Object.entries({
    full_name: debouncedSearchTerm,
  })
    .filter(([key, value]) => value !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const { data: bloggersData } = UseGetBloggersMain({
    queryParams,
    debouncedSearchTerm,
  });

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  console.log("bloggersData", bloggersData);

  return (
    <>
      <div className={styles.banner}>
        <Container>
          <div className={styles.banner__content}>
            <img src="/images/banner.png" alt="banner" />
            <h1>THE BEST WEBSITE ABOUT BLOGGERS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div
              className={styles.banner__content__search}
              onClick={handleFocusInput}
            >
              <div className={styles.banner__content__search__input}>
                <input
                  type="text"
                  placeholder="Search blogger"
                  ref={inputRef}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className={styles.banner__content__search__input__button}>
                  <MainButton
                    text="SEARCH"
                    icon={<SearchIcon />}
                    sx={{
                      padding: "20px 34px",
                      boxShadow: "0px 4px 16px rgba(79, 70, 229, 0.16)",
                      borderRadius: "50px !important",
                    }}
                    variant="contained"
                  />
                </div>
              </div>
              <div className={styles.banner__content__search__items}>
                <Collapse in={!!bloggersData?.length} collapsedSize={0}>
                  <div className={styles.time__content}>
                    {bloggersData?.map((item) => (
                      <Link
                        href={`/blogger/${item.slug}`}
                        key={item.slug}
                        passHref
                      >
                        <div
                          className={
                            styles.banner__content__search__items__card
                          }
                        >
                          <img src={item.image} alt="personImg" />
                          <div>
                            <h2>{item.full_name}</h2>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Collapse>
              </div>

              <div className={styles.banner__content__search__more}>
                <div
                  className={styles.banner__content__search__more__content}
                  onClick={() => {
                    dispatch(setOpenSidebar(true));
                    push("/blogger");
                  }}
                >
                  <h4>ADVANCED SEARCH</h4>
                  <ArrowBottomIcon />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.arcuate}></div>
    </>
  );
};

export default Banner;
