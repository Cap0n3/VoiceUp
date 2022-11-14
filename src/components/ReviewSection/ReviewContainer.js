import React from "react";
import { ReviewSlide, ReviewBox } from "./ReviewSection.style";
import { ReviewData } from "./ReviewData";

// FOR MOBILE, ONLY PUT 1 ReviewBlock
const ReviewContainer = ({range, class_name, transitionTime}) => {
    const startSlice = range[0]
    const stopSlice = range[1]
    // Retrieve specific range of reviews (see slice method)
    const reviews = ReviewData.slice(startSlice, stopSlice)
    
    return(
        <ReviewSlide className={class_name} transitionTime={transitionTime}>
            {reviews.map((review, index) => (
                <ReviewBox key={index}>
                    <img src={review.studentPic} />
                    <blockquote>{review.quote}</blockquote>
                    <p>{review.studentName}</p>
                    <small>{review.roleFR}</small>
                </ReviewBox>
            ))}
        </ReviewSlide>
    );
}

export default ReviewContainer;