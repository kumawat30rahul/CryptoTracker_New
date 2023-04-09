import React,{useState,useEffect} from 'react'
import Search from '../Components/Dashboard/Search';
import Header from '../Components/Common/Header';
import CoinNavgationTabs from '../Components/Dashboard/Tabs';
import {coinsFetch} from '../DataFetching/coinsFetch'
import PaginationButtons from '../Components/Dashboard/Pagination';

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange=(event,value)=>{
    setPage(value);
    const previousIndex = (value-1) *10
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10))
  }
  const onSearchChange =(e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const coins = await coinsFetch();
    if(coins){
        setCoins(coins)
        setPaginatedCoins(coins.slice(0,10))
        setIsLoading(false);
    }
  }

  return (
    <div>
    <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <CoinNavgationTabs coins={paginatedCoins}/>
      <PaginationButtons 
        page={page}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}

export default Dashboard
