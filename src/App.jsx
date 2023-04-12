import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Coin from './Pages/Coin'
import Compare from './Pages/Compare'
import WatchList from './Pages/WatchList'
import store from './redux/Store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
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
  )
}

export default App
