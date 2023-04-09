import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Maincomponent from "../Components/Landingpage/Maincomponent";

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    </div>
  );
}

export default Home;
