import React from 'react'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Product from "./pages/Products"
import Story from './pages/Story'
import Map from './pages/Map'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { mapOptions } from './components/MapConfiguration'
import { useJsApiLoader } from '@react-google-maps/api'

const App = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: mapOptions.mapId,
  //   googleMapsApiKey: mapOptions.googleMapApiKey
  // })
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Product />} />
        <Route path={"/about"} element={<Story />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/map"} element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App