import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { VoiceUpColors } from "./colors";

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
export const Button = styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    color: #fff;
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

export default GlobalStyle;