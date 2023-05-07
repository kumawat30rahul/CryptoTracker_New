import React, { useState, useEffect, useContext } from "react";
import { coinsFetch } from "../../../DataFetching/coinsFetch";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./styles.css";
import { DarkModeProvider } from "../../../App";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);
  const {darkMode} = useContext(DarkModeProvider)

  const styles = {
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
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await coinsFetch();
    setAllCoins(myCoins);
  }

  return (
    <div className="coins-flex">
    <div className="selection-flex">

      <p className="p">Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
      <div className="selection-flex">
      <p className="p">Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      </div>
    </div>
  );
}

export default SelectCoins;