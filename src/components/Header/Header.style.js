import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import * as globVars from "../../globalVars";

// Show borders/background for debugging css
const DEBUG = true;

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: ${globVars.headerHeight}px;
    overflow: hidden;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const SlideImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${({imageURL}) => `url(${imageURL})`};
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: 100%;
`;

export const SlideOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 5;
`;

export const BoxWrapper = styled.div`
    width: 45%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;  
    left: 15%;
    ${DEBUG ? "border: 1px solid pink;" : ""}
    z-index: 500;

    &.active {
        opacity: 1;
        height: 100%;
        transition: ${({transitionTime}) => {
            const duration = transitionTime;
            const boxWait = transitionTime + 250;
            return `opacity ${duration}ms ${boxWait}ms ease, height ${duration + 400}ms ${boxWait}ms ease`
        }};
    }

    &.inactive {
        opacity: 0;
        height: 0;
        transition: ${({transitionTime}) => {
            const duration = transitionTime;
            return `opacity ${duration}ms ease, height ${duration}ms ease`
        }};
    }

    /* @media only screen and (max-width: 1024px) {
        left: 25%;
        width: ${({headerWidth}) => (
            headerWidth ? `${(headerWidth / 2)}px` : "50px"
        )};
    } */
`;

export const TextBox = styled.div`
    width: 100%;
    overflow-x: visible;
    overflow-wrap: break-word;
    
    & > h1 {
        color: ${VoiceUpColors.white};
        font-size: 4em;
        text-transform: uppercase;
        font-weight: normal;
        margin-bottom: 30px;

        @media only screen and (max-width: 1024px) {
            font-size: 2.2em;
        }
    }

    & > p {
        color: ${VoiceUpColors.white};
    }
`;