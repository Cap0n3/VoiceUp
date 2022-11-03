import React, { useState } from 'react';
import { SliderWrapper, TextBox, LeftArrow, RightArrow } from './ImageSlider.style';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Slide change functions
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return(
        <SliderWrapper imageURL={slides[currentIndex].url} test={"HELLO"}>
            <LeftArrow onClick={goToPrevious}>❰</LeftArrow>
            <RightArrow onClick={goToNext}>❱</RightArrow>
            <TextBox>
                <h1>{slides[currentIndex].title}</h1>
                <p>{slides[currentIndex].description}</p>
            </TextBox>       
        </SliderWrapper>
    );
}

export default ImageSlider;