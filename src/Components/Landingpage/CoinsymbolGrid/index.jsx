import React, { useEffect, useState } from 'react'
import './styles.css'
import {coinsFetch} from '../../../DataFetching/coinsFetch'
// import CoinCard from '../../Common/CoinSymbolCard'
import List from '../../Dashboard/List'

function CoinGridDiv() {
    const [coinSymbols, setCoinSymbols] = useState([])
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        console.log(coinSymbols);
    },[coinSymbols])

    async function getData(){
        const coins = await coinsFetch();
        setCoinSymbols(coins.slice(0,5))
    }
  return (
    <div className='coin-grid-symbols-div'>
        {coinSymbols && coinSymbols.map((coin,index)=>(
            <List 
            coin={coin}
                // src={coin.image} 
                // name={coin.name}
                // id={coin.id}
                delay={2} 
                key={index}
                />
        ))}
    </div>
  )
}

export default CoinGridDiv
