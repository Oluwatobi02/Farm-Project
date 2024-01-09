import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Carousel = ( {images}) => {
    const [ slide, setSlide ] = useState(0);
    const nextSlide = () => {
 setSlide(slide === images.length -1 ? 0 : slide +1)
    }

    const prevSlide = () => {
setSlide(slide=== 0 ? images.length-1 : slide-1)
    }
  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {images?.map((item, idx) => (
            <img src={item.groupImg} alt={item.title} className={slide=== idx ? "slide" : "slide-hidden"}/>
        ))}
<BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
<span className='indicators'>
    {images?.map((_, idx) => (
        <button key={idx} onClick={() => setSlide(idx)}
         className={slide=== idx ? 'indicator' : "indicator indicator-inactive"}></button>
    ))}
</span>
    </div>
  )
}


export default Carousel;