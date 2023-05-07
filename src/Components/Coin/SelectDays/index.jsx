import { useContext, useState } from "react";
// import "./styles.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DarkModeProvider } from "../../../App";

export default function SelectDays({ days, handleDaysChange, noPTag }) {
  const {darkMode} = useContext(DarkModeProvider)
  return (
    <div className="select-days">
      {!noPTag && <p>Price Change In</p>}
      <Select
        sx={{
          height: "2.5rem",
          color: `${darkMode} ? var(--white) : var(--black)`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `${darkMode} ? var(--white) : var(--black)`,
          },
          "& .MuiSvgIcon-root": {
            color: `${darkMode} ? var(--white) : var(--black)`,
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}