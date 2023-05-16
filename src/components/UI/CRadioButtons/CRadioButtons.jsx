import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex !important",
    flexDirection: "row",
    gap: "8px",
    "& .MuiSvgIcon-root": {
      fill: "#041674",
    },
    "& .Mui-checked": {
      color: "#041674",
    },
  },
});

function CRadioButtons({ gender, setGender }) {
  const classes = useStyles();

  const handleClick = (event) => {
    if (event.target.value == gender) {
      setGender("");
    } else {
      setGender(event.target.value);
    }
  };

  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={gender}
      classes={{ root: classes.root }}
    >
      <FormControlLabel
        value="M"
        control={<Radio onClick={handleClick} />}
        label="Male"
      />
      <FormControlLabel
        value="F"
        control={<Radio onClick={handleClick} />}
        label="Female"
      />
    </RadioGroup>
  );
}

export default CRadioButtons;
