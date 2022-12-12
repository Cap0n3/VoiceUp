import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { VoiceUpColors } from "./colors";
import * as globVars from "./globalVars";

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
        overflow-x: hidden;
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
        ${'' /* width: 35px; */}
        cursor: pointer;
        transition: .3s;

        &:hover {
            filter: drop-shadow(3px 5px 2px ${VoiceUpColors.purple});
            transform: translateY(-0.25em);
        }
    }
`;

const pulse = keyframes`
    from {
        box-shadow: 0 0 0 0 #D9B47D;
    }
`;

// TODO - Not used yet
export const BaseContainer = styled.section`
    width: 100%;
    height: ${({height}) => (height ? height : globVars.sectionHeight)}px;
    max-height: 1280px;
    min-height: 300px;
`;

// export const Container = styled.div`
//     z-index: 1;
//     width: 100%;
//     max-width: 1300px;
//     margin-right: auto;
//     margin-left: auto;
//     padding-right: 30px;
//     padding-left: 30px;

//     ${'' /* @media only screen and (max-width: 991px) {
//         padding-right: 30px;
//         padding-left: 30px;
//     } */}
// `;

// For more cool button FX : https://alvarotrigo.com/blog/best-css-button-hover-effects/
export const OutlineBtn = styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    max-width: 250px;
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
    
    @media only screen and (max-width: 1024px) {
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

export const ScrollTop = styled.div`
    position: fixed;
    bottom: 60px;
    right: 60px;
    width: 80px;
    height: 80px;
    background-color: red;
    z-index: 999;
`;

export default GlobalStyle;