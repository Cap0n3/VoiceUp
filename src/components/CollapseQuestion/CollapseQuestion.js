import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { CollapseContainer, QuestionAnswerWrapper, Question, Answer } from "./CollapseQuestion.style";


const CollapseQuestion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [wrapperHeight, setWrapperHeight] = useState(null);
    const wrapperRef = useRef(null);

    /* Get wrapper size on first render */
    useLayoutEffect(() => {
        if(wrapperRef !== null){
            console.log(wrapperRef.current.clientHeight);
            setWrapperHeight(wrapperRef.current.clientHeight); 
        }
    }, [wrapperRef])

    // NOT WORKING
    useEffect(() => {
        const handleResize = () => {
            console.log(wrapperRef.current.clientHeight)
            setWrapperHeight(wrapperRef.current.clientHeight);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])

    return(
        <CollapseContainer>
            <QuestionAnswerWrapper ref={wrapperRef} className={isOpen ? "active" : ""}>
                <Question onClick={() => setIsOpen(!isOpen)} arrowDirection={isOpen}>
                    {question}
                </Question>
                <Answer className={isOpen ? "isOpen" : ""} wrapperHeight={wrapperHeight ? wrapperHeight : null}>
                    {answer}
                </Answer>
            </QuestionAnswerWrapper>
        </CollapseContainer>
    );
}

export default CollapseQuestion;