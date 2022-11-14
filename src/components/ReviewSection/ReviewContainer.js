import React from "react";
import { ReviewSlide, ReviewBox } from "./ReviewSection.style";
import { ReviewData } from "./ReviewData";

// FOR MOBILE, ONLY PUT 1 ReviewBlock
const ReviewContainer = (props) => {
    return(
        <ReviewSlide>
            {ReviewData.map((ReviewData, index) => (
                <ReviewBox key={index}>
                    <img src={ReviewData.studentPic} />
                    <blockquote>{ReviewData.quote}</blockquote>
                    <p>{ReviewData.studentName}</p>
                    <small>{ReviewData.roleFR}</small>
                </ReviewBox>
            ))}
        </ReviewSlide>
    );
}

export default ReviewContainer;