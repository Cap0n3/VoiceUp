import React, {useState, useEffect} from "react";
import { ReviewWrapper } from "./ReviewSection.style";
import ReviewContainer from "./ReviewContainer";
import { ReviewData } from "./ReviewData";

const transitionTime = 1000

const ReviewSection = () => {
    const [reviewsIndex, setReviewsIndex] = useState({
        start : 0, 
        end : 1
    });
    const [isActive, setIsActive] = useState(true);

    const goToNextRange = () => {
        // Get current range
        const currentStart = reviewsIndex.start
        const currentEnd = reviewsIndex.end
        // Check if we reached last review in array
        const isLastReview = currentEnd === ReviewData.length;
        // If not last, then move range
        const newStart = isLastReview ? 0 : currentStart + 1;
        const newEnd = isLastReview ? 1 : currentEnd + 1;
        const foo = {start : newStart, end : newEnd}
        // First, make disappear slide image with opacity
        setIsActive(false);
        // Then, wait opacity transition to finish and change image to next one
        setTimeout(() => {
            setReviewsIndex(reviewsIndex => ({...reviewsIndex, ...foo}))
        }, transitionTime);
    }

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
            {console.log(reviewsIndex)}
            <ReviewWrapper>
                <ReviewContainer class_name={isActive ? "active" : "inactive"} range={[reviewsIndex.start, reviewsIndex.end]} transitionTime={transitionTime} />
            </ReviewWrapper>
            <button onClick={goToNextRange}>Click Me</button>
        </>
    );
}

export default ReviewSection;