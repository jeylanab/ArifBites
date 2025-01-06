import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart'


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-order" element={< Cart/>} />
        <Route path="/cart" element={<PlaceOrder />} />
      </Routes>
        
    </div>
  )
}

export default App