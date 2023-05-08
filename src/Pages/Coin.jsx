import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Common/Header'
import { coinData } from '../DataFetching/coinDataFetch'
import { getCoinPrices } from '../DataFetching/coinPricesFetching'
import { settingChartData } from '../DataFetching/chartData/settingChartData'
import List from '../Components/Dashboard/List'
import CoinInfo from '../Components/Coin/CoinInfo'
import SelectDays from '../Components/Coin/SelectDays'
import TogglePriceType from '../Components/Coin/Pricetype'
import LineChart from '../Components/Coin/LineChart'
import Loader from '../Components/Common/Loader'
import { DarkModeProvider } from '../App'

function Coin() {
    const [isLoading, setIsLoading] = useState(true);
    const [coin_Data, setCoin_Data] = useState();
    const [days, setDays] = useState(60);
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("prices");
    const { id } = useParams()
    const { darkMode } = useContext(DarkModeProvider)

    useEffect(() => {
        if (id) {
            getData();
            console.log(coin_Data);
        }
    }, [id]);

    const getData = async () => {
        setIsLoading(true);
        const Data = await coinData(id)
        console.log(Data);
        if (Data) {
            setCoin_Data({
                id: Data.id,
                name: Data.name,
                symbol: Data.symbol,
                image: Data.image.large,
                desc: Data.description.en,
                price_change_percentage_24h: Data.market_data.price_change_percentage_24h,
                total_volume: Data.market_data.total_volume.usd,
                current_price: Data.market_data.current_price.usd,
                market_cap: Data.market_data.market_cap.usd,
            })
            const prices = await getCoinPrices(id, days, priceType);
            if (prices.length > 0) {
                settingChartData(setChartData, prices)
                setIsLoading(false)
            }
        }
    }
    const handleDaysChange = async (event) => {
        setDays(event.target.value);
        const prices = await getCoinPrices(id, event.target.value, priceType);
        if (prices.length > 0) {
            settingChartData(setChartData, prices);
        }
    };

    const handlePriceTypeChange = async (event, newType) => {
        setPriceType(newType);
        const prices = await getCoinPrices(id, days, newType);
        if (prices.length > 0) {
            settingChartData(setChartData, prices);
        }
    };
    return (
        <div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                <div className={`grey-wrapper`} style={{ padding: "0rem 1rem" }}>
                    {coin_Data && <List coin={coin_Data} className="coin_list" />}
                </div>
                <div className={`grey-wrapper ${darkMode ? 'grey-wrapper-dark' : 'grey-wrapper-light'}`}>
                    <SelectDays days={days} handleDaysChange={handleDaysChange} />
                    <TogglePriceType
                    priceType={priceType}
                    handlePriceTypeChange={handlePriceTypeChange}
                />
                        <LineChart chartData={chartData} priceType={priceType} multiAxis={false}/>
                </div>
                {coin_Data && <CoinInfo heading={coin_Data.name} desc={coin_Data.desc} />}
                        </>
                    )}
        </div>
    )
}

export default Coin
