import styled from "styled-components";

const DEBUG = true;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    ${DEBUG ? "background-color: pink;" : ""}
`;

export const Question= styled.p`
    display: flex;
    padding: 40px 20px 40px 20px;
    width: 100%;
    ${DEBUG ? "background-color: lightblue;" : ""}
`;

export const Answer = styled.p`
    display: none;
    padding: 40px 20px 40px 20px;
    width: 100%;
    ${DEBUG ? "background-color: lightgreen;" : ""}

    &.active {
        display: flex;
    }
`;