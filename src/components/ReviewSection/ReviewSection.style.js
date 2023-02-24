import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const debug = false;
const sectionHeight = 600;

export const ReviewContainer = styled.section`
    position: relative;
    width: 100%;
    height: ${sectionHeight}px;
    overflow: hidden;
    z-index: 1;
    background-color: ${debug ? "lightblue" : VoiceUpColors.white};
`;

// Review container style //

export const ReviewSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    width: 100%;
    height: ${sectionHeight}px;
    background-color: ${debug ? "lightgreen" : VoiceUpColors.white};

    &.active {
        opacity: 1;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }

    &.inactive {
        opacity: 0;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }
    
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
    height: ${sectionHeight - 100}px;
    overflow: hidden;
    ${debug ? "background-color: cyan;" : ""}

    & > img {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        border-radius: 50%;
    }

    & > blockquote {
        display: block;
        font-style: italic;
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        height: ${sectionHeight - 350}px;
        margin-bottom: 10px;
        overflow-y: auto;
        text-align: center;
        ${debug ? "border: 1px solid red;" : ""}
    }

    & > p {
        display: block;
        font-weight: 700;
        font-size: 0.9rem;
        text-align: center;
        font-style: bold;
        ${debug ? "border: 1px solid purple;" : ""}
    }

    & > small {
        display: block;
        font-style: italic;
        text-align: center;
        ${debug ? "border: 1px solid orange;" : ""}
    }

    /* Standard mobile & narrow */
    @media only screen and (max-width: 450px) {
        & > blockquote {
            font-size: ${FONT_SIZES.mobileBody};
        }
    }
`;

export const BackwardArrow = styled(IoIosArrowBack)`
    position: absolute;
    fill: ${({color}) => (color ? color : VoiceUpColors.white)};
    top: 50%;
    font-size: 2em;
    z-index: 999;
    cursor: pointer;
    transition: left 0.3s ease-in-out;
    
    &.show {
        left: 32px;   
    }

    &.hide {
        left: -32px;    
    }

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const ForwardArrow = styled(IoIosArrowForward)`
    position: absolute;
    fill: ${({color}) => (color ? color : VoiceUpColors.white)};
    top: 50%;
    font-size: 2em;
    z-index: 999;
    cursor: pointer;
    transition: right 0.3s ease-in-out;
    
    &.show {
        right: 32px;   
    }

    &.hide {
        right: -32px;    
    }

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const DotWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    right: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 998;
`;

export const Dot = styled.div`
    margin: 0 3px;
    cursor: pointer;

    &.active {
        color: ${VoiceUpColors.gold};
        font-size: 26px;
    }

    &.inactive {
        color: ${VoiceUpColors.gold};
        opacity: 0.6;
        font-size: 23px;
    }

    @media only screen and (max-width: 1024px) {
        margin: 0 8px;
    } 
`;