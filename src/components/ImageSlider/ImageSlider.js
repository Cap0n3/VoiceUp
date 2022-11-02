import React, { useState } from 'react';
import { SliderWrapper } from './ImageSlider.style';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <SliderWrapper imageURL={slides[currentIndex].url} test={"HELLO"}>
            <div style={{border: `1px solid pink`}}>
                <h1 style={{marginBottom: `20px`, color: `white`}}>{slides[currentIndex].title}</h1>
                <p style={{color: `white`}}>{slides[currentIndex].description}</p>
            </div>
            
        </SliderWrapper>
    );
}

export default ImageSlider;