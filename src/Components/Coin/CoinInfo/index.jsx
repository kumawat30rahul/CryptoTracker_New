import React from "react";
import "./styles.css";
function CoinInfo({ heading, desc }) {

  return (
    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-info-heading">{heading}</h2>
        <p
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
    </div>
  );
}

export default CoinInfo;