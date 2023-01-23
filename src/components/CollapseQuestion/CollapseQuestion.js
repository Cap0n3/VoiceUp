import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { CollapseContainer, Question, AnswerWrapper, Answer } from "./CollapseQuestion.style";


const CollapseQuestion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    return(
        <CollapseContainer>
            <Question onClick={() => setIsOpen(!isOpen)} arrowDirection={isOpen}>
                {question}
            </Question>
            <AnswerWrapper className={isOpen ? "active" : ""} ref={wrapperRef} height={isOpen ? wrapperRef.current.scrollHeight : null}>
                <Answer className={isOpen ? "isOpen" : "isClosed"}>
                    {answer} 
                </Answer>
            </AnswerWrapper>
        </CollapseContainer>
    );
}

export default CollapseQuestion;