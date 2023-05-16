import React from "react";
import styles from "./CategoriesCard.module.scss";

const CategoriesCard = ({ icon, text }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="card" />
      <h5>{text}</h5>
    </div>
  );
};

export default CategoriesCard;
