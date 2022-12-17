import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes } from "../../globalVars";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Show borders/background for debugging css
const DEBUG = false;

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #000;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => {
        // console.log(props.imageURL)
        return `url(${props.imageURL})`
    }};
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${VoiceUpColors.black};
    z-index: 1;

    &.active {
        opacity: 1;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }

    &.inactive {
        opacity: 0;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }

    @media only screen and (max-width: 1024px) {
        background-position: 65% 20%;      
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
    width: 45%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    left: 15%;
    ${DEBUG ? "border: 1px solid pink;" : ""}
    z-index: 900;

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
        /* left: 25%;
        width: ${({headerWidth}) => (
            headerWidth ? `${(headerWidth / 2)}px` : "50px"
        )}; */
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow-x: visible;
    overflow-wrap: break-word;
    
    & > h1 {
        color: ${VoiceUpColors.white};
        font-size: ${ftSizes.M_ftSizeXL};
        text-transform: uppercase;
        font-weight: normal;
        margin-bottom: 30px;
        ${DEBUG ? "background: lightgreen;" : ""}
    }

    & > p {
        font-size: ${ftSizes.M_ftSizeMD};
        color: ${VoiceUpColors.white};
        ${DEBUG ? "background: cyan;" : ""}
    }

    @media only screen and (max-width: 1024px) {
        align-items: center;

        & > h1 {
            text-align: center;
            font-size: ${ftSizes.S_ftSizeXL};
        }
        
        & > p {
            font-size: ${ftSizes.S_ftSizeMD};
            text-align: center;
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