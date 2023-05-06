import React from 'react'
import Button from '../../Common/Button'
import './styles.css'
import {motion} from 'framer-motion'
import iphone from '../../../Assets/iphone.png'
import gradient from '../../../Assets/gradient.png'
import { Link } from 'react-router-dom'
import { RWebShare } from "react-web-share";

function Maincomponent() {
  return (
    <div className='main_info_flex'>
      <div className='left_info'>
      <motion.h1
          className="trackcrypto_heading"
          initial={{ opacity: 0,  y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="realtime_heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="description_p"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="buttonflex_div"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
        <Link to='/dashboard'>

          <Button text={"Dashboard"} />
        </Link>
        <RWebShare
        data={{
          text: "Cryptocurrency Tracker",
          url: "https://web.whatsapp.com/",
          title: "CryptoCureencey Tracker",
        }}
        onClick={() => console.log("shared successfully!")}
      >
            <Button text={"Share"} outlined={true} />
      </RWebShare>
        </motion.div>
      </div>
      <div className='right_info'>
      <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        {/* <img src={gradient} className="gradient" /> */}
      </div>
      
    </div>
  )
}

export default Maincomponent
