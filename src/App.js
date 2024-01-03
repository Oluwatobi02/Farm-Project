import React from 'react'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"
import Product from "./pages/Products"
import Story from './pages/Story'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Product />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"/ourstory"} element={<Story />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App