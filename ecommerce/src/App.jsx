import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import { NotFound } from './pages/NotFound';
// Lesson 6h already done
function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
