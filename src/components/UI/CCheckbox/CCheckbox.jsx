import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./CCheckbox.module.scss";

export default function CCheckbox({
  checkboxOptions,
  checked,
  setChecked,
  count,
}) {
  const handleChange1 = (isChecked) => {
    if (isChecked) return setChecked(checkboxOptions.map((el) => el.id));
    else setChecked([]);
  };

  const handleChange2 = (isChecked, id) => {
    if (isChecked) return setChecked((state) => [...state, id]);
    if (!isChecked) {
      return setChecked((state) => state.filter((el) => el !== id));
    }
  };

  const children = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {checkboxOptions?.map((item) => (
        <div key={item.id} className={styles.label}>
          <FormControlLabel
            label={item.name}
            control={
              <Checkbox
                checked={checked.includes(item.id)}
                onChange={(event) =>
                  handleChange2(event.target.checked, item.id)
                }
                sx={{
                  color: "var(--text-color) !important",
                }}
              />
            }
          />
          <h2>{item[count]}</h2>
        </div>
      ))}
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Select all"
        control={
          <Checkbox
            checked={checked.length === checkboxOptions?.length}
            indeterminate={
              checked.length !== checkboxOptions?.length && checked.length > 0
            }
            onChange={(event) => handleChange1(event.target.checked)}
            sx={{
              color: "var(--text-color) !important",
            }}
          />
        }
        sx={{
          width: "100%",
        }}
      />
      <div className={styles.line}></div>
      {children}
    </div>
  );
}
