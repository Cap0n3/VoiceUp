import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import * as globVars from "../../globalVars";

const DEBUG = false;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: ${({direction}) => 
        (direction === "normal" && "row") ||
        (direction === "reverse" && "row-reverse") ||
        "row"
    };
    width: 100%;
    height: ${globVars.sectionHeight}px;
    ${DEBUG ? "border: 1px solid red;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${globVars.sectionHeight * 2}px;
        flex-direction: column-reverse;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${globVars.sectionHeight}px;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${DEBUG ? "background-color: coral;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${globVars.sectionHeight}px;
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

    & > h1 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-transform: uppercase;
        ${DEBUG ? "background-color: lightgreen;" : ""}
    }

    & > p {
        text-align: center;
        font-weight: 300;
        font-size: 1em;
        margin-bottom: 30px;
        ${DEBUG ? "background-color: lightblue;" : ""}
        /* padding-left: 20%;
        padding-right: 20%; */
    }
    
    @media only screen and (max-width: 1024px) {
        #sectionIcon {
            width: 80px;
        }

        & > h1 {
            font-size: 2em;
        }

        & > p {
            font-size: 0.9em;
            margin-bottom: 30px;
            padding-left: 0;
            padding-right: 0;
        }
    }
`;