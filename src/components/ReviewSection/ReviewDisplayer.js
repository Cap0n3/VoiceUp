import React from "react";
import { ReviewSlide, ReviewBox } from "./ReviewSection.style";
import { ReviewData } from "./ReviewData";

const ReviewDisplayer = ({slide, class_name, transitionTime}) => {
    const startSlice = slide[0];
    const stopSlice = slide[slide.length - 1];
    // Retrieve specific range of reviews
    const reviews = ReviewData.slice(startSlice, stopSlice + 1);
    
    return(
        <ReviewSlide className={class_name} transitionTime={transitionTime}>
            {reviews.map((review, index) => (
                <ReviewBox key={index}>
                    <img src={review.studentPic} title={review.picAlt} alt={review.picAlt} width="120" height="120" />
                    <blockquote>"{review.quote}"</blockquote>
                    <p>{review.studentName}</p>
                    <small>{review.roleFR}</small>
                </ReviewBox>
            ))}
        </ReviewSlide>
    );
}

export default ReviewDisplayer;