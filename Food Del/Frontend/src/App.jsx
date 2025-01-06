import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import   {Cart} from './pages/Cart/Cart.jsx'
import  Home  from './pages/Home/Home.jsx'
import PlaceOrder  from './pages/PlaceOrder/PlaceOrder.jsx'


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
        
    </div>
  )
}

export default App