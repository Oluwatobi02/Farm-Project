import React, { useEffect, useState } from 'react';


const ProductBox = ({ products }) => {
  const [activeBoxes, setActiveBoxes] = useState(Array(products.length).fill(false));

  const handleBoxClick = (index) => {
    const newActiveBoxes = [...activeBoxes];
    newActiveBoxes[index] = true;
    setActiveBoxes(newActiveBoxes);
    console.log(newActiveBoxes[index]);
  };

  const handleBoxClose = (index) => {
    const newActiveBoxes = [...activeBoxes];
    newActiveBoxes[index] = false;
    setActiveBoxes(newActiveBoxes);
    console.log(newActiveBoxes[index]);
  };

  const handleExplore = () => {
    console.log('Exploring');
  };


  return (
    <>
      <div className='product-box-container'>
        {products.slice(0,4)?.map((plant, index) => (
          <div className='product-box' id={index} key={index} >
            <div className='product-box-content'
            onClick={() => handleBoxClick(index)}>
              <h1>{plant.title}</h1>
              <div className='img-wrapper'>
                <img src={plant.singleImg} alt={plant.title} />
              </div>
              <p>{plant.shortDescription}</p>
            </div>

            {activeBoxes[index] && (
              <div className='box-active' 
              >
                <div className='box-active-container'
                onClick={() => handleBoxClose(index)}>
                  <div className='box-info-container'>
                    <h1>FUN FACT</h1>
                    <p>{plant.funFact}</p>
                    <p>To read more on this Click Explore</p>
                  </div>
                  <div className='button-container'>
                    <button type='button' className='bottom-right-button' onClick={handleExplore}>
                      Explore
                    </button>
                    <button type='button' className='bottom-right-button close-button' onClick={() => handleBoxClose(index)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductBox;
