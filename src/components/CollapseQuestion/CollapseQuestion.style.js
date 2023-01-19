import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

const DEBUG = false;

const QuestionHeight = 70;

export const CollapseContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    ${DEBUG ? "background-color: pink;" : ""}
`;

export const QuestionAnswerWrapper = styled.div`
    height: ${QuestionHeight}px;
    overflow: hidden;
    border-bottom: 0.3px solid ${VoiceUpColors.grey};
    transition: height .3s ease-in-out;

    &.active {
        height: ${QuestionHeight * 2}px;
    }
`;

export const Question= styled.p`
    display: flex;
    align-items: center;
    height: ${QuestionHeight}px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600;
    background-color: ${DEBUG ? "lightblue" : `${VoiceUpColors.white}`};
    ${DEBUG ? "background-color: lightblue;" : ""}

    &:before {
        content: " ";
        width: 0px;
        height: 0px;
        /* Adjust offset when arrow moves */
        margin-top: ${({arrowDirection}) => (arrowDirection ? "4px" : "0")};
        margin-left: ${({arrowDirection}) => (arrowDirection ? "-4px" : "0")};
        margin-right: ${({arrowDirection}) => (arrowDirection ? "8px" : "4px")};
        /* Change arrow direction (true = down, false = right)*/
        border-left: 8px solid ${({arrowDirection}) =>  (arrowDirection ? "transparent" : "#000")};
        border-right: 8px solid ${({arrowDirection}) => (arrowDirection ? "transparent" : "transparent")};
        border-top: 8px solid ${({arrowDirection}) => (arrowDirection ? "#000" : "transparent")};
        border-bottom: 8px solid transparent;
    }
`;

export const Answer = styled.p`
    display: flex;
    align-items: center;
    height: ${QuestionHeight}px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;