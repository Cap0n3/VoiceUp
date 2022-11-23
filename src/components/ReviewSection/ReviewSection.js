/*
This component is responsible for student reviews. It'll populate reviews
in slides depending on how many reviews user choose to show. A slide is simply
an array with review indexes range to display.
    
Example : [0, 1, 2] would mean display review with index 0, 1, 2.

When user want to change slide only the slide index (the array) will change 
which simplifiy the whole process of displaying reviews.
*/

import React, {useState, useEffect} from "react";
import { ReviewContainer } from "./ReviewSection.style";
import ReviewDisplayer from "./ReviewDisplayer";
import { ReviewData } from "./ReviewData";
import { BackwardArrow, ForwardArrow, DotWrapper, Dot } from "../../globalStyle";
import { VoiceUpColors } from "../../colors";

const ReviewSection = ({transitionTime, nbOfReviews}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reviewSlides, setReviewSlides] = useState([]);
    const [isActive, setIsActive] = useState(true);
    
    const changeSlide = (direction, slideIndex=null) => {
        // Get number of review slides for reference
        const lastSlideIndex = reviewSlides.length - 1

        if (direction === "forward") {
            // Check if we reached last review in array
            const isLastSlide = currentSlideIndex === lastSlideIndex;
            // Make disapear slide
            setIsActive(false);
            // Wait transition time and change slide
            setTimeout(() => {
                // If not last, then add one to range
                setCurrentSlideIndex(isLastSlide ? 0 : currentSlideIndex + 1);
            }, transitionTime);
        }
        else if (direction === "backward") {
            // Check if we reached last review in array
            const isFirstSlide = currentSlideIndex === 0;
            // Make disapear slide
            setIsActive(false);
            // Wait transition time and change slide
            setTimeout(() => {
                // If not first, go to last index
                setCurrentSlideIndex(isFirstSlide ? lastSlideIndex : currentSlideIndex - 1);
            }, transitionTime);
        }
        else if (direction === "toIndex" || slideIndex !== null) {
            // Make disapear slide
            setIsActive(false);
            // Wait transition time and change slide
            setTimeout(() => {
                // If not first, go to last index
                setCurrentSlideIndex(slideIndex);
            }, transitionTime);
        }
    }

    /**
     * Define review slides depending on nbOfReviews (per slide) parameters
     */
    useEffect(() => {
        /* 
        Create index list reference 
        Ex : if there's 5 reviews, create list [0, 1, 2, 3, 4]
        */
        let reviewsIndexRef = [];
        for(let i=0; i < ReviewData.length; i++) reviewsIndexRef.push(i);
        /* 
        Create reviews slides containing review indexes 
        Ex : if there's 5 reviews and we want 3 reviews per slide, create lists : 
            - [0, 1, 2] => first slide with 3 reviews
            - [3, 4] => second slide with only 2 reviews
        */
        let allReviewSlides = []
        while(reviewsIndexRef.length > 0) {
            // Extract indexes representing slide
            let reviewSlide = reviewsIndexRef.slice(0, nbOfReviews)
            // Remove extracted indexes from index list
            reviewsIndexRef.splice(0, nbOfReviews)
            allReviewSlides.push(reviewSlide)
        }
        setReviewSlides(allReviewSlides)
    }, [nbOfReviews]);

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
            changeSlide("forward");
        }, 12000);
        // clearing interval
        return () => clearInterval(timer);
    });

    return(
        <ReviewContainer>
            <ReviewDisplayer class_name={isActive ? "active" : "inactive"} slide={reviewSlides[currentSlideIndex] ? reviewSlides[currentSlideIndex] : ""} transitionTime={transitionTime} />
            <ForwardArrow color={VoiceUpColors.grey} onClick={() => {changeSlide("forward")}}></ForwardArrow>
            <BackwardArrow color={VoiceUpColors.grey} onClick={() => {changeSlide("backward")}}></BackwardArrow>
            <DotWrapper>
                {reviewSlides.map((slide, slideIndex) => (
                    <Dot key={slideIndex} className={(slideIndex === currentSlideIndex) ? "active" : "inactive" } onClick={() => changeSlide("toIndex", slideIndex)}>
                        ●
                    </Dot>
                ))}
            </DotWrapper>
        </ReviewContainer>  
    );
}

export default ReviewSection;