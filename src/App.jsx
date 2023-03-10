import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category_result from './components/Category_result'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Product_detail from './components/Product_detail'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[100%] md:w-[100%] lg:w-[1024px] mx-auto px-3 md:px-2 xl:px-0 '>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/detail/:id" element={<Product_detail />} />
          <Route path="/category/:cate_name" element={<Category_result />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App