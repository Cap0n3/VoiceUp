import React, { useEffect, useState, useContext } from 'react';
import { SliderWrapper, Slide, BoxWrapper, TextBox, LeftArrow, RightArrow } from './ImageSlider.style';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { ScreenContext } from '../../contexts/screenContext';

const iconStyle = {
    fontSize: "0.7em",
    fill: "white"
}

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};
  
const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};

const ImageSlider = ({slides, transitionTime}) => {
    const screenSize = useContext(ScreenContext);
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
        // First, make disappear slide image with opacity
        setIsActive(false);
        // Then, wait opacity transition to finish and change image to next one
        setTimeout(() => {
            setCurrentIndex(new_index);
        }, transitionTime);
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

    const goToSlide = (slideIndex) => {
        changeAndFadeOpacity(slideIndex);
    };
    
    /**
     * Here to make slide reappear by changing back class to active.
     */
    useEffect(() => {
        if(isActive === false) {
            // Wait transition time and make image appear again
            setTimeout(() => {
                setIsActive(true);
            }, transitionTime);
        }
    }, [isActive]);

    /**
     * Timer for slides (auto change)
     */
    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 8000);
        // clearing interval
        return () => clearInterval(timer);
    });

    return(
        <SliderWrapper>
            <LeftArrow onClick={goToPrevious}>
                <BsArrowLeftCircle style={iconStyle} />
            </LeftArrow>
            <RightArrow onClick={goToNext}>
                <BsArrowRightCircle style={iconStyle} />
            </RightArrow>
            <Slide imageURL={slides[currentIndex].url} className={isActive ? "active" : "inactive"} transitionTime={transitionTime}></Slide>
            <BoxWrapper className={isActive ? "active" : "inactive"} transitionTime={transitionTime} headerWidth={screenSize.innerWidth ? screenSize.innerWidth : null}>
                <TextBox>
                    <h1>{slides[currentIndex].title}</h1>
                    <p>{slides[currentIndex].description}</p>
                </TextBox>   
            </BoxWrapper>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        ●
                    </div>
                ))}
            </div>     
        </SliderWrapper>
    );
}

export default ImageSlider;