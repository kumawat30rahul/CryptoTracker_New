import React from 'react'
import {motion} from 'framer-motion'
import { Tooltip } from "@mui/material";
import './styles.css'
import { Link } from 'react-router-dom';

function CoinCard({src, delay,name,id}) {
  return (
    <Link to={`coin/${id}`}>
        <motion.div 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        viewport={{once:true}}
        transition={{
            duration:1,
            delay: 0.25 + delay * 0.1,
            type: "smooth",
            // repeatType: "mirror",
            }}
        className='symbol-bd-cl'>
        <Tooltip title={name} placement="top-start">
                <img src={src} alt=" " className='coin-logo green-glow'/>
        </Tooltip>
        </motion.div>
    </Link>
  )
}

export default CoinCard
