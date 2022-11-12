import React, {useState} from "react";
import { ReviewWrapper } from "./ReviewComponents.style";
import ReviewContainer from "./ReviewContainer";

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <>
            <ReviewWrapper>
                <ReviewContainer data="" />
            </ReviewWrapper>
        </>
    );
}

export default ReviewSection;