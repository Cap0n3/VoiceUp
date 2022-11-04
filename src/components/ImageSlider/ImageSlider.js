import React, { useEffect, useState } from 'react';
import { SliderWrapper, Slide, TextBox, LeftArrow, RightArrow } from './ImageSlider.style';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isActive, setIsActive] = useState(true);
    
    // === Slide change functions === //

    /**
     * This function changes slide and trigger opacity change by setting state to false
     * and therefore changing class name.
     * 
     * Note : mainly here to stay DRY.
     * 
     * @param   {int}   new_index   - Image index to select
     */
    const changeAndFadeOpacity = (new_index) => {
        // First, make disappear slide image
        setIsActive(false);
        // Then, wait transition to finish and change image to next one
        setTimeout(() => {
            setCurrentIndex(new_index);
        }, 500);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        changeAndFadeOpacity(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        changeAndFadeOpacity(newIndex);
    };
    /**
     * Here to make slide reappear by changing back class to active.
     */
    useEffect(() => {
        if(isActive === false) {
            setTimeout(() => {
                setIsActive(true);
            }, 500);
        }
    }, [isActive]);

    return(
        <SliderWrapper>
            <LeftArrow onClick={goToPrevious}>❰</LeftArrow>
            <RightArrow onClick={goToNext}>❱</RightArrow>
            <Slide imageURL={slides[currentIndex].url} className={isActive ? "active" : "inactive"}></Slide>
            <TextBox>
                <h1>{slides[currentIndex].title}</h1>
                <p>{slides[currentIndex].description}</p>
            </TextBox>       
        </SliderWrapper>
    );
}

export default ImageSlider;