import React from 'react'
import Nav from '../components/Nav'
import AlternatingSection from '../components/AlternatingSection'
import ProductData from '../lib/productData'
import BottomPage from '../components/BottomPage'

const Products = () => {
  return (
    <>
    <Nav />

      <div className='product-page-container'>
        <h1 className='product-page-header-text'><i>Products</i></h1>

        <div className='under-product-text-container'>
        <div className='under-product-text-items'>
          <div className='items'>
          <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-products-icon1.png' alt='bee' />
          <div className='items-text'>
          <h2>Pests</h2>
          <p>Persistent threats to crops, Relentless adversaries in agriculture, challenge resilient strategies for safeguarding precious crops.</p>
          </div>
          </div>

          <div className='items'>
          <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-products-icon2.png' alt='bee' />
          <div className='items-text'>
          <h2>Irrigation</h2>
          <p>A silent force, choreographs life in the fields, ensuring crops flourish with a well-timed dance of water. Precision in every drop transforms barren land into thriving landscapes.</p>
          </div>
          </div>

          <div className='items'>
          <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-products-icon3.png' alt='bee' />
          <div className='items-text'>
          <h2>Farmers</h2>
          <p>Stewards of the Land, Earth's Champions, Cultivating Prosperity with Grit, Passion and Perseverance.</p>
          </div>
          </div>
          
        </div>
        </div>
        <AlternatingSection ProductData={ProductData}/>
        <div>
        <BottomPage />
        </div>
      </div>
    </>
  )
}



export default Products