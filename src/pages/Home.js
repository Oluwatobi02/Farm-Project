import React from 'react'
import Nav from '../components/Nav'
import ProductBox from '../components/ProductBox'


const Home = () => {
  return (<>
    <Nav />
    <div className='content-container'>
    <div className='homepage'>
      <div className='homepagetext'>
        <h1>Welcome to the place where </h1>
        <h1>natural flavor is born</h1>
        <hr className='small-hr'/>
      </div>
      <div className='homepage-divider-text'>
        <h2><i>Discover Our Product</i></h2>
      </div>

      <ProductBox />
      
    <div className='below-products-container'>
    <div className='below-products'>
      <h2>Lorem ipsum dolor sit consect eiusmod</h2>
      <button className='read-more-button'>Read More </button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}


export default Home