import React from "react";
import { ReviewSlide, ReviewBlock } from "./ReviewComponents.style";

// FOR MOBILE, ONLY PUT 1 ReviewBlock
const ReviewContainer = (props) => {
    return(
        <ReviewSlide>
            <ReviewBlock>
                <img src="https://www.fireflyorthoses.com/wp-content/uploads/peter-mclernon-profile-pic-square-bw.png" />
                <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</blockquote>
                <p>René F.</p>
                <small>Elève Voice-up</small>
            </ReviewBlock>
            <ReviewBlock>

            </ReviewBlock>
            <ReviewBlock>

            </ReviewBlock>
        </ReviewSlide>
    );
}

export default ReviewContainer;