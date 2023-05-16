import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DownArrow } from "components/Icons";

export default function CSelect({
  setSelect,
  select,
  getValue,
  options,
  initialValue,
}) {
  const handleChange = (event) => {
    setSelect((prev) => {
      return { ...prev, [`${getValue}`]: event.target.value };
    });
  };

  return (
    <Select
      value={select}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      sx={{
        padding: "6px 12px 6px 0 !important",
        background: "#FFFFFF !important",
        border: "1px solid #CED4DA !important",
        borderRadius: "4px !important",
        height: "38px !important",
      }}
      IconComponent={() => <DownArrow width="20" height="20" />}
    >
      <MenuItem value="">
        <em>{initialValue}</em>
      </MenuItem>
      {options?.map((option) => (
        <MenuItem value={option} key={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}
