import React,{useState,useEffect, useContext} from 'react'
import Search from '../Components/Dashboard/Search';
import Header from '../Components/Common/Header';
import CoinNavgationTabs from '../Components/Dashboard/Tabs';
import {coinsFetch} from '../DataFetching/coinsFetch'
import PaginationButtons from '../Components/Dashboard/Pagination';
import { DarkModeProvider } from '../App';

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const {darkMode} = useContext(DarkModeProvider)

  const handlePageChange=(event,value)=>{
    setPage(value);
    const previousIndex = (value-1) *10
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10))
  }
  const onSearchChange =(e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    if(coins){
      let data = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      setFilteredCoins(data)
    }
  },[search])

  useEffect(()=>{
    fetchData()
  },[])


  const fetchData = async ()=>{
    setIsLoading(true);
    const coins = await coinsFetch();
    if(coins){
        setCoins(coins)
        setPaginatedCoins(coins.slice(0,10))
        setIsLoading(false);
    }
  }

  return (
    <div className={`dashboard-div-wrapper ${darkMode ? 'dashboard-div-dark' : 'dashboard-div-light' }`}>
      <Search search={search} onSearchChange={onSearchChange} />
        <CoinNavgationTabs coins={search ? filteredCoins : paginatedCoins} isLoading={isLoading}/>
        {!isLoading && 
        <>
            {!search && 
            <PaginationButtons 
              page={page}
              handlePageChange={handlePageChange}
            />
            }
        </>
        }
    </div>
  )
}

export default Dashboard
