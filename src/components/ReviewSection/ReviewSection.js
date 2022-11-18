import React, {useState, useEffect} from "react";
import { ReviewWrapper } from "./ReviewSection.style";
import ReviewContainer from "./ReviewContainer";
import { ReviewData } from "./ReviewData";

const ReviewSection = ({transitionTime, nbOfReviews}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reviewSlides, setReviewSlides] = useState([]);
    const [isActive, setIsActive] = useState(true);

    const changeSlide = (direction) => {
        // Get number of review slides
        const lastSlideIndex = reviewSlides.length - 1

        if (direction === "forward") {
            // Check if we reached last review in array
            const isLastSlide = currentSlideIndex === lastSlideIndex;
            // If not last, then add one to range
            setCurrentSlideIndex(isLastSlide ? 0 : currentSlideIndex + 1);
        }
        else if (direction === "backward") {
            // Check if we reached last review in array
            const isFirstSlide = currentSlideIndex === 0;
            // If not last, then add one to range
            setCurrentSlideIndex(isFirstSlide ? lastSlideIndex : currentSlideIndex - 1);
        }
        // First, make disappear slide image with opacity
        // setIsActive(false);
        // Then, wait opacity transition to finish and change image to next one
        // setTimeout(() => {
        //     setReviewsIndexRange(reviewsIndexRange => ({...reviewsIndexRange, ...newIndexRange}))
        // }, transitionTime);
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
            let reviewSlide = reviewsIndexRef .slice(0, nbOfReviews)
            // Remove extracted indexes from index list
            reviewsIndexRef.splice(0, nbOfReviews)
            allReviewSlides.push(reviewSlide)
        }
        setReviewSlides(allReviewSlides)
    }, []);

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

    return(
        <>
            <ReviewWrapper>
                <ReviewContainer class_name={isActive ? "active" : "inactive"} slide={reviewSlides[currentSlideIndex]} transitionTime={transitionTime} />
            </ReviewWrapper>
            <button onClick={() => {changeSlide("backward")}}>Backward</button>
            <button onClick={() => {changeSlide("forward")}}>Forward</button>
        </>
    );
}

export default ReviewSection;