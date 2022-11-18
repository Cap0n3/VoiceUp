import React, {useState, useEffect} from "react";
import { ReviewWrapper } from "./ReviewSection.style";
import ReviewContainer from "./ReviewContainer";
import { ReviewData } from "./ReviewData";

const ReviewSection = ({transitionTime, nbOfReviews}) => {
    const [reviewsIndexRange, setReviewsIndexRange] = useState({
        startIndex : null, 
        endIndex : null
    });
    const [isActive, setIsActive] = useState(true);

    const changeReviews = (direction) => {
        // Set initial indexes reference
        const initStartIndex = 0
        const initEndIndex = nbOfReviews - 1
        // Get current index range
        const currentStart = reviewsIndexRange.startIndex;
        const currentEnd = reviewsIndexRange.endIndex;
        // Get last review index
        const lastReviewIndex = (ReviewData.length - 1);
        // Set step increment (number of reviews to be displayed at once)
        const step = nbOfReviews
        let newIndexRange = { startIndex : null, endIndex : null}

        if (direction === "forward") {
            // Check if we reached last review in array
            const isLastReview = currentEnd >= lastReviewIndex;
            // If not last, then add one to range
            newIndexRange.startIndex = isLastReview ? initStartIndex : currentStart + step;
            newIndexRange.endIndex = isLastReview ? initEndIndex : currentEnd + step;
        }
        else if (direction === "backward") {
            // Check if we reached first review in array
            const isFirstReview = currentStart === 0;
            // If not first, then substract one to range
            newIndexRange.startIndex = isFirstReview ? (lastReviewIndex - (step - 1)) : currentStart - step;
            newIndexRange.endIndex = isFirstReview ? lastReviewIndex : currentEnd - step;
        }
        // First, make disappear slide image with opacity
        setIsActive(false);
        // Then, wait opacity transition to finish and change image to next one
        setTimeout(() => {
            setReviewsIndexRange(reviewsIndexRange => ({...reviewsIndexRange, ...newIndexRange}))
        }, transitionTime);
    }

    /**
     * On first render, set initial review index range according 
     * to number of review that should be displayed.
     */
    useEffect(() => {
        const initialIndexRange = { startIndex : 0, endIndex : (nbOfReviews - 1)}
        setReviewsIndexRange(reviewsIndexRange => ({...reviewsIndexRange, ...initialIndexRange}));
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
            {console.log(reviewsIndexRange)}
            <ReviewWrapper>
                <ReviewContainer class_name={isActive ? "active" : "inactive"} range={[reviewsIndexRange.startIndex, reviewsIndexRange.endIndex]} transitionTime={transitionTime} />
            </ReviewWrapper>
            <button onClick={() => {changeReviews("backward")}}>Backward</button>
            <button onClick={() => {changeReviews("forward")}}>Forward</button>
        </>
    );
}

export default ReviewSection;