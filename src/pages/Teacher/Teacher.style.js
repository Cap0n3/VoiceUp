import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

const DEBUG = false;
const sectionPadding = 100;

export const AboutSection = styled.section`
    position: relative;
    width: 100%;
    height: ${({blocksHeight}) => (blocksHeight ? (blocksHeight + sectionPadding) : 5000)}px;
    overflow: hidden;
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1024px){
        /* Make big section to fit blocks + padding */
        height: ${({blocksHeight}) => (blocksHeight ? ((blocksHeight * 2) + (sectionPadding * 1.5)) : 5000)}px;
    }
`;

export const AboutImage = styled.img`
    position: absolute;
    top: ${sectionPadding / 2}px;
    left: 8vw;
    margin-left: -100%;
    /* Resize block with computed values (should be both with same size) */
    width: ${({width}) => (width ? `${width}px` : "33%")};
    height: ${({height}) => (height ? `${height}px` : "")};
    transition: margin-left 600ms ease;

    &.active {
        margin-left: 0;
    }

    @media only and screen (max-width: 1024px) {
        /* Center element in section */
        left: ${({height, scrWidth}) => (scrWidth - height) / 2}px;
    }
`;

export const DescriptionWrapper = styled.div`
    position: absolute;
    top: ${sectionPadding / 2}px;
    right: 8vw;
    margin-right: -100%;
    /* Resize block with computed values (should be both with same size) */
    width: ${({width}) => (width ? `${width}px` : "33%")};
    height: ${({height}) => (height ? `${height}px` : "")};
    padding: 3%;
    overflow-y: hidden;
    transition: margin-right 600ms ease;
    background-color: ${DEBUG ? "lightgreen" : VoiceUpColors.lightGrey};

    & > h2 {
        font-size: 1.8vw;
        margin-bottom: -5px;
        ${DEBUG ? "background-color: cyan;" : ""};
    }

    & > sub {
        display: inline-block;
        font-size: 1.1vw;
        font-weight: 400;
        margin-bottom: 2vw;
        ${DEBUG ? "background-color: yellow;" : ""};
    }

    & > p {
        font-size: 1.1vw;
        font-weight: 300;
        margin-bottom: 20px;
    }

    &.active {
        margin-right: 0;
    }

    @media only screen and (max-width: 1024px){
        /* Put block below first one */
        margin-top: ${({height}) => (height ? `${height + sectionPadding / 2}px` : "")};
        /* Center element in section */
        right: ${({width, scrWidth}) => (scrWidth - width) / 2}px;
        padding: 7%;

        & > h2 {
            font-size: 3.5vw;
            margin-bottom: 0px;
        }

        & > sub {
            font-size: 2vw;
            margin-bottom: 7vw;
        }

        & > p {
            font-size: 2.2vw;
        }
    }
`;

export const VideoSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 50px 50px;
    flex-wrap: wrap;
    padding: 50px 0 50px 0;
    background-color: ${VoiceUpColors.lightGrey};
    ${DEBUG ? "border: 1px solid yellow;" : ""}

    @media only screen and (max-width: 1024px) {
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }
`;
