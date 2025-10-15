
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import EmpInert from './Pages/CustomerInsert'
import AdminLogin from './Pages/AdminLogin'
import CustomerLogin from './Pages/CustomerLogin'
import Admindashboard from './Admin/Admindashboard'
import AddProduct from './Admin/AddProduct'
import CartData from './Pages/CartData'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='insert' element={<EmpInert/>}/>
      <Route path='customerlogin' element={<CustomerLogin/>}/>
      <Route path='adminlogin' element={<AdminLogin/>}/>
      <Route path='cartdata' element={<CartData/>}/>
      </Route>
    </Routes>
    <Routes>
    <Route path='admin' element={<Admindashboard/>}>
    <Route path='addproduct' element={<AddProduct/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
