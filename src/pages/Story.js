import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import ProductData from '../lib/productData';
import ReusableDiv from '../components/ReusableDiv';
import AboutHeader from '../components/AboutHeader';
import BottomPage from '../components/BottomPage';


const Story = () => {
  return (
    <>
    <Nav />
    <div className='story-container'>
      <div className='story-image'>
        <div className='story-image-text'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
</div>
      </div>

      <div className='story-second-container'>
        <p className='left'>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris. Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum</p>
        <p className='right'>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris. Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum</p>
      
      </div>
      <div className='carousel-container'>
    <Carousel images={ProductData.slice(0,3)}/>
    </div>
   <ReusableDiv />
    <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-story-pic2.jpg' alt='under reusable div' className='under-reusable-div-img'/>
   <ReusableDiv />

   <AboutHeader />

   <BottomPage />
      
    </div>
    </>
  )
}


export default Story
