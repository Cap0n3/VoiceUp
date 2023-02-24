import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;

const QuestionHeight = 70;

export const CollapseContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${DEBUG ? "background-color: pink;" : ""}
`;

export const Question= styled.p`
    display: flex;
    align-items: center;
    height: ${QuestionHeight}px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.headingsWeight};
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

    /* Tablet */
    @media only screen and (max-width: 1024px) and (min-width: 450px) {    
        /* CODE */
        font-size: ${FONT_SIZES.mobileBody};
    }

    /* Standard mobile */
    @media only screen and (max-width: 450px) {
        /* height: 90px; */
        font-size: ${FONT_SIZES.mobileQuestionCollapse};
    }
`;

export const AnswerWrapper = styled.div`
    height: ${({height}) => (height ? height : 0)}px;
    overflow: hidden;
    transition: height .4s ease;
    border-bottom: 0.3px solid ${VoiceUpColors.grey};
`;

export const Answer = styled.p`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.bodyWeight};
    padding: 0 20px 20px 20px;
    ${DEBUG ? "background-color: lightgreen;" : ""}

    /* Tablet */
    @media only screen and (max-width: 1024px) and (min-width: 450px) {    
        /* CODE */
        font-size: ${FONT_SIZES.mobileBody};
    }

    /* Standard mobile */
    @media only screen and (max-width: 450px) {
        font-size: ${FONT_SIZES.mobileQuestionCollapse};
    }
`;