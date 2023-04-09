import React, { useEffect } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
// import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import millify from 'millify'

function List({ coin }) {
  useEffect(()=>{
    console.log(coin);
  })
  return (
    <Link to={`/coin/${coin.id}`} className="router_link">
      <tr className="list-row">
        <Tooltip title={coin.name + " logo"}>
          <td className="td-image">
            <img src={coin.image} className="coin-logo td-text" />
          </td>
        </Tooltip>
        <Tooltip title={(coin.symbol).toUpperCase()} placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol td-text">{coin.symbol}</p>
              <p className="coin-name td-text">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h && coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip price-chip-list td-text">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon td-text">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red td-text">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red td-icon td-text">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price">
          <td>
            <h3
              className="coin-price  td-center-align td-text"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td className="tot_volumes">
            <p className="total_volume totalVol td-right-align td-total-volume td-text">
              {millify(Number(coin.total_volume)).toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="desktop-td-mkt">
            <p className="total_volume totalVol td-right-align td-text" placement="bottom-end">
              ${millify(Number(coin.market_cap)).toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="mobile-td-mkt">
            <p className="total_volume totalVol td-right-align td-text" placement="bottom-end">
              ${millify(Number(coin.total_volume))}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}

export default List;