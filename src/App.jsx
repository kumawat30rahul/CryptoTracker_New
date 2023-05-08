import React, { createContext, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Coin from './Pages/Coin'
import Compare from './Pages/Compare'
import WatchList from './Pages/WatchList'
import store from './redux/Store/store'
import { Provider } from 'react-redux'
import Header from './Components/Common/Header'
import { useEffect } from 'react'

export const DarkModeProvider = createContext()
function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=>{
    if(darkMode){
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  },[darkMode])

  return (
    <DarkModeProvider.Provider value={{darkMode,setDarkMode}}>
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Provider store={store}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/compare' element={<Compare />} />
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='/coin/:id' element={<Coin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
    </DarkModeProvider.Provider>
  )
}

export default App
