import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { VoiceUpColors } from "./colors";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        color: ${VoiceUpColors.black};
    }

    body {
        min-width: fit-content;
    }

    &.main {
        height: 100vh;
        overflow-y: auto;
        perspective: 10px; /* For parallax FX */
        z-index: 1;
    }

    &.cursiveSpan {
        color: ${VoiceUpColors.altGrey};
        font-family: 'Yellowtail', cursive;
        text-transform: lowercase;
    }

    &.socialIcons {
        fill: ${VoiceUpColors.white};
        width: 35px;
        cursor: pointer;
        transition: .3s;

        &:hover {
            filter: drop-shadow(3px 5px 2px ${VoiceUpColors.purple});
        }
    }
`;

const pulse = keyframes`
    from {
        box-shadow: 0 0 0 0 #D9B47D;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;

    ${'' /* @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    } */}
`;

// For more cool button FX : https://alvarotrigo.com/blog/best-css-button-hover-effects/
export const OutlineBtn = styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    color: ${VoiceUpColors.white};
    font-size: 16px;
    outline: none;
    background: none;
    border: 2px solid ${VoiceUpColors.white};
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        border-color: ${VoiceUpColors.gold};
        animation: ${pulse} 1s;
        box-shadow: 0 0 0 2em rgba(255,255,255, 0);
    }
    
    @media screen and (max-width: 960px) {
        width: 100%;
        padding: 12px 30px;
    }
`;

export const FilledBtn =  styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    color: ${VoiceUpColors.white};
    background: ${VoiceUpColors.gold};
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        background: #d19162;
        box-shadow: 0 0.5em 0.5em -0.4em ${VoiceUpColors.black};
        transform: translateY(-0.25em);
    }
`;

// Arrows & Dots on Header & review slider
export const BackwardArrow = styled(IoIosArrowBack)`
    position: absolute;
    fill: ${({color}) => (color ? color : VoiceUpColors.white)};
    top: 50%;
    left: 32px;
    font-size: 2em;
    z-index: 999;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const ForwardArrow = styled(IoIosArrowForward)`
    position: absolute;
    fill: ${({color}) => (color ? color : VoiceUpColors.white)};
    top: 50%;
    right: 32px;
    font-size: 2em;
    z-index: 999;
    cursor: pointer;

    @media screen and (max-width: 960px) {
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

    @media screen and (max-width: 960px) {
        margin: 0 8px;
    } 
`;

export default GlobalStyle;