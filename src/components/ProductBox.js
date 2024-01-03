import React, { useState } from 'react'
import AppleImg from '../assets/apple.png'
import ProductData from '../lib/productData';

const ProductBox = () => {
    const [ isBoxActive, setIsBoxActive ] = useState(false);

    const handleBoxClick = () => {
        setIsBoxActive(true)
        console.log(isBoxActive)
    }
    const handleBoxClose =() => {
        setIsBoxActive(false)
        console.log(isBoxActive)
    }
    const handleExplore = () => {
        console.log('Exploring')
    }

  return (<>
    <div className='product-box-container'>
        {ProductData.map((plant, index) => (
            <div className='product-box' key={index} onClick={handleBoxClick}>
            <div className='product-box-content'>
            <h1>{plant.title}</h1>
            <div className='img-wrapper'>
            <img src={plant.img} alt={plant.title} />
            </div>
            <p>{plant.shortDescription}</p>
            </div>
        </div>
    // {isBoxActive && ( 
    //        <div className='box-active' onClick={handleBoxClose}>
    //        <div className='box-active-container'>
    //         <div className='box-info-container'>
    //             <h1>Pears</h1>
    //          <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    //         </p>
    //       <p>To read more on this Click Explore</p>
    //       </div>
    //       <div className='button-container'>
    //       <button type='button' className='bottom-right-button' onClick={handleExplore}>Explore</button>
    //       <button type='button'className='bottom-right-button close-button' onClick={handleBoxClose}>Close</button>
    //       </div>
    //        </div>
    //    </div>)}
        ))}
        
       </div>
    </>
  )
}



export default ProductBox