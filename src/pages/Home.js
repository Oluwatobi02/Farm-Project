import React from 'react'
import Nav from '../components/Nav'
import ProductBox from '../components/ProductBox'
import ReusableDiv from '../components/ReusableDiv'
import Carousel from '../components/Carousel'
import ProductData from '../lib/productData';
import FarmerDiv from '../components/FarmerDiv'
import AboutHeader from '../components/AboutHeader'
import BottomPage from '../components/BottomPage'


const Home = () => {
  return (<>
    <Nav />
    <div className='content-container'>
    <div className='homepage'>
      <div className='homepage-image'>

     
      <div className='homepagetext'>
        <h2>Welcome to the place where natural flavor is born</h2>
      </div>
        <hr className='small-hr'/>
      <div className='homepage-divider-text'>
        <h2><i>Discover Our Product</i></h2>
      </div>
      <div className='body-container'>
      <ProductBox products={ProductData}/>
      
      <div className='below-products-container'>
    <div className='below-products'>
      <h2>Want to learn more about our farm?</h2>
      <button className='read-more-button'>Explore </button>
      </div>
    </div>
    <ReusableDiv />
    <div className='carousel-container'>
    <Carousel images={ProductData.slice(0,3)}/>
    </div>
    <FarmerDiv />
   <AboutHeader />
    <BottomPage />
    </div>
      </div>

    
    </div>
    </div>
    </>
  )
}


export default Home