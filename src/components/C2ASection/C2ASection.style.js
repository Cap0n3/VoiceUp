import styled from "styled-components";
import Tania2 from "../../assets/images/Tania/Tania2_medium_header_over.jpg";
import { VoiceUpColors } from "../../colors";
import { ftSizes } from "../../globalVars";

const DEBUG = false;
const sectionHeight = 700;

export const C2AContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${sectionHeight- 200}px;
    /* transform-style: preserve-3d; */
    overflow: hidden;
    background-color: black;
    /* z-index: -1; */
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
        console.log(paralOffset)
        return`${paralOffset}px`
    }});
    
    /* z-index: -1; */

    @media only screen and (max-width: 1024px) {
        height: ${sectionHeight + 100}px;
    }
`;

export const BoxWrapper = styled.div`
    width: 45%;
    ${DEBUG ? "border: 1px solid pink;" : ""}
    
    margin-left: -145%;
    transition: margin-left ${({transitionTime}) => transitionTime}ms ease; 

    &.active {
        margin-left: 0;
    }

    @media only screen and (max-width: 1024px) {
        width: 55%;
    }
`;

export const TextBox = styled.div`
    position: relative;
    z-index: 999;
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
            font-size: ${ftSizes.M_ftSizeXL};
            margin-bottom: 5px;

            @media only screen and (max-width: 1024px) {
                font-size: ${ftSizes.S_ftSizeXL};
            }
        }

    & > h2 {
        font-size: ${ftSizes.M_ftSizeL};
        margin-bottom: 30px;

        @media only screen and (max-width: 1024px) {
            font-size: ${ftSizes.S_ftSizeL};
        }
    }

    & > p {
        text-align: center;
        font-size: ${ftSizes.M_ftSizeMD};
        color: ${VoiceUpColors.white};
        ${DEBUG ? "border: 1px solid purple;" : ""}
    }
`;