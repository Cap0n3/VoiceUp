import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ELEMENT_HEIGHTS, FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;

export const AboutSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: ${ELEMENT_HEIGHTS.sectionHeight}px;
    overflow: hidden;
    padding: 60px 0 60px 0;
    ${DEBUG ? "background-color: lightblue;" : ""}
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    ${DEBUG ? "border: 1px solid green;" : ""}

    & > p {
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        margin-bottom: 15px;

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobileBody};    
        }
    }
`;

export const SubTitle = styled.h4`
    font-size: 0.8rem;
    font-weight: ${FONT_WEIGHTS.headingsWeight};
    text-transform: uppercase;
    margin-bottom: 60px;

    @media only screen and (max-width: 1024px) {
        font-size: 0.6rem;    
    }
`;

export const VideoSection = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 60px 0 60px 0;
    min-height: ${ELEMENT_HEIGHTS.sectionHeight};
    background-color: ${VoiceUpColors.lightGrey};
    overflow: hidden;
    ${DEBUG ? "border: 1px solid yellow;" : ""}

    @media only screen and (max-width: 1024px) {
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }
`;

export const VideosWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px 50px;
    flex-wrap: wrap;
    ${DEBUG ? "border: 1px solid blue;" : ""}
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease;
`;
