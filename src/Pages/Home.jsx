import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Maincomponent from "../Components/Landingpage/Maincomponent";
import CoinGridDiv from "../Components/Landingpage/CoinsymbolGrid";
import {motion} from 'framer-motion'

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: 'absolute',
    left: position.x + -10,
    top: position.y + -20,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor:'var(--blue)',
    zIndex: '9999999'
  };
  return (
    <div className="Home">
      <div style={circleStyle}></div>
        <Header />
        <Maincomponent />
        <motion.h1
          className="currency_heading"
          initial={{ opacity: 0,  y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 ,delay: 2}}
        >
          Our Currencies
        </motion.h1>
        <CoinGridDiv />
      </div>
  );
}

export default Home;
