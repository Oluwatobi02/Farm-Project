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
      <ProductBox />
    
    </div>
    </div>
    </>
  )
}


export default Home