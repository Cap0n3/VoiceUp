import styled from "styled-components";
import Tania2 from "../../assets/images/Tania/Tania2_medium_header_over.jpg";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;
const sectionHeight = 700;

export const C2AContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${sectionHeight- 200}px;
    overflow: hidden;
    background-color: black;
    ${DEBUG ? "border: 1px solid blue;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${sectionHeight - 300}px;
    }
`;

export const ImgDiv = styled.div`
    position: absolute;
    height: ${sectionHeight}px;
    width: ${({width}) => (width ? `${width}px` : "100%")};
    background-image: ${`url(${Tania2})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateY(${({paralOffset}) => {
        // console.log(paralOffset);
        return `${paralOffset}px`
    }});
    
    /* z-index: -1; */

    @media only screen and (max-width: 1024px) {
        height: ${sectionHeight + 100}px;
    }
`;

export const BoxWrapper = styled.div`
    width: 45%;
    margin-left: -145%;
    transition: margin-left ${({transitionTime}) => transitionTime}ms ease; 
    z-index: 900;
    ${DEBUG ? "border: 1px solid pink;" : ""}

    &.active {
        margin-left: 0;
    }

    @media only screen and (max-width: 1024px) {
        width: 55%;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: visible;
    overflow-wrap: break-word;
    
    & > h1, h2 {
        text-align: center;
        color: ${VoiceUpColors.white};
        text-transform: uppercase;
        font-weight: normal;
        ${DEBUG ? "border: 1px solid red;" : ""}
    }

    & > h1 {
            font-size: ${FONT_SIZES.desktopHeadings};
            font-weight: ${FONT_WEIGHTS.subheadingsWeight};
            margin-bottom: 5px;

            @media only screen and (max-width: 1024px) {
                font-size: ${FONT_SIZES.mobileHeadings};
            }
        }

    & > h2 {
        font-size: ${FONT_SIZES.desktopSubheadings};
        margin-bottom: 30px;

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobileSubheadings};
        }
    }

    & > p {
        text-align: center;
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        color: ${VoiceUpColors.white};
        ${DEBUG ? "border: 1px solid purple;" : ""}

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobileBody};
        }
    }
`;