import React, { useEffect, useState, useContext } from "react";
import { SliderWrapper, Slide, SlideOverlay, BoxWrapper, TextBox } from "./ImageSlider.style";
import { BackwardArrow, ForwardArrow, DotWrapper, Dot } from "../../globalStyle";
import { ScreenContext } from "../../contexts/screenContext";
import { Button } from "../../globalStyle";
import { LangContext } from '../../App';

const ImageSlider = ({slides, transitionTime}) => {
    const screenSize = useContext(ScreenContext);
    const {language} = useContext(LangContext);
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
            <BackwardArrow onClick={goToPrevious}></BackwardArrow>
            <ForwardArrow onClick={goToNext}></ForwardArrow>
            <Slide imageURL={slides[currentIndex].url} className={isActive ? "active" : "inactive"} transitionTime={transitionTime}>
                {(screenSize.innerWidth <= 960) ? <SlideOverlay></SlideOverlay> : ""}
            </Slide>      
            <BoxWrapper className={isActive ? "active" : "inactive"} transitionTime={transitionTime} headerWidth={screenSize.innerWidth ? screenSize.innerWidth : null}>
                <TextBox>
                    <h1>{(language === "FR") ? slides[currentIndex].titleFR : slides[currentIndex].titleEN}</h1>
                    <p style={{marginBottom: "40px"}}>{(language === "FR") ? slides[currentIndex].descriptionFR : slides[currentIndex].descriptionEN}</p>
                    <Button>{(language === "FR") ? slides[currentIndex].buttonFR : slides[currentIndex].buttonEN}</Button>
                </TextBox>
            </BoxWrapper>
            <DotWrapper>
                {slides.map((slide, slideIndex) => (
                    <Dot key={slideIndex} className={(slideIndex === currentIndex) ? "active" : "inactive" } onClick={() => goToSlide(slideIndex)}>
                        ●
                    </Dot>
                ))}
            </DotWrapper>     
        </SliderWrapper>
    );
}

export default ImageSlider;