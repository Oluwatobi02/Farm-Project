import React from 'react'
import AboutHeaderImage from '../assets/aboutheader.png'
const AboutHeader = () => {
  return (
   <div className='home-about-page-heading'> 

    <div className='home-about-page-heading-text'>
      <div className='home-about-page-heading-actual-text'>
    <h1>A Visionary Pioneer of Natural Farming Revolutionizing Agricultural Practices</h1>
    <p>As we look ahead, UPGS Foundation remains committed to being a leader in the agricultural sector. Our vision is to inspire positive change, encourage sustainable practices across the industry, and contribute to the overall well-being of our community and beyond.

Explore our website to discover more about our journey, values, and the exceptional produce we offer. Join us in supporting a greener, healthier future through agriculture that thrives on excellence.

Thank you for choosing UPGS Foundation, where the seeds of excellence grow into a harvest of quality and sustainability.</p>
<button className='read-more-button'>Read more</button>
</div>
 </div>
 <img src={AboutHeaderImage} alt='about page heading' />
 </div>
  )
}




export default AboutHeader