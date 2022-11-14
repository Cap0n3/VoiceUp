import React from "react";
import { ReviewBox } from "../ReviewSection.style";

const ReviewBlock = (props) => {
    return(
        <ReviewBox>
            <img src={props.data.studentPic} />
            <blockquote>{props.data.studentPic}</blockquote>
            <p>{props.data.studentName}</p>
            <small>{props.data.roleFR}</small>
        </ReviewBox>
    );
    
}

export default ReviewBlock;