import styled, { createGlobalStyle } from 'styled-components';
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

export default GlobalStyle;