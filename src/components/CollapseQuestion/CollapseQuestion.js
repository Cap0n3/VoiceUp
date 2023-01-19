import { useState } from "react";
import { CollapseContainer, QuestionAnswerWrapper, Question, Answer } from "./CollapseQuestion.style";


const CollapseQuestion = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false);

    return(
        <CollapseContainer>
            <QuestionAnswerWrapper className={isActive ? "active" : ""}>
                <Question onClick={() => setIsActive(!isActive)} arrowDirection={isActive}>
                    {question}
                </Question>
                <Answer className={isActive ? "active" : ""}>
                    {answer}
                </Answer>
            </QuestionAnswerWrapper>
        </CollapseContainer>
    );
}

export default CollapseQuestion;