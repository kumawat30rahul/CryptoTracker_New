import React, { useContext } from "react";
import "./styles.css";
import { DarkModeProvider } from "../../../App";

function CoinInfo({ heading, desc }) {
    const {darkMode} = useContext(DarkModeProvider)
  return (
    <div className={`grey-wrapper ${darkMode ? 'grey-wrapper-dark' : 'grey-wrapper-light'}`} style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-info-heading">{heading}</h2>
        <p
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
    </div>
  );
}

export default CoinInfo;