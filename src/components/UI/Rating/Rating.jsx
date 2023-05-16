import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";

const StyledRating = styled(Rating)({
  "&.MuiRating-root": {
    display: "flex",
  },
});

const CRating = ({ value, setValue, defaultValue = 0, name }) => {
  return (
    <>
      <StyledRating
        size="medium"
        name="half-rating"
        max={5}
        defaultValue={defaultValue}
        value={value}
        precision={0.5}
        readOnly={name === "read-only"}
        onChange={(_, newValue) => {
          name !== "read-only" && setValue(newValue);
        }}
      />
    </>
  );
};

export default CRating;
