import React from "react";
import { Breadcrumbs } from "@mui/material";

import styles from "./CBreadCrumbs.module.scss";
import { useRouter } from "next/router";
import { SeparatorIcon } from "components/Icons";

const CBreadCrumbs = ({ items }) => {
  const { push } = useRouter();

  const navigateHandler = (link, index) => {
    if (index === items?.length - 1) return null;
    push(link);
  };
  return (
    <div className={styles.crumpsRoot}>
      <Breadcrumbs separator={<SeparatorIcon />}>
        {items?.map((item, index) => (
          <div
            key={index}
            className={`${styles.breadcrumb} ${
              index + 1 === items.length && styles.breadcrumb__last
            }`}
            onClick={() => navigateHandler(item.link, index)}
          >
            <p className={styles.breadcrumb__paragraph}>{item.label}</p>
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default CBreadCrumbs;
