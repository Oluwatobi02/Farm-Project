import React, { useState } from 'react';
import ReactDOM  from 'react-dom';


const ProductBox = ({ products }) => {
  const [activeBoxes, setActiveBoxes] = useState(Array(products.length).fill(false));

  const handleBodyScroll = (disable) => {
    if (disable) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const handleBoxClick = (index) => {
    const newActiveBoxes = [...activeBoxes];
    newActiveBoxes[index] = true;
    setActiveBoxes(newActiveBoxes);
    handleBodyScroll(true);
    
  };

  const handleBoxClose = (index) => {
    const newActiveBoxes = [...activeBoxes];
    newActiveBoxes[index] = false;
    setActiveBoxes(newActiveBoxes);
    console.log(newActiveBoxes[index]);
    handleBodyScroll(false);
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

            {activeBoxes[index] && ReactDOM.createPortal(
              <div className='box-active' 
              onClick={() => handleBoxClose(index)}>
                <div className='box-active-container'
                onClick={() => handleBoxClose(index)}>
                  <div className='box-info-container'
                  onClick={(e) => e.stopPropagation()}>
                    <h1>FUN FACT</h1>
                    <p>{plant.funFact}</p>
                    <p><i>To read more on this Click Explore</i></p>
                  </div>
                  <div className='button-container'>
                    <button type='button' className='bottom-right-button' onClick={(e) => {
                      e.stopPropagation();
                      handleExplore()}}>
                      Explore
                    </button>
                    <button type='button' className='bottom-right-button close-button' onClick={(e) => {
                      e.stopPropagation();
                      handleBoxClose(index)}}>
                      Close
                    </button>
                  </div>
                </div>
              </div>,
              document.body
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductBox;
