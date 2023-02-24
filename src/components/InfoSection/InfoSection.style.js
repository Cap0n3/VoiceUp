import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES, ELEMENT_HEIGHTS, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: ${({direction}) => 
        (direction === "normal" && "row") ||
        (direction === "reverse" && "row-reverse") ||
        "row"
    };
    width: 100%;
    height: ${ELEMENT_HEIGHTS.sectionHeight}px;
    ${DEBUG ? "border: 1px solid red;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${ELEMENT_HEIGHTS.sectionHeight * 2}px;
        flex-direction: column-reverse;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${ELEMENT_HEIGHTS.sectionHeight}px;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${DEBUG ? "background-color: coral;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${ELEMENT_HEIGHTS.sectionHeight}px;
    }
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({imgSRC}) => imgSRC});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${VoiceUpColors.black};
    margin-left: ${({direction}) => 
        (direction === "normal" && "-100%") ||
        (direction === "reverse" && "100%") ||
        "0"
    };
    transition: margin-left ${({transitionTime}) => transitionTime}ms ease;

    &.active {
        margin-left: 0;
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: ${({direction}) => 
        (direction === "normal" && "100%") ||
        (direction === "reverse" && "-100%") ||
        "0"
    };
    transition: margin-left ${({transitionTime}) => transitionTime}ms ease;
    background-color:  ${DEBUG ? "lightgreen" : VoiceUpColors.white};
    
    &.active {
        margin-left: 0;
    }
`;

export const TextDiv = styled.div`
    max-width: 80%;
    overflow-wrap: break-word;
    ${DEBUG ? "border: 1px solid brown;" : ""}
    
    #sectionIcon {
        display: block; 
        width: 100px;
        fill: ${VoiceUpColors.gold};
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
    }

    & > h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: ${FONT_SIZES.desktopSubheadings};
        font-weight: ${FONT_WEIGHTS.subheadingsWeight};
        text-transform: uppercase;
        ${DEBUG ? "background-color: lightgreen;" : ""}
    }

    & > p {
        text-align: center;
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        font-size: ${FONT_SIZES.desktopBody};
        margin-bottom: 30px;
        ${DEBUG ? "background-color: lightblue;" : ""}
    }
    
    & > :last-child {
        margin-bottom: 0;
        ${DEBUG ? "background-color: red;" : ""}
    }
    
    /* @media only screen and (max-width: 950px) {
        #sectionIcon {
            width: 80px;
        }

        & > h2 {
            font-size: ${FONT_SIZES.mobileSubheadings};
        }

        & > p {
            font-size: ${FONT_SIZES.mobileBody};
            padding-left: 0;
            padding-right: 0;
        }
    } */

    /* Tablet */
    @media only screen and (max-width: 1024px) and (min-width: 450px) {    
        & > p {
            padding-left: 0;
            padding-right: 0;
        }
    }

    /* Standard mobile */
    @media only screen and (max-width: 450px) and (min-width: 300px) {
        #sectionIcon {
            width: 80px;
        }

        & > h2 {
            font-size: ${FONT_SIZES.mobileSubheadings};
        }

        & > p {
            font-size : ${FONT_SIZES.mobileBody};
            margin-bottom: 20px;
        }
    }

    /* Narrow screen (like Galaxy Fold) */
    @media only screen and (max-width: 300px) {
        max-width: 90%;
        
        & > h2, p {
            margin-bottom: 15px;
        }

        & > h2 {
            font-size: ${FONT_SIZES.mobileSubheadings};
        }

        & > p {
            font-size: ${FONT_SIZES.mobileBody};
        }    
    }
`;