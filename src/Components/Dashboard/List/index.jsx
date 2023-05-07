import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import millify from 'millify'
import {motion} from 'framer-motion'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { whishListHandler } from "../../../redux/app/actions";
import { useDispatch } from "react-redux";
import { DarkModeProvider } from "../../../App";
import { useContext } from "react";


function List({ coin , delay}) {
  const [saved,setSaved] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {darkMode} = useContext(DarkModeProvider)
  const savingHandler = () => {
    setSaved(!saved);
  }

  useEffect(()=>{
    const watchlistData = JSON.parse(localStorage.getItem("WATCHLIST"));
    if(watchlistData){
        let coinSaved = false; 
        watchlistData.forEach((wcoin)=>{
          if(coin.id === wcoin.id){
            coinSaved = true;
          }
        })
        setSaved(coinSaved)
    }
  },[coin])

  const handleNavigation = (e) => {
    if(e.target.tagName === "svg" || e.target.tagName === "path" || e.target.tagName === "BUTTON" ){
      return;
    }else{
      navigate(`/coin/${coin.id}`)
    }
  }
  return (
    // <Link to={`/coin/${coin.id}`} className="router_link">
      <motion.tr 
      initial={{opacity:0,x:-30}}
      whileInView={{opacity:1,x:0}}
      viewport={{once: true}}
      transition={{duration:0.5, delay: 0.25 + delay *0.1}}
      className={`list-row ${darkMode ? 'list-row-dark' : ''}`}
      onClick={handleNavigation}
      >
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
        <Tooltip title="Save to Watchlist">
          <td className="bookmark-td">
            <button 
              className="bookmark_icon" 
              onClick={(e)=>{
              savingHandler();
              whishListHandler(e.target,coin.id,coin,dispatch);
            }}
            >
              {saved ? <BookmarkIcon className="save_icon remove"/> : <BookmarkBorderIcon  className="save_icon add"/>}
            </button>
          </td>
        </Tooltip>
      </motion.tr>
    // </Link>
  );
}

export default List;