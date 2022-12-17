import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes, elementHeights } from "../../globalVars";

// Show borders/background for debugging css
const DEBUG = false;

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: ${elementHeights.headerHeight}px;
    overflow: hidden;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const SlideImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${({imageURL}) => `url(${imageURL})`};
    background-position: ${({posX, posY}) => `${posX}% ${posY}%`};
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: ${VoiceUpColors.black};

    @media only screen and (max-width: 1024px) {
        background-position: 65% 20%;
        background-size: cover;      
    }
`;

export const SlideOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 5;
`;

export const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 45%;
    position: absolute;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 900;
    opacity: 0;
    height: 0;
    transition: ${({transitionTime}) => {
        const duration = transitionTime;
        return `opacity ${duration}ms ease, height ${duration}ms ease`
    }};
    ${DEBUG ? "border: 1px solid pink;" : ""}
    
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

    @media only screen and (max-width: 1024px) {
        width: 80%;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow-x: visible;
    overflow-wrap: break-word;
    ${DEBUG ? "border: 1px solid yellow;" : ""}
`;

export const Title = styled.h1`
    color: ${VoiceUpColors.white};
    font-size: ${ftSizes.M_ftSizeXL};
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: 30px;
    ${DEBUG ? "background: lightgreen;" : ""}

    @media only screen and (max-width: 1024px) {
        font-size: ${ftSizes.S_ftSizeXL};
    }
`;

export const Description = styled.p`
    text-align: center;
    font-size: ${ftSizes.M_ftSizeMD};
    color: ${VoiceUpColors.white};

    ${DEBUG ? "background: cyan;" : ""}
`;