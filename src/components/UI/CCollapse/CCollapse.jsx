import { DownArrow } from "components/Icons";
import styles from "./CCollapse.module.scss";
import React, { useState } from "react";
import { Collapse } from "@mui/material";
import CCheckbox from "../CCheckbox/CCheckbox";

function CollapseLabel({ handleChange, filterBy }) {
  return (
    <div className={styles.readMore} onClick={handleChange}>
      <div className={styles.text}>
        <span>{filterBy}</span>
        <DownArrow stroke="#F7AC29" />
      </div>
    </div>
  );
}

const CCollapse = ({
  checkboxOptions,
  filterBy,
  checked,
  setChecked,
  count,
}) => {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className={styles.collapse}>
      <CollapseLabel handleChange={handleCollapse} filterBy={filterBy} />
      <Collapse in={collapse} collapsedSize={0}>
        <CCheckbox
          checkboxOptions={checkboxOptions}
          checked={checked}
          setChecked={setChecked}
          count={count}
        />
      </Collapse>
    </div>
  );
};

export default CCollapse;
