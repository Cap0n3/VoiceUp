import React from "react";
import { ReviewSlide, ReviewBox } from "./ReviewSection.style";
import { ReviewData } from "./ReviewData";

// FOR MOBILE, ONLY PUT 1 ReviewBlock
const ReviewContainer = ({slide, class_name, transitionTime}) => {
    console.log("SLIDE CONTENT : " + slide)
    const startSlice = slide[0];
    const stopSlice = slide[slide.length - 1];
    console.log(startSlice + " : " + stopSlice)
    // Retrieve specific range of reviews
    const reviews = ReviewData.slice(startSlice, stopSlice + 1);
    
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