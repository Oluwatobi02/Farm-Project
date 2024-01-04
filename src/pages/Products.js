import React from 'react'
import Nav from '../components/Nav'

const Products = () => {
  return (
    <>
    <Nav />

      <div className='product-page-container'>
        <h1><i>Products</i></h1>

        <div className='under-product-text-container'>
        <div className='under-product-text-items'>
          <div className='items'>
          <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-products-icon1.png' alt='bee' />
          <div className='items-text'>
          <h2>Quantum perro</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          </div>

          <div className='items'>
          <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-products-icon1.png' alt='bee' />
          <div className='items-text'>
          <h2>Quantum perro</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          </div>

          <div className='items'>
          <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-products-icon1.png' alt='bee' />
          <div className='items-text'>
          <h2>Quantum perro</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          </div>
          
        </div>
        </div>
      </div>
    </>
  )
}



export default Products