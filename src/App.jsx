import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Coin from './Pages/Coin'
import Compare from './Pages/Compare'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/coin/:id' element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
