import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes, elementHeights } from "../../globalVars";

const DEBUG = false;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: ${({direction}) => 
        (direction === "normal" && "row") ||
        (direction === "reverse" && "row-reverse") ||
        "row"
    };
    width: 100%;
    height: ${elementHeights.sectionHeight}px;
    ${DEBUG ? "border: 1px solid red;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${elementHeights.sectionHeight * 2}px;
        flex-direction: column-reverse;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${elementHeights.sectionHeight}px;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${DEBUG ? "background-color: coral;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${elementHeights.sectionHeight}px;
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
        font-size: ${ftSizes.M_ftSizeL};
        text-transform: uppercase;
        ${DEBUG ? "background-color: lightgreen;" : ""}
    }

    & > p {
        text-align: center;
        font-weight: 300;
        font-size: ${ftSizes.M_ftSizeMD};
        margin-bottom: 30px;
        ${DEBUG ? "background-color: lightblue;" : ""}
        /* padding-left: 20%;
        padding-right: 20%; */
    }
    
    @media only screen and (max-width: 950px) {
        #sectionIcon {
            width: 80px;
        }

        & > h1 {
            font-size: ${ftSizes.S_ftSizeL};
        }

        & > p {
            font-size: ${ftSizes.S_ftSizeMD};
            margin-bottom: 30px;
            padding-left: 0;
            padding-right: 0;
        }
    }
`;