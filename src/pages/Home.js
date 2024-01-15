import React from 'react'
import Nav from '../components/Nav'
import ProductBox from '../components/ProductBox'
import ReusableDiv from '../components/ReusableDiv'
import Carousel from '../components/Carousel'
import ProductData from '../lib/productData';
import FarmerDiv from '../components/FarmerDiv'
import AboutHeader from '../components/AboutHeader'
import BottomPage from '../components/BottomPage'
import ReactPlayer from 'react-player'
import homeBackgroundVideo from '../assets/home-background-video.mp4'; // Import the video file


const Home = () => {
  return (<>
    <div className='content-container'>
    <div className='homepage'>
    <Nav />
      <div className='homepage-image'>
        <ReactPlayer url={homeBackgroundVideo} playing loop muted width='100%' height='100%' />
      <div className='homepagetext'>
        <h4>Welcome to the place where</h4>
          <h4>natural flavor is born</h4>
        <hr className='small-hr'/>
      </div>
      <div className='homepage-divider-text'>
        <h2><i>Discover Our Product</i></h2>
      </div>
      <ProductBox products={ProductData}/>
      <div className='body-container'>
      
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