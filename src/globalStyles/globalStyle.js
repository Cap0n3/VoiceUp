import { createGlobalStyle } from 'styled-components';
import { VoiceUpColors } from "../colors";
import { elementHeights } from '../globalVars';

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
        padding-top: ${elementHeights.navbarHeight}px;
        overflow-x: hidden;
        overflow-y: auto;
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

    @media only screen and (max-width: 1024px) {
        &.main {
            padding-top: ${elementHeights.mobileNavbarHeight}px;
        }
    }

    &.inlineLink {
        text-decoration: none;
        color: ${VoiceUpColors.gold};
        font-weight: 500;

        ${'' /* &:visited {
            color: ${VoiceUpColors.purple};
        } */}

        &:hover {
            text-decoration: underline;
            color: ${VoiceUpColors.purple};
        }
    }
`;

export default GlobalStyle;
