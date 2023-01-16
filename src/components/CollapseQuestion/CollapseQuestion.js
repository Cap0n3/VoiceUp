import { useState } from "react";
import { QuestionContainer, Question, Answer } from "./CollapseQuestion.style";

const CollapseQuestion = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false);

    return(
        <QuestionContainer>
            <Question onClick={() => setIsActive(!isActive)}>
                {question}
            </Question>
            <Answer className={isActive ? "active" : ""}>
                {answer}
            </Answer>
        </QuestionContainer>
    );
}

export default CollapseQuestion;