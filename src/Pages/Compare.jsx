import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import SelectCoins from '../Components/Compare/CoinsSelections'
import TogglePriceType from '../Components/Coin/Pricetype'
import SelectDays from '../Components/Coin/SelectDays'
import {coinData} from '../DataFetching/coinDataFetch'
import {getCoinPrices} from '../DataFetching/coinPricesFetching'
import {settingChartData} from '../DataFetching/chartData/settingChartData'
import CoinInfo from '../Components/Coin/CoinInfo'
import LineChart from "../Components/Coin/LineChart";
import List from '../Components/Dashboard/List'
import {coinObject} from '../DataFetching/chartData/convertObject'
import Loader from '../Components/Common/Loader'

function Compare() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({});

    async function handleDaysChange(event) {
        setDays(event.target.value);
        const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
        settingChartData(setChartData, prices1, prices2);
      }
    
      const handlePriceTypeChange = async (event, newType) => {
        setPriceType(newType);
        const prices1 = await getCoinPrices(crypto1, days, newType);
        const prices2 = await getCoinPrices(crypto2, days, newType);
        settingChartData(setChartData, prices1, prices2);
      };

    useEffect(()=>{
        getData()
    },[])

    async function getData() {
        setIsLoading(true);
        const data1 = await coinData(crypto1);
        if (data1) {
          const data2 = await coinData(crypto2);
          coinObject(setCrypto1Data, data1);
          if (data2) {
            coinObject(setCrypto2Data, data2);
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            settingChartData(setChartData, prices1, prices2);
            setIsLoading(false);
          }
        }
      }

      const handleCoinChange = async (event, isCoin2) => {
        if (isCoin2) {
          setCrypto2(event.target.value);
          const data = await coinData(event.target.value);
          coinObject(setCrypto2Data, data);
          const prices1 = await getCoinPrices(crypto1, days, priceType);
          const prices2 = await getCoinPrices(crypto2, days, priceType);
          if (prices1.length > 0 && prices2.length > 0) {
          }
        } else {
          setCrypto1(event.target.value);
          const data = await coinData(event.target.value);
          coinObject(setCrypto1Data, data);
          const prices1 = await getCoinPrices(crypto1, days, priceType);
          const prices2 = await getCoinPrices(crypto2, days, priceType);
          if (prices1.length > 0 && prices2.length > 0) {
          }
        }
      };
      useEffect(()=>{
        console.log(crypto2Data,crypto1Data)
      },[crypto2Data,crypto1Data])
  return (
    <div>
      <Header />
              {isLoading ? (
                <Loader />
              ) : (
                <>
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
           {crypto1 && crypto1Data && 
             <List coin={crypto1Data}/>
           }
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
           {crypto2 && crypto2Data && 
             <List coin={crypto2Data} delay={2}/>
            }
          </div>
          <div className="grey-wrapper">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
                    <LineChart
                      chartData={chartData}
                      priceType={priceType}
                      multiAxis={true}
                    />
          </div>
          {crypto1Data && <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />}
          {crypto2Data && <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />}
                </>
              )}
    </div>
  )
}

export default Compare
