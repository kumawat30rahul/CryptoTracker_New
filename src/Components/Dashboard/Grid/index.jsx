import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { useNavigate } from "react-router-dom";
import millify from "millify";
import {motion} from 'framer-motion'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import {whishListHandler} from '../../../redux/app/actions'
import { DarkModeProvider } from "../../../App";

function Grid({coin,delay}) {
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
          console.log(wcoin.id);
          if(coin.id === wcoin.id){
            coinSaved = true;
          }
        })
        setSaved(coinSaved)
    }
  },[coin])

  const handleNavigation = (e) => {
    console.log(e);
    if(e.target.tagName === "svg" || e.target.tagName === "path" || e.target.tagName === "BUTTON" ){
      return;
    }else{
      navigate(`/coin/${coin.id}`)
    }
  }

  return (
    // <Link to={`/coin/${coin.id}`} className="router_link">
      <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once: true}}
      transition={{duration:0.5, delay: 0.25 + delay *0.1}}
      className={`grid-container ${darkMode ? 'dark-grid-bg': 'light-grid-bg'} ${
        coin.price_change_percentage_24h < 0 && "grid-container-red"
      }`}
      onClick={handleNavigation}
      >
      <button className="bookmark-icon" 
        onClick={(e)=>{
          savingHandler();
          whishListHandler(e.target,coin.id,coin,dispatch);
        }}
        >
          {saved ? <BookmarkIcon className="save-icon remove"/> : <BookmarkBorderIcon  className="save-icon add"/>}
        </button>
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className={`coin-symbol ${darkMode ? 'coin-symbol-dark' : 'coin-symbol-light'}`}>{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_volume">
            Total Volume : {millify(coin.total_volume)}
          </p>
          <p className="total_volume">
            Market Cap : ${millify(coin.market_cap)}
          </p>
        </div>
      </motion.div>
    // </Link>
  );
}

export default Grid;