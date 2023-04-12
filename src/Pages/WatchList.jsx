import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CoinNavgationTabs from '../Components/Dashboard/Tabs';
import Header from '../Components/Common/Header';

function WatchList({coinData}) {
  const [allCoins,setAllCoins] = useState([]) 


  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("WATCHLIST"));
    // const newData = data.concat(coinData.data)
    setAllCoins(data)
  },[coinData])

  return (
    <div className='watch-list'>
    <Header />
    {coinData &&
      <CoinNavgationTabs coins={allCoins} variant='fullWidth'/>
    }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    coinData: state.coin
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(WatchList)
