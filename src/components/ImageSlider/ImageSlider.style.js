import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

// Show borders for debugging
const debug = true;

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #000;
    ${debug ? "border: 1px solid red;" : ""}
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
    background-size: 100%;
    z-index: 1;

    &.active {
        opacity: 1;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }

    &.inactive {
        opacity: 0;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }

    @media screen and (max-width: 960px) {
        background-position: 65% 20%;
        background-size: cover;
        padding-left: 100px;    
    }
`;

export const BoxWrapper = styled.div`
    width: 45%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;  
    left: 15%;
    ${debug ? "border: 1px solid pink;" : ""}
    z-index: 900;
    overflow: visible;
    overflow-y: hidden;

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

    @media screen and (max-width: 960px) {
        left: 25%;
        width: ${({headerWidth}) => (
            headerWidth ? `${(headerWidth / 2)}px` : "50px"
        )};
    }
`;

export const TextBox = styled.div`
    width: 100%;
    overflow: visible;
    overflow-wrap: break-word;
    
    & > h1 {
        color: ${VoiceUpColors.white};
        font-size: 4em;
        text-transform: uppercase;
        font-weight: normal;
        margin-bottom: 30px;

        @media screen and (max-width: 960px) {
            font-size: 2.2em;
        }
    }

    & > p {
        color: ${VoiceUpColors.white};
    }
`;

export const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 40px;
    z-index: 999;
    cursor: pointer;
    ${debug ? "border: 1px solid purple;" : ""}

    @media screen and (max-width: 960px) {
        left 25px;
        font-size: 30px;
    }
`;

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 40px;
    z-index: 999;
    cursor: pointer;
    ${debug ? "border: 1px solid purple;" : ""}

    @media screen and (max-width: 960px) {
        right: 25px;
        font-size: 30px;
    }
`;