import styled, { keyframes } from "styled-components";
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
    border-bottom: 0.3px solid ${VoiceUpColors.grey};
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

/*
    First, do not indicate a height to calculate natural <QuestionAnswerWrapper> height.
    Wrapper will be created with Question + Answer and total <QuestionAnswerWrapper> height will be calculated.
    Then, when height was calculated, set height to 0 to make answer invisible.
    Finally, simply get previously set state containing calculated height to open answer at the right size.

    Note : it's a weird technique to avoid a ton a headaches with transition effect and autosizing answer ...
*/
export const Answer = styled.p`
    display: flex;
    align-items: center;
    overflow: hidden;
    ${({wrapperHeight}) => (wrapperHeight ? "height: 0;" : "")}
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    opacity: 0;
    transition: all .4s ease-in-out;
    ${DEBUG ? "background-color: lightgreen;" : ""}

    &.isOpen {
        opacity: 1;
        height : ${({wrapperHeight}) => (wrapperHeight - QuestionHeight + 20)}px;
        padding-bottom: 20px;
    }
`;