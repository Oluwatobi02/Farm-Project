import React from 'react'

const AlternatingSection = ({ ProductData }) => {
    return (
        <div className="alternating-sections">
          {ProductData.slice(0,5)?.map((data, index) => (
            <div key={index} className={`alternating-section ${index % 2 === 1 ? 'even' : ''}`}>
              <div className="text">
                <h1>{data.title}</h1>
                <p>{data.fullDescription}</p>
                <button className='read-more-button'>Read more</button>
              </div>
              <img src={data.singleImg} alt={`Image ${index + 1}`} className='alternating-image' />
            </div>
          ))}
        </div>
      );
}



export default AlternatingSection